'use server';

import { z } from 'zod';
import { post, postAndResponse, postJson } from '../../utils/fetch';
import { redirect } from 'next/navigation';
import ApiResponse from '../../common/api.response';
import { setAuthCookie } from '@/app/utils/cookie';

const FormSchema = z.object(
    {
        email: z
            .string({
                required_error: 'Veuillez saisir votre email'
            }).email(
                {
                    message: "L'email saisi est invalid."
                }
            ),
        name: z
            .string({
                required_error: 'Veuillez saisir votre Prénoms et Nom'
            }).min(1, {
                message: 'Veuillez saisir votre Prénoms et Nom'
            }),
        phone: z
            .string({
                required_error: 'Veuillez saisir votre Numero de telephone en format international: +224..'
            })
            .min(1, {
                message: 'Veuillez saisir votre Numero de telephone en format international: +224..'
            }),
        password: z
            .string()
            .min(6, {
                message: 'Le mot de passe doit etre au minimum 6 caractères'
            }).max(12, { message: 'le mot de passe doit etre au maximum 12 caractères' }),
    }
);

export type State = {
    errors?: {
        email?: string[],
        name?: string[];
        phone?: string[];
        password?: string[];
    };
    message?: string | null;
}

export async function signUp(prevState: State, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = await FormSchema.safeParseAsync(rawFormData);


    if (!validatedFields.success) {

        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Champs manquants. Échec de la création de compte.'
        }
    }

    //send data to api
    const apiResult: ApiResponse<any> = await post('auth/signup', formData);
    console.log('signing result :',apiResult);
    if (apiResult.success) {
        //sign in
        const data = {
            username: rawFormData['email'].valueOf(),
            password: rawFormData['password'].valueOf()
        }
        const res = await postAndResponse('auth/signin',data);
        const result: ApiResponse<any> = await res.json();
        if (!result.success)
                return { message: result.message }

        setAuthCookie(res);
    }
    else
        return { message: apiResult.message }

    //go to dashboard
    redirect("/dashboard");
}

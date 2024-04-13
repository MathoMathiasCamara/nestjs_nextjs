'use server'

import { post, postJson } from '@/app/utils/fetch';
import { redirect } from 'next/navigation';
import { z } from 'zod';

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
        newPassword: z
            .string()
            .min(6, {
                message: 'Le mot de passe doit etre au minimum 6 caractères'
            }).max(12, { message: 'le mot de passe doit etre au maximum 12 caractères' }),
    }
);

export type State = {
    errors?: {
        email?: string[],
        newPassword?: string[];
    };
    message?: string | null;
}


export default async function changePassword(_prevState: State, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = await FormSchema.safeParseAsync(rawFormData);

    if (!validatedFields.success)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Champs manquants. Échec de la connection.'
        }


    const response = await postJson('users/change-password', rawFormData)
    if (!response.success) 
        return { message: response.message }

    redirect("/signin");
}


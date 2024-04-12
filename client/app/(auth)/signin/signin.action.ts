'use server'

import { setAuthCookie } from "@/app/utils/cookie";
import { postAndResponse } from "@/app/utils/fetch";
import { redirect } from "next/navigation";
import { z } from 'zod';

const FormSchema = z.object(
    {
        username: z
            .string({
                required_error: 'Veuillez saisir votre email'
            }).email(
                {
                    message: "L'email saisi est invalid."
                }
            ),
        password: z
            .string()
            .min(6, {
                message: 'Le mot de passe doit etre au minimum 6 caractères'
            }).max(12, { message: 'le mot de passe doit etre au maximum 12 caractères' }),
    }
);

export type State = {
    errors?: {
        username?: string[],
        password?: string[];
    };
    message?: string | null;
}

export default async function signIn(_prevState: State, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = await FormSchema.safeParseAsync(rawFormData);

    if (!validatedFields.success)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Champs manquants. Échec de la connection.'
        }


    const res = await postAndResponse('auth/signin', rawFormData)
    const parsedRes = await res.json();
    if (!res.ok) {
        return { error: parsedRes };
    }

    setAuthCookie(res);
    redirect("/dashboard");
}


'use server'
import ApiResponse from '@/app/common/api.response';
import { put } from '@/app/utils/fetch';
import { redirect } from 'next/navigation';
import { z } from 'zod';


//change password
const FormSchema = z.object(
    {
        newPassword: z
        .string()
        .min(6, {
            message: 'Le mot de passe doit etre au minimum 6 caractères'
        }).max(12, { message: 'le mot de passe doit etre au maximum 12 caractères' }),
        email: z
            .string({
                required_error: 'Veuillez saisir votre email'
            }).email(
                {
                    message: "L'email saisi est invalid."
                }
            ),
    }
);

export type State = {
    errors?: {
        newPassword?: string[],
        email? :string[]
    },
    message?: string | null;
}
const ChangePassword = FormSchema.omit({ email: true});
export async function changePassword(userId: number,prevState: State, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = await ChangePassword.safeParseAsync(rawFormData);


    if (!validatedFields.success) 
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Champs manquants. Échec lors de l'enregistrement."
      }


    //send data to api
    const apiResult: ApiResponse<any> = await put(`users/change-password/${userId}`, formData);

    if(!apiResult.success)
        return { message: apiResult.message , errors: null}

    redirect('/user/profile');
}
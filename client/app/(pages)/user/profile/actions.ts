'use server'

import ApiResponse from "@/app/common/api.response";
import getMe from "@/app/get-me"
import { get, post, put } from "@/app/utils/fetch";
import UserProfile from "./user-profile";
import { z } from 'zod';
import { redirect } from "next/navigation";

export async function getProfile(){
    try {
        const { userId } = await getMe();

        console.log('user id:',userId);
        if(!userId) return undefined;

        const result : ApiResponse<UserProfile> = await get(`users/profile/${userId}`);

        if(!result.success) return undefined;

        return result.data;

    } catch (error) {
        return undefined;
    }
}


// Update Profile
const FormSchema = z.object(
    {
        id: z
        .coerce.number(),
        email: z
            .string({
                required_error: 'Veuillez saisir votre email'
            }).email(
                {
                    message: "L'email saisi est invalid."
                }
            ),
        fullname: z
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
            })
    }
);


export type State = {
    errors?: {
        email?: string[],
        fullname?: string[],
        phone?: string[],
    },
    message?: string | null;
}
const UpdateProfile = FormSchema.omit({ id: true});

export async function updateProfile(userId: number,prevState: State, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = await UpdateProfile.safeParseAsync(rawFormData);


    if (!validatedFields.success) 
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Champs manquants. Échec lors de l'enregistrement."
      }


    //send data to api
    const apiResult: ApiResponse<any> = await put(`users/profile/${userId}`, formData);

    if(!apiResult.success)
        return { message: apiResult.message , errors: null}

    return { message: null, errors: undefined };
}


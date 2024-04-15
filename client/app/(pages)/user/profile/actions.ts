'use server'

import ApiResponse from "@/app/common/api.response";
import getMe from "@/app/get-me"
import { get } from "@/app/utils/fetch";
import { UserProfile } from "./user-profile";


export async function getProfile(){
    try {
        const { userId } = await getMe();

        if(!userId) return undefined;

        const result : ApiResponse<UserProfile> = await get(`users/profile/${userId}`);

        if(!result.success) return undefined;

        return result.data;

    } catch (error) {
        return undefined;
    }
}
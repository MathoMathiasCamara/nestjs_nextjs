'use server'

import { redirect } from "next/navigation";
import { removeCookie } from "../utils/cookie";

export default async function signOut() {
    removeCookie('Authentication');
    redirect("/signin");
}

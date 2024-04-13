import { IsEmail, IsNotEmpty } from "class-validator";

export class ChangePasswordRequest{
    @IsEmail()
    email: string;

    @IsNotEmpty()
    newPassword: string;
}
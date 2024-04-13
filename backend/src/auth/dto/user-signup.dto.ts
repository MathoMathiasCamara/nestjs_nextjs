import { IsEmail, IsNotEmpty, IsPhoneNumber, isValidationOptions } from "class-validator";

export class UserSignUpDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsNotEmpty()
    password: string;
}
import { IsNotEmpty } from "class-validator";

export default class UserProfileDto {
    @IsNotEmpty()
    id       : Number;    

    @IsNotEmpty()
    fullname :string;

    @IsNotEmpty()
    email   : string;

    @IsNotEmpty()
    phone   : string ;
}
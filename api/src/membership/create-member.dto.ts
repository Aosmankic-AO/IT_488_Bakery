import { IsNotEmpty, IsEmail } from "class-validator";

//Data Transfer Object for create member
// @Decorators used for validation to ensure data is not empty and in valid form
export class CreateMemberDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    dob: Date;
}
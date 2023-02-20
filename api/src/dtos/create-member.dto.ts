import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  dob: Date;
}

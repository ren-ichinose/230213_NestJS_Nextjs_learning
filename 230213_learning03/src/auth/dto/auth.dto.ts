import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  fullName!: string;

  @IsNotEmpty()
  password!: string;
}
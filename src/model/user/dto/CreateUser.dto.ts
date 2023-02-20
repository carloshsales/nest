import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	@ApiProperty({
		description: "Nome do usuário",
		example: "Mano CH",
	})
	name: string;

	@IsString()
	@ApiProperty({
		description: "Email",
		example: "teste@test.com",
	})
	email: string;

	@IsString()
	@ApiProperty({
		description: "Senha",
		example: "123",
	})
	password: string;

	@IsString()
	@ApiProperty({
		description: "Confirmação da senha",
		example: "123",
	})
	confirmPassword: string;

	@IsString()
	@ApiProperty({
		description: "CPF",
		example: "1234567890",
	})
	cpf: string;

	@IsBoolean()
	@ApiProperty({
		description: "Admin",
		example: "true or false",
	})
	isAdmin: boolean;
}

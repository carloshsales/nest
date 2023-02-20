import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfileDto {
	@IsString()
	@ApiProperty({
		description: "Nome do perfil",
		example: "CH",
	})
	title: string;

	@IsString()
	@ApiProperty({
		description: "Image url",
		example: "image.com/imageexample",
	})
	imageUrl: string;
}

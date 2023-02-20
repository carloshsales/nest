import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl } from "class-validator";

export class CreateGameDto {
	@IsString()
	@ApiProperty({
		description: "Titulo do game",
		example: "God of War",
	})
	title: string;

	@IsString()
	@ApiProperty({
		description: "Descrição do game",
		example: "Porrada nos deuses",
	})
	description: string;

	@IsUrl()
	@ApiProperty({
		description: "Imagem do game",
		example: "https://www.example.com.br/exemple.jpg",
	})
	coverImageUrl: string;

	@IsString()
	@ApiProperty({
		description: "Ano do game",
		example: "2012",
	})
	year: string;

	@IsNumber()
	@ApiProperty({
		description: "Ano do game - (0 ~ 5)",
		example: 5,
	})
	imdbScore: number;

	@IsString()
	@ApiProperty({
		description: "link trailer",
		example: "youtube.com/trailerDoMelhorJogo",
	})
	trailerYouTubeUrl: string;

	@IsString()
	@ApiProperty({
		description: "link gameplay",
		example: "youtube.com/gameplayDoMelhorJogo",
	})
	gameplayYouTubeUrl: string;
}

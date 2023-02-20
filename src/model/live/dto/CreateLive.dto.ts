import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateLiveDto {
	@IsUUID()
	@ApiProperty({
		description: "Identificação do perfil - ID",
		example: "xxxxxxxxxx",
	})
	profileId: string;

	@IsUUID()
	@ApiProperty({
		description: "game disponível para adicionar aos favoritos - ID",
		example: "xxxxxxxxxxx",
	})
	gameId: string;
}

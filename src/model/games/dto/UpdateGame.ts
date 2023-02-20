import { PartialType } from "@nestjs/swagger";
import { CreateGameDto } from "./CreateGame.dto";

export class UpdateGameDto extends PartialType(CreateGameDto) {
	id: string;
}

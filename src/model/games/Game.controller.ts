import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { DataProcessing } from "src/helpers/exceptions/dataprocessing";
import { CreateGameDto } from "./dto/CreateGame.dto";
import { UpdateGameDto } from "./dto/UpdateGame";
import { GameEntity } from "./entities/Game.entity";
import { GameService } from "./Game.service";

@ApiTags("Movies")
@Controller("movies")
export class GameController {
	constructor(private readonly service: GameService) {}

	@ApiOperation({
		summary: "todos games",
	})
	@Get()
	async findAll(): Promise<GameEntity[]> {
		try {
			return await this.service.findAll();
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Adicionar game",
	})
	@Post()
	async create(@Body() dto: CreateGameDto): Promise<GameEntity> {
		try {
			return await this.service.create(dto);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Buscar game - ID",
	})
	@Get(":id")
	async findOne(@Param("id") id: string): Promise<GameEntity> {
		try {
			return await this.service.findOne(id);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Editar um game - ID",
	})
	@Patch(":id")
	async update(
		@Param("id") id: string,
		@Body() dto: UpdateGameDto
	): Promise<GameEntity> {
		try {
			return await this.service.update(id, dto);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "deletar um game - ID",
	})
	@Delete(":id")
	async delete(@Param("id") id: string) {
		try {
			await this.service.delete(id);
		} catch (err) {
			DataProcessing(err);
		}
	}
}

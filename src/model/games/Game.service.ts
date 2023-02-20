import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Exceptions } from "src/helpers/exceptions/exceptionClass";
import { Exception } from "src/helpers/exceptions/exceptions";
import { CreateGameDto } from "./dto/CreateGame.dto";
import { UpdateGameDto } from "./dto/UpdateGame";
import { GameEntity } from "./entities/Game.entity";
import { GameRepository } from "./Game.repository";

@Injectable()
export class GameService {
	constructor(private readonly repository: GameRepository) {}

	async findAll(): Promise<GameEntity[]> {
		try {
			return await this.repository.findAll();
		} catch (err) {
			throw new Exceptions(Exception.UnprocessableEntityException);
		}
	}

	async create(dto: CreateGameDto): Promise<GameEntity> {
		try {
			const game: GameEntity = { ...dto, id: randomUUID() };
			return await this.repository.create(game);
		} catch (err) {
			throw new Exceptions(Exception.InvalidData);
		}
	}

	async findOne(id: string): Promise<GameEntity> {
		try {
			return await this.repository.findOne(id);
		} catch (err) {
			throw new Exceptions(Exception.NotFoundException);
		}
	}

	async update(id: string, dto: UpdateGameDto): Promise<GameEntity> {
		try {
			await this.findOne(id);
			const game: Partial<GameEntity> = { ...dto };
			return await this.repository.update(id, game);
		} catch (err) {
			throw new Exceptions(Exception.UnprocessableEntityException);
		}
	}

	async delete(id: string) {
		try {
			await this.repository.delete(id);
		} catch (err) {
			throw new Exceptions(Exception.NotFoundException);
		}
	}
}

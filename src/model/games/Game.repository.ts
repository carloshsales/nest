import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Exceptions } from "src/helpers/exceptions/exceptionClass";
import { Exception } from "src/helpers/exceptions/exceptions";
import { CreateGameDto } from "./dto/CreateGame.dto";
import { GameEntity } from "./entities/Game.entity";

@Injectable()
export class GameRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<GameEntity[]> {
		try {
			return await this.prisma.game.findMany();
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async create(data: GameEntity): Promise<GameEntity> {
		try {
			return await this.prisma.game.create({ data });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async findOne(id: string): Promise<GameEntity> {
		try {
			return await this.prisma.game.findFirstOrThrow({ where: { id } });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async update(id: string, data: Partial<GameEntity>): Promise<GameEntity> {
		try {
			return await this.prisma.game.update({ where: { id }, data });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async delete(id: string): Promise<GameEntity> {
		try {
			return await this.prisma.game.delete({ where: { id } });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}
}

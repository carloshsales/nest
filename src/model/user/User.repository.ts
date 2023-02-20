import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Exceptions } from "src/helpers/exceptions/exceptionClass";
import { Exception } from "src/helpers/exceptions/exceptions";
import { UserEntity } from "./entities/User.entity";

@Injectable()
export class UserRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<UserEntity[]> {
		try {
			return await this.prisma.user.findMany();
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async create(data: any): Promise<UserEntity> {
		try {
			return await this.prisma.user.create({ data });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async findOne(id: string): Promise<UserEntity> {
		try {
			return await this.prisma.user.findFirstOrThrow({ where: { id } });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async update(id: string, data: any): Promise<UserEntity> {
		try {
			return await this.prisma.user.update({ where: { id }, data });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async delete(id: string): Promise<UserEntity> {
		try {
			return await this.prisma.user.delete({ where: { id } });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}
}

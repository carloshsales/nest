import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Exceptions } from "src/helpers/exceptions/exceptionClass";
import { Exception } from "src/helpers/exceptions/exceptions";
import { UserRepository } from "./User.repository";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import { UserEntity } from "./entities/User.entity";

@Injectable()
export class UserService {
	constructor(private readonly repository: UserRepository) {}

	async findAll(): Promise<UserEntity[]> {
		try {
			return await this.repository.findAll();
		} catch (err) {
			throw new Exceptions(Exception.UnprocessableEntityException);
		}
	}

	async create(dto: CreateUserDto): Promise<UserEntity> {
		try {
			const user: UserEntity = { ...dto, id: randomUUID() };
			return await this.repository.create(user);
		} catch (err) {
			throw new Exceptions(Exception.InvalidData);
		}
	}

	async findOne(id: string): Promise<UserEntity> {
		try {
			return await this.repository.findOne(id);
		} catch (err) {
			throw new Exceptions(Exception.NotFoundException);
		}
	}

	async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
		try {
			await this.findOne(id);
			const user: Partial<UserEntity> = { ...dto };
			return await this.repository.update(id, user);
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

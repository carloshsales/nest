import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Exceptions } from "src/helpers/exceptions/exceptionClass";
import { Exception } from "src/helpers/exceptions/exceptions";
import { CreateProfileDto } from "./dto/CreateProfile.dto";
import { UpdateProfileDto } from "./dto/UpdateProfile.dto";
import { ProfileEntity } from "./entities/Profile.entity";
import { ProfileRepository } from "./Profile.repository";
import * as bcrypt from "bcrypt";

@Injectable()
export class ProfileService {
	constructor(private readonly repository: ProfileRepository) {}

	async findAll(): Promise<ProfileEntity[]> {
		try {
			return await this.repository.findAll();
		} catch (err) {
			throw new Exceptions(Exception.UnprocessableEntityException);
		}
	}

	async create(dto: CreateProfileDto): Promise<ProfileEntity> {
		try {
			const profile: ProfileEntity = {
				...dto,
				id: randomUUID(),
			};

			return await this.repository.create(profile);
		} catch (err) {
			throw new Exceptions(Exception.InvalidData);
		}
	}

	async findOne(id: string): Promise<ProfileEntity> {
		try {
			return await this.repository.findOne(id);
		} catch (err) {
			throw new Exceptions(Exception.NotFoundException);
		}
	}

	async update(id: string, dto: UpdateProfileDto): Promise<ProfileEntity> {
		try {
			await this.findOne(id);
			const profile: Partial<ProfileEntity> = { ...dto };
			return await this.repository.update(id, profile);
		} catch (err) {
			throw new Exceptions(Exception.UnprocessableEntityException);
		}
	}

	async delete(id: string) {
		try {
			await this.findOne(id);
			await this.repository.delete(id);
		} catch (err) {
			throw new Exceptions(Exception.NotFoundException);
		}
	}
}

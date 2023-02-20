import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Exceptions } from "src/helpers/exceptions/exceptionClass";
import { Exception } from "src/helpers/exceptions/exceptions";
import { ProfileEntity } from "./entities/Profile.entity";

@Injectable()
export class ProfileRepository {
	private Select = {
		id: true,
		title: true,
		imageUrl: true,
	};

	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<ProfileEntity[]> {
		try {
			return await this.prisma.profile.findMany({ select: this.Select });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async create(data: any): Promise<ProfileEntity> {
		try {
			return await this.prisma.profile.create({
				data,
				select: this.Select,
			});
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async findOne(id: string): Promise<ProfileEntity> {
		try {
			return await this.prisma.profile.findFirstOrThrow({
				where: { id },
				select: this.Select,
			});
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async update(id: string, data: any): Promise<ProfileEntity> {
		try {
			return await this.prisma.profile.update({
				where: { id },
				data,
				select: this.Select,
			});
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}

	async delete(id: string): Promise<ProfileEntity> {
		try {
			return await this.prisma.profile.delete({ where: { id } });
		} catch (err) {
			throw new Exceptions(Exception.DatabaseException);
		}
	}
}

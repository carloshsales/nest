import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateLiveDto } from "./dto/CreateLive.dto";

@Injectable()
export class LiveService {
	constructor(private readonly prisma: PrismaService) {}
	create(createLiveDto: CreateLiveDto) {
		const data: Prisma.LiveCreateInput = {
			id: randomUUID(),
			profile: {
				connect: {
					id: createLiveDto.profileId,
				},
			},
			games: {
				connect: {
					id: createLiveDto.gameId,
				},
			},
			user: null,
		};
		return this.prisma.live.create({
			data,
			select: {
				id: true,
				profile: {
					select: {
						title: true,
						games: true,
					},
				},
			},
		});
	}

	findAll() {
		return this.prisma.profile.findMany({
			select: {
				id: true,
				title: true,
				games: true,
			},
		});
	}

	findOne(id: string) {
		return this.prisma.live.findUnique({
			where: { id },
			select: {
				id: true,
				profile: {
					select: {
						title: true,
						games: true,
					},
				},
			},
		});
	}
}

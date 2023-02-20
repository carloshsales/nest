import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { DataProcessing } from "src/helpers/exceptions/dataprocessing";
import { CreateProfileDto } from "./dto/CreateProfile.dto";
import { UpdateProfileDto } from "./dto/UpdateProfile.dto";
import { ProfileEntity } from "./entities/Profile.entity";
import { ProfileService } from "./Profile.service";

@ApiTags("Profile")
@Controller("profile")
export class ProfileController {
	constructor(private readonly service: ProfileService) {}

	@ApiOperation({
		summary: "Todos perfis",
	})
	@Get()
	async findAll(): Promise<ProfileEntity[]> {
		try {
			return await this.service.findAll();
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Cadastrar novo perfil",
	})
	@Post()
	async create(@Body() dto: CreateProfileDto): Promise<ProfileEntity> {
		try {
			return await this.service.create(dto);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Buscar perfil - ID",
	})
	@Get(":id")
	async findOne(@Param("id") id: string): Promise<ProfileEntity> {
		try {
			return await this.service.findOne(id);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Alterar perfil - ID",
	})
	@Patch(":id")
	async update(
		@Param("id") id: string,
		@Body() dto: UpdateProfileDto
	): Promise<ProfileEntity> {
		try {
			return await this.service.update(id, dto);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Deletar perfil - ID",
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

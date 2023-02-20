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
import { UserService } from "./User.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import { UserEntity } from "./entities/User.entity";

@ApiTags("User")
@Controller("user")
export class UserController {
	constructor(private readonly service: UserService) {}

	@ApiOperation({
		summary: "Vizualizar todos usuários",
	})
	@Get()
	async findAll(): Promise<UserEntity[]> {
		try {
			return await this.service.findAll();
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Cadastrar Usuário",
	})
	@Post()
	async create(@Body() dto: CreateUserDto): Promise<UserEntity> {
		try {
			return await this.service.create(dto);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Procurar usuário por id",
	})
	@Get(":id")
	async findOne(@Param("id") id: string): Promise<UserEntity> {
		try {
			return await this.service.findOne(id);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Editar usuário por id",
	})
	@Patch(":id")
	async update(
		@Param("id") id: string,
		@Body() dto: UpdateUserDto
	): Promise<UserEntity> {
		try {
			return await this.service.update(id, dto);
		} catch (err) {
			DataProcessing(err);
		}
	}

	@ApiOperation({
		summary: "Deletar usuário",
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

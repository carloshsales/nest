import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateLiveDto } from "./dto/CreateLive.dto";
import { LiveService } from "./Live.service";

@ApiTags("Live")
@Controller("live")
export class LiveController {
	constructor(private readonly liveService: LiveService) {}

	@ApiOperation({
		summary: "Adicionar game aos favoritos",
	})
	@Post()
	create(@Body() createLiveDto: CreateLiveDto) {
		return this.liveService.create(createLiveDto);
	}

	@ApiOperation({
		summary: "todos os games",
	})
	@Get()
	findAll() {
		try {
			return this.liveService.findAll();
		} catch (err) {
			return { message: "Erro ao buscar os games" };
		}
	}

	@ApiOperation({
		summary: "Buscar game - ID",
	})
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.liveService.findOne(id);
	}
}

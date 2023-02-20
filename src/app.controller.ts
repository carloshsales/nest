import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags("Status")
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@ApiOperation({
		summary: "status",
	})
	@Get()
	getAppStatus(): string {
		return this.appService.getAppStatus();
	}
}

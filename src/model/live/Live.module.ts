import { Module } from "@nestjs/common";
import { LiveService } from "./Live.service";
import { LiveController } from "./Live.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
	imports: [PrismaModule],
	controllers: [LiveController],
	providers: [LiveService],
})
export class LiveModule {}

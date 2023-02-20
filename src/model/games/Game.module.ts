import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { GameController } from "./Game.controller";
import { GameRepository } from "./Game.repository";
import { GameService } from "./Game.service";

@Module({
	imports: [PrismaModule],
	controllers: [GameController],
	providers: [GameService, GameRepository],
})
export class GameModule {}

import { Module } from "@nestjs/common";
import { UserModule } from "./model/user/User.model";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GameModule } from "./model/games/Game.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ProfileModule } from "./model/profile/Profile.module";
import { LiveModule } from "./model/live/Live.module";

@Module({
	imports: [GameModule, ProfileModule, UserModule, PrismaModule, LiveModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

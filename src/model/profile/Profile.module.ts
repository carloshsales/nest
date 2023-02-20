import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProfileController } from "./Profile.controller";
import { ProfileRepository } from "./Profile.repository";
import { ProfileService } from "./Profile.service";

@Module({
	imports: [PrismaModule],
	controllers: [ProfileController],
	providers: [ProfileService, ProfileRepository],
})
export class ProfileModule {}

import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./User.controller";
import { UserRepository } from "./User.repository";
import { UserService } from "./User.service";

@Module({
	imports: [PrismaModule],
	controllers: [UserController],
	providers: [UserService, UserRepository],
})
export class UserModule {}

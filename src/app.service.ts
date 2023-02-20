import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	getAppStatus(): string {
		return `running ${process.env.PORT}`;
	}
}

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function servidor() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true,
		})
	);

	const config = new DocumentBuilder()
		.setTitle("XBox Live")
		.setVersion("Games in live")
		.setVersion("1.0.0")
		.addTag("Status")
		.addTag("Game")
		.addTag("Profile")
		.addTag("User")
		.addTag("Live")
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document);

	await app.listen(process.env.PORT || 8080);
}
servidor();

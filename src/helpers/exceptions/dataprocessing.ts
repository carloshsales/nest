import {
	BadRequestException,
	InternalServerErrorException,
	UnauthorizedException,
	NotFoundException,
	UnprocessableEntityException,
} from "@nestjs/common";
import { Exception, IException } from "./exceptions";

export function DataProcessing({ message, exception }: IException) {
	if (
		exception === Exception.InvalidData ||
		exception === Exception.NotFoundData
	) {
		throw new BadRequestException(message ? message : "invalid data");
	}

	if (exception === Exception.DatabaseException) {
		throw new InternalServerErrorException(
			message ? message : "database error"
		);
	}

	if (exception === Exception.UnauthorizedException) {
		throw new UnauthorizedException(message ? message : "unauthorized");
	}

	if (exception === Exception.NotFoundException) {
		throw new NotFoundException(message ? message : "regist not found");
	}

	if (exception === Exception.UnprocessableEntityException) {
		throw new UnprocessableEntityException(
			message ? message : "operation error"
		);
	}
}

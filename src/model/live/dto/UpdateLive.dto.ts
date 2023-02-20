import { PartialType } from "@nestjs/swagger";
import { CreateLiveDto } from "./CreateLive.dto";

export class UpdateLiveDto extends PartialType(CreateLiveDto) {}

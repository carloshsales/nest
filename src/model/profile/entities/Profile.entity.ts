import { GameEntity } from "src/model/games/entities/Game.entity";

export interface ProfileEntity {
	id: string;
	title: string;
	imageUrl: string;
	userId?: string;
	games?: GameEntity[];
}

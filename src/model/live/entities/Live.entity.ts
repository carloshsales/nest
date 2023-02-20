import { GameModule } from "src/model/games/Game.module";
import { ProfileEntity } from "src/model/profile/entities/Profile.entity";

export class Netflix {
	id?: string;
	profileId?: ProfileEntity;
	gameId?: GameModule;
}

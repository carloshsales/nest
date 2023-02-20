import { ProfileEntity } from "src/model/profile/entities/Profile.entity";

export interface UserEntity {
	id: string;
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	cpf: string;
	isAdmin: boolean;

	profiles?: ProfileEntity[];
}

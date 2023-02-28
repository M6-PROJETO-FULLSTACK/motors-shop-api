import { Adress } from "../../entities/adresses.entities";
import { Vehicle } from "../../entities/vehicles.entities";
import { Comment } from "../../entities/comments.entities";

export interface IUserRequest {
	name: string;
	email: string;
	password: string;
	cpf: string;
	phone: string;
	birthdate: Date;
	bio: string;
	type: boolean;
	adress: Adress;
}

export interface IUser extends IUserRequest {
	id?: string;
	createdAt: string;
	updatedAt: string;
	vehicles?: Vehicle[];
	comments?: Comment[];
}

export interface IUserLogin{
	email: string;
	password: string;
}

export interface IUserUpdate extends Partial<IUserRequest> { }

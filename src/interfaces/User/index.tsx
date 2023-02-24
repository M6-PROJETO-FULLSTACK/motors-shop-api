import { IGallery } from "../Gallery";

export interface IUserRequest {
	advertiseType: boolean;
	title: string;
	year: string;
	mileage: string;
	price: number;
	description: string;
	vehicleType: boolean;
	cover: string;
	isActive: boolean;
	gallery: IGallery[];
}

export interface IUser extends IUserRequest {
	id?: string;
	createdAt: string;
	updatedAt: string;
}

export interface IUserUpdate extends Partial<IUserRequest> {}


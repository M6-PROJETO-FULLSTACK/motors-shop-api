import { IGallery } from "../Gallery";

export interface IVehicleRequest {
	advertiseType: boolean;
	title: string;
	year: string;
	mileage: string;
	price: number;
	description: string;
	vehicleType: boolean;
	cover: string;
	gallery: IGallery[];
}

export interface IVehicle extends IVehicleRequest {
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface IVehicleUpdate {
	advertiseType?: boolean;
	title?: string;
	year?: string;
	mileage?: string;
	price?: number;
	description?: string;
	vehicleType?: boolean;
	cover?: string;
}

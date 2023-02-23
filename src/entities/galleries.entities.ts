import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Vehicle } from "./vehicles.entities";

@Entity("galleries")
export class Gallery {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	url: string;

	@Column()
	vehicle_id: string;

	@ManyToOne(() => Vehicle, (vehicle) => vehicle.galleryImages)
	vehicle: Vehicle;
}

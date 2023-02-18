import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("galleries")
export class Gallery {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	url: string;

	@Column()
	vehicle_id: string;
}

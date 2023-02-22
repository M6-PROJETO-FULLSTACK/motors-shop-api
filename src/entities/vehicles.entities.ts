import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Gallery } from "./galleries.entities";
import { User } from "./users.entities";

@Entity("vehicles")
export class Vehicle {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	advertiseType: boolean;

	@Column()
	title: string;

	@Column()
	year: string;

	@Column()
	mileage: string;

	@Column()
	price: number;

	@Column()
	description: string;

	@Column()
	vehicleType: boolean;

	@Column()
	cover: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToOne(() => User, user => user.vehicles)
	user: User;

	@OneToOne(() => Gallery, { eager: true })
	@JoinColumn()
	gallery: Gallery;
}

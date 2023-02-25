import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Gallery } from "./galleries.entities";
import { User } from "./users.entities";
import { Comment } from "./comments.entities";

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

	@Column()
	isActive: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToOne(() => User, (user) => user.vehicles)
	user: User;

	@OneToMany(() => Gallery, (image) => image.vehicle)
	galleryImages: Gallery[];

	@OneToMany(() => Comment, (comment) => comment.vehicle)
	comments: Comment[];
}

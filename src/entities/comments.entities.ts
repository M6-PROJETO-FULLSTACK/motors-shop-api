import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./users.entities";
import { Vehicle } from "./vehicles.entities";

@Entity("comments")
export class Comment {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	message: string;

	@Column()
	user_id: string;

	@Column()
	vehicle_id: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToOne(() => User, (user) => user.comments)
	user: User;

	@ManyToOne(() => Vehicle, (vehicle) => vehicle.comments)
	vehicle: Vehicle;
}

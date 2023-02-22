import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Adress } from "./adresses.entities";
import { Vehicle } from "./vehicles.entities";
import { Comment } from "./comments.entities";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	@Exclude()
	password: string;

	@Column()
	cpf: string;

	@Column()
	phone: string;

	@Column()
	birthdate: Date;

	@Column()
	bio: string;

	@Column()
	type: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToOne(() => Adress, { eager: true })
	@JoinColumn()
	adress: Adress;

	@OneToMany(() => Vehicle, (vehicle) => vehicle.user)
	vehicles: Vehicle[];

	@OneToMany(() => Comment, (comment) => comment.user)
	comments: Comment[];
}

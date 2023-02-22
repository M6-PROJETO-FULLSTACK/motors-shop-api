import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("adresses")
export class Adress {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	cep: string;

	@Column()
	state: string;

	@Column()
	city: string;

	@Column()
	street: string;

	@Column()
	number: string;

	@Column()
	complement: string;
}

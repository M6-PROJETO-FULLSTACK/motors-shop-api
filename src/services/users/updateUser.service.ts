import bcrypt from "bcrypt";
import { User } from "../../entities/users.entities";
import { Adress } from "../../entities/adresses.entities";
import { IUserUpdate } from "../../interfaces/User";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";

interface IAddress {
	cep: string;
	state: string;
	city: string;
	street: string;
	number: string;
	complement: string;
}

const updateUserService = async (id: string, data: IUserUpdate) => {
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id });
	if (!user) {
		throw new AppError("User not found.", 404);
	}


	if (data.adress) {
		const addressRepository = AppDataSource.getRepository(Adress);
		const address = await addressRepository.findOneBy({ id: user.adress.id });
		if (!address) {
			throw new AppError("Address not found.", 404);
		}

		const updatedAddress = await addressRepository.update(address.id, {
			cep: data.adress.cep || address.cep,
			state: data.adress.state || address.state,
			city: data.adress.city || address.city,
			street: data.adress.street || address.street,
			number: data.adress.number || address.number,
			complement: data.adress.complement || address.complement,
		});
		
	}
		


	await userRepository.update(id, {
		name: data.name || user.name,
		email: data.email || user.email,
		password: data.password ? await bcrypt.hash(data.password, 8) : user.password,
		cpf: data.cpf || user.cpf,
		phone: data.phone || user.phone,
		birthdate: data.birthdate || user.birthdate,
		bio: data.bio || user.bio,
		type: data.type || user.type,
	});

	const updatedUser = await userRepository.find({ where: { id }, relations: ["adress", "vehicles", "comments"] });
	return updatedUser;
};

export default updateUserService;

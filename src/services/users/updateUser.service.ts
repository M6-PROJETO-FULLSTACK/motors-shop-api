import bcrypt from "bcrypt";
import { User } from "../../entities/users.entities";
import { IUserUpdate } from "../../interfaces/User";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";

const UpdateUserService = async (id: string, data: IUserUpdate) => {
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id });
	if (!user) {
		throw new AppError("User not found.", 404);
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

export default UpdateUserService;

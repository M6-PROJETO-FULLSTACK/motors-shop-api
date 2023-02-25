import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import { User } from "../../entities/users.entities";

const listOneUserService = async (id: string) => {
	const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.find({ where: { id }, relations: ["adress", "vehicles", "comments"] });

	if (!user) {
		throw new AppError("User not found", 404);
	}

	return user;
};

export default listOneUserService;

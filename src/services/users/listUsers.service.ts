import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entities";

const listUsersService = async () => {
	const userRepository = AppDataSource.getRepository(User);

	const users = await userRepository.find({
		relations: ["adress", "vehicles", "comments"],
	});

	return users;
};

export default listUsersService;

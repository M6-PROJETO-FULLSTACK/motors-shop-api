import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entities";

const ListUsersService = async () => {
	const userRepository = AppDataSource.getRepository(User);

	const users = await userRepository.find({
		relations: ["adress", "vehicles", "comments"],
	});

	return users;
};

export default ListUsersService;

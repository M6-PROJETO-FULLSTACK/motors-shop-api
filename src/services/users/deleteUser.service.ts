import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entities";
import AppError from "../../errors/appError";

const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    await userRepository.delete(user);

    return true;
}

export default deleteUserService;

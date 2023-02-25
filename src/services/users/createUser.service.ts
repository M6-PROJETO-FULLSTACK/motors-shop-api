import AppDataSource from "../../data-source";
import bcrypt from "bcrypt";
import AppError from "../../errors/appError";
import { User } from "../../entities/users.entities";
import { IUserRequest } from "../../interfaces/User";
import { Adress } from "../../entities/adresses.entities";

const createUserService = async ({ name, email, password, cpf, phone, birthdate, bio, type, adress }: IUserRequest) => {
	const userRepository = AppDataSource.getRepository(User);
	const adressRepository = AppDataSource.getRepository(Adress);

	const createdAdress = adressRepository.create(adress);
	await adressRepository.save(createdAdress);

	const userExists = await userRepository.findOneBy({ email });

	if (userExists) {
		throw new AppError("User already exists", 400);
	}

	const hashedPassword = await bcrypt.hash(password, 8);

	const user = userRepository.create({
		name,
		email,
		password: hashedPassword,
		cpf,
		phone,
		birthdate,
		bio,
		type,
		adress: createdAdress,
	});

	await userRepository.save(user);

	return user;
};

export default createUserService;

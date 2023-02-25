import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../interfaces/User";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
	const id = req.params.id;
	const data: IUserRequest = req.body;

	const user = await updateUserService(id, data);

	return res.status(200).json(instanceToPlain(user));
};

export default updateUserController;

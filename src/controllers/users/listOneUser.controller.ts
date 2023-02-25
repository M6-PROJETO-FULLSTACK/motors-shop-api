import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listOneUserService from "../../services/users/listOneUser.service";

const listOneUserController = async (req: Request, res: Response) => {
	const { id } = req.params;
	const user = await listOneUserService(id);

	return res.status(200).json(instanceToPlain(user));
};

export default listOneUserController;

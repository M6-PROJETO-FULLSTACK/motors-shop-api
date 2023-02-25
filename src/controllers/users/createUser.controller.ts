import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../interfaces/User";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
	const data: IUserRequest = req.body;
    const user = await createUserService(data);

    return res.status(201).json(instanceToPlain(user));
};

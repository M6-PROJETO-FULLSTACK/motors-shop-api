import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import userLoginService from "../../services/session/userLogin.service";

const LoginUserController = async (req:Request, res:Response) => {
    const {email, password} = req.body
    const token = await userLoginService({email, password})

    return res.status(201).json(instanceToPlain(token))
}

export default LoginUserController
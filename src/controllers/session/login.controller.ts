import { Request, Response } from "express";
import userLoginService from "../../services/session/userLogin.service";

const LoginUserController = async (req:Request, res:Response) => {
    const {email, password} = req.body
    const token = await userLoginService({email, password})

    return res.status(201).json({token})
}

export default LoginUserController
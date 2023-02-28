import { Router } from "express";
import LoginUserController from "../controllers/session/login.controller";
import recoverPasswordController from "../controllers/session/recoverPassword.controller";

const LoginRoute = Router()

LoginRoute.post('', LoginUserController)
LoginRoute.post('/recover-password', recoverPasswordController)


export default LoginRoute
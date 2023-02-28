import { Router } from "express";
import LoginUserController from "../controllers/session/login.controller";

const LoginRoute = Router()

LoginRoute.post('', LoginUserController)


export default LoginRoute
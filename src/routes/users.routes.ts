import { Router } from "express";

import handleErrorMiddleware from "../middlewares/handleError.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import listOneUserController from "../controllers/users/listOneUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";

const usersRoutes = Router();

usersRoutes.post("/", handleErrorMiddleware, createUserController);
usersRoutes.get("/", handleErrorMiddleware, listUsersController);
usersRoutes.get("/:id", handleErrorMiddleware, listOneUserController);
usersRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
usersRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController);

export default usersRoutes;

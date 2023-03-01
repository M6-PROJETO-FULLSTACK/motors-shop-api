import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import { deleteCommentController } from "../controllers/comments/deleteComment.controller";
import listCommentByVehicleController from "../controllers/comments/listCommentByVehicle.controller";
import { updateCommentsController } from "../controllers/comments/updateComment.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import handleErrorMiddleware from "../middlewares/handleError.middleware";

const commentsRoutes = Router();

commentsRoutes.post(
  "/:id",
  ensureAuthMiddleware,
  handleErrorMiddleware,
  createCommentController
);
commentsRoutes.get(
  "/:id",
  handleErrorMiddleware,
  listCommentByVehicleController
);
commentsRoutes.patch("/:id", ensureAuthMiddleware, updateCommentsController);
commentsRoutes.delete("/:id", ensureAuthMiddleware, deleteCommentController);

export default commentsRoutes;

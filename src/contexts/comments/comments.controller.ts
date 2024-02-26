import { Router } from "express";
import commentService from "./comments.service";

const commentController = Router();

commentController.post("/", commentService.createComment);
commentController.patch("/:commentId", commentService.updateComment);
commentController.delete("/:commentId", commentService.deleteComment);

export default commentController;
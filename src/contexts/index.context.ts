import { Router } from "express"
import authController from "./auth/auth.controller";
import tweetController from "./tweets/tweets.controller";
import commentController from "./comments/comments.controller";

const controllers = Router();
controllers.use("/accounts/users", authController);
controllers.use("/tweets", tweetController);
controllers.use("/tweets/:tweetId/comments", commentController);

export default controllers;
import { Router } from "express"
import authController from "./auth/auth.controller";
import tweetController from "./tweets/tweets.controller";

const controllers = Router();
controllers.use("/accounts/users", authController);
controllers.use("/tweets", tweetController);

export default controllers;
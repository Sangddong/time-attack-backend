import { Router } from "express";
import tweetService from "./tweets.service";
import authController from "../auth/auth.controller";

const tweetController = Router();

tweetController.get("/", tweetService.getTweets);
tweetController.post("/", authController, tweetService.createTweet);
tweetController.patch("/:tweetId", authController, tweetService.updateTweet);
tweetController.delete("/:tweetId", authController, tweetService.deleteTweet);

export default tweetController;
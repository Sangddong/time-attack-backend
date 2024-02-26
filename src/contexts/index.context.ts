import { Router } from "express"
import authController from "./auth/auth.controller";

const controllers = Router();
controllers.use("/accounts/users", authController);

export default controllers;
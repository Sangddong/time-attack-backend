import { Router } from "express";
import authService from "./auth.service";

const authController = Router();

authController.post<"/sign-up", never, { accessToken: string }, { email: string, password: string, nickname: string, introduceOneLine: string; }>
  ("/sign-up", async (req, res, next) => {
    try {
      const { email, password, nickname, introduceOneLine } = req.body;
      const accessToken = await authService.signUp({ email, password, nickname, introduceOneLine });

      res.json({ accessToken });
    } catch (e) {
      next(e);
    }
  });

authController.post<"/log-in", never, { accessToken: string }, { email: string, password: string }>
  ("/log-in", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const accessToken = await authService.logIn({
        email, password,
        nickname: "",
        introduceOneLine: ""
      });

      res.json({ accessToken });
    } catch (e) {
      next(e);
    }
  });

export default authController;

import { User } from "@prisma/client";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { JWT_SECRET_KEY } from "../../config/env.config";
import prismaClient from "../../db/prisma/client.prisma";
import { LogInData, SignUpData } from "./auth.type";
import * as EmailValidator from 'email-validator';

const signUp = async (signUpData: SignUpData) => {
  const id = nanoid();
  const { email, password, nickname, introduceOneLine } = signUpData;

  if (!email || !password || !nickname || !introduceOneLine) throw new Error("모든 값을 입력해주세요.");
  const isEmail = EmailValidator.validate(email);
  if (!isEmail) throw new Error("이메일 형식이 올바르지 않습니다.");
  if (password.trim().length < 8) throw new Error("비밀번호는 8자 이상이어야 합니다.");

  const encryptedPassword = await hash(password, 12);
  const user = await prismaClient.user.create({
    data: { id, email, encryptedPassword, nickname, introduceOneLine },
  });
  const accessToken = generateAccessToken(user);

  return accessToken;
};

const logIn = async (logInData: LogInData) => {
  const { email, password } = logInData;
  const user = await prismaClient.user.findUnique({
    where: { email },
  });
  if (!user) throw new Error("No User");

  const isCorrect = await compare(password, user.encryptedPassword);
  if (!isCorrect) throw new Error("Invalid Password");

  const accessToken = generateAccessToken(user);

  return accessToken;
};

const generateAccessToken = (user: User) => {
  const { email } = user;
  const accessToken = jwt.sign({ email }, JWT_SECRET_KEY, {
    subject: user.id,
    expiresIn: "2d",
  });

  return accessToken;
};

const authService = {
  signUp,
  logIn,
};

export default authService;

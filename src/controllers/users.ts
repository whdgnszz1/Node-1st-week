import { Request, Response, NextFunction } from "express";
import { SignUpRequest } from "../dto/users";
import asyncHandler from "../lib/asyncHandler";
import UsersSchema from "../utils/schemas";

export const signUp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const signUpRequest: SignUpRequest = req.body;
    const newUser = await new UsersSchema(signUpRequest).save();
    console.log(newUser);
    res.status(200).send({ message: "회원가입 성공" });
  }
);

export const getOneUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UsersSchema.findById(req.params.userid);
    if (!user) {
      return res.status(404).send({ message: "등록되지 않은 유저입니다." });
    }
    const { _id, name, email, pw } = user;
    res.status(200).send({ userId: _id, name, email, pw });
  }
);

export const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UsersSchema.find();
    const usersResponse = users.map((user) => ({
      userId: user._id,
      name: user.name,
      email: user.email,
      pw: user.pw,
    }));
    res.status(200).send(usersResponse);
  }
);

import { signUp, getOneUser, getAllUsers } from "./../controllers/users";
import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

router.post("/", signUp);
router.get("/:userid", getOneUser);
router.get("/", getAllUsers);

export default router;

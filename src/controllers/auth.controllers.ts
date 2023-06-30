import { SignUpRequest, UpdatePasswordRequest } from "@proto/index";
import { Response } from "express";
import AuthServices from "@services/auth.services";

export async function signUpController(req: SignUpRequest, res: Response) {
  await AuthServices.signUp(req.body);
  return res.sendStatus(201);
}

export async function updatePasswordController(
  req: UpdatePasswordRequest,
  res: Response
) {
  await AuthServices.updatePassword(req.body);
  return res.sendStatus(200);
}

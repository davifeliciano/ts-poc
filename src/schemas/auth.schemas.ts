import Joi from "joi";
import { UpdatedUser, User } from "@proto/index";
import { usernameSchema, passwordSchema } from "./common";

export const signUpSchema = Joi.object<User>({
  username: usernameSchema,
  password: passwordSchema,
});

export const updatePasswordSchema = Joi.object<UpdatedUser>({
  username: usernameSchema,
  password: passwordSchema,
  newPassword: passwordSchema,
});

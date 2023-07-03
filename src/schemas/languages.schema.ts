import { UserLanguages } from "@proto/index";
import Joi from "joi";
import { passwordSchema, usernameSchema } from "./common";

export const languagesSchema = Joi.object<UserLanguages>({
  username: usernameSchema,
  password: passwordSchema,
  languages: Joi.array().items(Joi.number().positive().integer()),
});

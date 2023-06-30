import Joi from "joi";
import { UpdatedUser, User } from "@proto/index";

const messages = {
  username:
    '"username" must have between 3 and 32 characters (letters, numbers, - and _ are allowed)',
  password:
    '"password" must have at least 8 characters, at least one letter, one number and one special character (@$!%*#?&)',
};

const usernameSchema = Joi.string()
  .pattern(/^[\w-]{3,32}$/)
  .message(messages.username)
  .required();

const passwordSchema = Joi.string()
  .pattern(/^(?=.+[A-Za-z])(?=.+\d)(?=.+[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  .message(messages.password)
  .required();

export const signUpSchema = Joi.object<User>({
  username: usernameSchema,
  password: passwordSchema,
});

export const updatePasswordSchema = Joi.object<UpdatedUser>({
  username: usernameSchema,
  password: passwordSchema,
  newPassword: passwordSchema,
});

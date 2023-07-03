import Joi from "joi";

export const messages = {
  username:
    '"username" must have between 3 and 32 characters (letters, numbers, - and _ are allowed)',
  password:
    '"password" must have at least 8 characters, at least one letter, one number and one special character (@$!%*#?&)',
};

export const usernameSchema = Joi.string()
  .pattern(/^[\w-]{3,32}$/)
  .message(messages.username)
  .required();

export const passwordSchema = Joi.string()
  .pattern(/^(?=.+[A-Za-z])(?=.+\d)(?=.+[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  .message(messages.password)
  .required();

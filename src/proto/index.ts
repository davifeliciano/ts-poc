import { Request } from "express";

export interface User {
  username: string;
  password: string;
}

export interface UpdatedUser extends User {
  newPassword: string;
}

export interface SignUpRequest extends Request {
  body: User;
}

export interface UpdatePasswordRequest extends Request {
  body: UpdatedUser;
}

export interface UserLanguages extends User {
  languages: number[];
}

export interface UserLanguagesRequest extends Request {
  body: UserLanguages;
}

export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

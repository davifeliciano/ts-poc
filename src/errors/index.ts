import { ResponseStatus } from "src/proto/index";

export class ResponseError extends Error {
  responseStatusCode = ResponseStatus.INTERNAL_SERVER_ERROR;
}

export class UserAlreadyExistsError extends ResponseError {
  responseStatusCode: ResponseStatus;

  constructor(message: string) {
    super(message);
    this.name = "UserAlreadyExistsError";
    this.responseStatusCode = ResponseStatus.CONFLICT;
  }
}

export class AuthorizationError extends ResponseError {
  constructor(message: string) {
    super(message);
    this.name = "AuthorizationError";
    this.responseStatusCode = ResponseStatus.UNAUTHORIZED;
  }
}

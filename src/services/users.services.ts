import * as dotenv from "dotenv";
import { prisma } from "@database/index";
import { UpdatedUser, User } from "@proto/index";
import { AuthorizationError, UserAlreadyExistsError } from "@errors/index";
import { ProtectedServices } from "./common";

dotenv.config();

class AuthServices extends ProtectedServices {
  static async signUp(user: User) {
    const { username, password } = user;

    const existingUser = await prisma.user.findFirst({
      where: { username },
    });

    if (existingUser !== null) {
      throw new UserAlreadyExistsError(
        `there is already a user with username ${username}`
      );
    }

    const passwordHash = this.computeHash(password);

    return prisma.user.create({ data: { username, passwordHash } });
  }

  static async updatePassword(updatedUser: UpdatedUser) {
    const { username, password, newPassword } = updatedUser;

    if (!(await this.validateCredentials(username, password))) {
      throw new AuthorizationError("authorization failed");
    }

    const newPasswordHash = this.computeHash(newPassword);

    return prisma.user.update({
      data: { username, passwordHash: newPasswordHash },
      where: { username },
    });
  }
}

export default AuthServices;

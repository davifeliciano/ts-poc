import * as dotenv from "dotenv";
import { scryptSync } from "crypto";
import { prisma } from "@database/index";
import { UpdatedUser, User } from "@proto/index";
import { AuthorizationError, UserAlreadyExistsError } from "@errors/index";

dotenv.config();

class AuthServices {
  static #computeHash(password: string) {
    const salt = process.env.SECRET_KEY || "salt";
    const keylen = 64;
    return scryptSync(password, salt, keylen).toString("hex");
  }

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

    const passwordHash = this.#computeHash(password);

    return prisma.user.create({ data: { username, passwordHash } });
  }

  static async updatePassword(updatedUser: UpdatedUser) {
    const { username, password, newPassword } = updatedUser;
    const passwordHash = this.#computeHash(password);

    const currentUser = await prisma.user.findFirst({
      where: { username },
    });

    if (currentUser === null || currentUser.passwordHash !== passwordHash) {
      throw new AuthorizationError("authorization failed");
    }

    const newPasswordHash = this.#computeHash(newPassword);

    return prisma.user.update({
      data: { username, passwordHash: newPasswordHash },
      where: { username },
    });
  }
}

export default AuthServices;

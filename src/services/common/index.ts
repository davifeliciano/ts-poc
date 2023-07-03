import { scryptSync } from "crypto";
import { prisma } from "@database/index";
import { AuthorizationError } from "@errors/index";

export class ProtectedServices {
  static computeHash(password: string) {
    const salt = process.env.SECRET_KEY || "salt";
    const keylen = 64;
    return scryptSync(password, salt, keylen).toString("hex");
  }

  static async validateCredentials(username: string, password: string) {
    const passwordHash = this.computeHash(password);

    const currentUser = await prisma.user.findFirst({
      where: { username },
    });

    if (currentUser === null || currentUser.passwordHash !== passwordHash) {
      return false;
    }

    return true;
  }
}

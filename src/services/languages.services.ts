import { prisma } from "@database/index";
import { UserLanguages } from "@proto/index";
import { AuthorizationError } from "@errors/index";
import { ProtectedServices } from "./common";

export class LanguagesServices extends ProtectedServices {
  static async list() {
    return prisma.language.findMany();
  }

  static async update(userLanguages: UserLanguages) {
    const { username, password, languages } = userLanguages;

    if (!(await this.validateCredentials(username, password))) {
      throw new AuthorizationError("authorization failed");
    }

    return prisma.user.update({
      data: {
        languages: {
          set: languages.map((id) => ({ id })),
        },
      },
      where: { username },
      select: { username: true, languages: true },
    });
  }

  static async stats() {
    return prisma.language.findMany({
      include: { _count: { select: { users: true } } },
      orderBy: { users: { _count: "desc" } },
    });
  }
}

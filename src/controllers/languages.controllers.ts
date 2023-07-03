import { UserLanguagesRequest } from "@proto/index";
import { LanguagesServices } from "@services/languages.services";
import { Request, Response } from "express";

export async function listLanguagesController(_req: Request, res: Response) {
  const languages = await LanguagesServices.list();
  return res.send(languages);
}

export async function updateLanguagesController(
  req: UserLanguagesRequest,
  res: Response
) {
  const userWithLanguages = await LanguagesServices.update(req.body);
  return res.send(userWithLanguages);
}

export async function languageStatsController(_req: Request, res: Response) {
  const stats = await LanguagesServices.stats();
  return res.send(stats);
}

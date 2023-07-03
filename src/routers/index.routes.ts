import { Router } from "express";
import authRouter from "./auth.routes";
import languagesRouter from "./languages.routes";

const router = Router();

router.use("/users", authRouter).use("/languages", languagesRouter);

export default router;

import { Router } from "express";
const router = Router();

import authRouter from "./authRoutes.js";
import transactionsRouter from "./transactionRoutes.js";

router.use("/auth", authRouter);

router.use("/transactions", transactionsRouter);


export default router;
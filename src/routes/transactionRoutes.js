import express from "express";
const transactionsRouter = express.Router();

import openAccountController from "../controllers/transactionsController/openAccountController.js";
import fundsTransferController from "../controllers/transactionsController/fundTransferController.js";
import fundsDepositController from "../controllers/transactionsController/fundsDepositController.js";
import allTransactionsController from "../controllers/transactionsController/allTransactionsConntroller.js";

transactionsRouter.get("/all-transactions", allTransactionsController);
transactionsRouter.post("/deposit-funds", fundsDepositController);
transactionsRouter.post("/transfer-funds", fundsTransferController);
transactionsRouter.post("/open-account", openAccountController);


export default transactionsRouter;
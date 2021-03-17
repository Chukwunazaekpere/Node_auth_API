import connectDB from "../config/db.js";
connectDB();


import database from "../models/index.js";
const FundsTransfer = database.FundsTransfer;

import fundsTransferData from "../data/fundsTransferData.js";

const seedFundsTransfer = async () => {
    try {
        await FundsTransfer.deleteMany();
        console.log("\n\t Cleared database...");
        console.log("\n\t Preparing to populate...");
        await FundsTransfer.insertMany(fundsTransferData);
        console.log("\n\t Populated funds-transfer table successfully...");
        process.exit(0);
    } catch (error) {
        console.log("\n\t Error: ", error);
        process.exit(1);
    }
}

seedFundsTransfer();
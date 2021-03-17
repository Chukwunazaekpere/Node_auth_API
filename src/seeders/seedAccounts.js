import connectDB from "../config/db.js";
connectDB();


import database from "../models/index.js";
const Accounts = database.Accounts;

import bankAccountsData from "../data/bankAccountsData.js";

const seedAccounts = async () => {
    try {
        await Accounts.deleteMany();
        console.log("\n\t Cleared database...");
        console.log("\n\t Preparing to populate...");
        await Accounts.insertMany(bankAccountsData);
        console.log("\n\t Accounts table populated successfully...");
        process.exit(0);
    } catch (error) {
        console.log("\n\t Error: ", error);
        process.exit(1);
    }
}

seedAccounts();
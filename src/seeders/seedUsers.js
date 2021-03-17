import connectDB from "../config/db.js";
connectDB();


import database from "../models/index.js";
const Users = database.Users;

import usersData from "../data/usersData.js";

const seedUsers = async () => {
    try {
        await Users.deleteMany();
        console.log("\n\t Cleared database...");
        console.log("\n\t Preparing to populate...");
        await Users.insertMany(usersData);
        console.log("\n\t Populated users collection...");

        process.exit(0);
    } catch (error) {
        console.log("\n\t Error: ", error);
        process.exit(1);
    }
}

seedUsers();
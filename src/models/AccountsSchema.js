import mongoose from "mongoose";


const accountsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true
    },
    accountType: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 1000
    },
    
}, { timestamps: true, updatedAt: false })

const Account = mongoose.model("Account", accountsSchema);

export default Account;
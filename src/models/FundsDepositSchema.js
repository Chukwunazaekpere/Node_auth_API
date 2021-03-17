import mongoose from "mongoose";


const fundsDepositSchema = new mongoose.Schema({
    depositorsName: {
        type: String,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    
}, { timestamps: true, updatedAt: false })

const FundsDeposit = mongoose.model("FundsDeposit", fundsDepositSchema);

export default FundsDeposit;
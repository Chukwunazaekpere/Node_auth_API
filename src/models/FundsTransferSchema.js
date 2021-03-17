import mongoose from "mongoose";


const fundsTransferSchema = new mongoose.Schema({
    receipientName: {
        type: String,
        required: true
    },
    receipientBank: {
        type: String,
        required: true
    },
    receipientAccountNumber: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    
}, { timestamps: true, updatedAt: false })

const FundsTransfer = mongoose.model("FundsTransfer", fundsTransferSchema);

export default FundsTransfer;
import Joi from "@hapi/joi";
import database from "../models/index.js";
const Account = database.Accounts 

const fundsDepositValidator = async (requestBody) => {
    const fundsTransferSchema = Joi.object({
        accountName: Joi.string().min(4).required(),
        accountNumber: Joi.number().min(11).max(11).required(),
        amount: Joi.number().min(50).required(),
    });
    const {error, value} = fundsTransferSchema.validate(requestBody);
    if(error){
        return `Error: ${error.details[0].message}`
    };
    const {accountNumber} = value;
    const account = Account.findOne({ accountNumber });
    if(!account.accountName || !account.accountNumber){
        return "Error in account details. Check the entered account name or number."
    }
    // If all is okay,
    return value;
}

export default fundsDepositValidator;
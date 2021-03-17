import Joi from "@hapi/joi";
import database from "../models/index.js";
const Accounts = database.Accounts;



const accountsValidator = async (requestBody) => {
    const accountsSchema = Joi.object({
        phone: Joi.string().max(11).min(11).required(),
        accountType: Joi.string().min(4).required(),
    })
    const {error, value} = accountsSchema.validate(requestBody);
    if(error){
        return `Error: ${error.details[0].message}`
    }
    const { phone } = value;
    // The phone number of a user is their accout nnumber
    const existingAccount = await Accounts.findOne({ accountNumber: phone })
    if(existingAccount){
        return "Error: You already have an account with us."
    }
    // If all is okay with the login - credentials
    return value;
}

export default accountsValidator;
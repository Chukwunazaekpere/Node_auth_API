import Joi from "@hapi/joi";

const fundsTransferValidator = async (requestBody) => {
    const fundsTransferSchema = Joi.object({
        phone: Joi.string().max(11).min(11).required(),
        receipientName: Joi.string().min(4).required(),
        receipientBank: Joi.string().min(4).required(),
        accountNumber: Joi.number().min(50).required(),
        amount: Joi.number().min(50).required(),
    });
    const {error, value} = fundsTransferSchema.validate(requestBody);
    if(error){
        return `Error: ${error.details[0].message}`
    };
    // If all is okay,
    return value;
}

export default fundsTransferValidator;
import database from "../../models/index.js";
const FundsTransfer = database.FundsTransfer;

import fundsTransferValidator from "../../validators/fundsTransferValidator.js";


const fundsTransferController = async (req, res) => {
    const validatedFields = await fundsTransferValidator(req.body);

    if(typeof(validatedFields) == "string" ){
        return res.status(400).json({message: validatedFields,
                                        status: "Error",
                                        data: null 
                                    })
    }
    const newFundsTransfer = new FundsTransfer({
        ...validatedFields
    })
    try{
        const initiatedTransfer = await newFundsTransfer.save(); 
        return res.status(201).json({message: validatedFields,
                                        status: "Success",
                                        data: initiatedTransfer
                                    })
    }catch(error){
        return res.status(400).json({message: validatedFields,
                                        status: "Error",
                                        data: null
                                    })
    }
}

export default fundsTransferController;
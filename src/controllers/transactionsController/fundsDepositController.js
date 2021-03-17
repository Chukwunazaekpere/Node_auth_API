import database from "../../models/index.js";
const FundsDeposit = database.FundsDeposit;

import fundsDepositValidator from "../../validators/fundsDepositValidator.js";


const fundsDepositController = async (req, res) => {
    const validatedFields = await fundsDepositValidator(req.body);

    if(typeof(validatedFields) == "string" ){
        return res.status(400).json({message: validatedFields,
                                        status: "Error",
                                        data: null 
                                    })
    }
    const newFundsDeposit = new FundsDeposit({
        ...validatedFields
    })
    try{
        const initiatedDeposit = await newFundsDeposit.save(); 
        return res.status(201).json({message: validatedFields,
                                        status: "Success",
                                        data: initiatedDeposit
                                    })
    }catch(error){
        return res.status(400).json({message: validatedFields,
                                        status: "Error",
                                        data: null
                                    })
    }
}

export default fundsDepositController;

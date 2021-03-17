import database from "../../models/index.js";
const Accounts = database.Accounts;
const Users = database.Users;

import accountsValidator from "../../validators/openAccountsValidator.js";


const openAccountController = async (req, res) => {
    const validatedRequest = await accountsValidator(req.body);

    if(typeof(validatedRequest) == "string" ){
        return res.status(400).json({message: validatedRequest,
                                        status: "Error",
                                        data: null 
                                    })
    }
    const { phone } = validatedRequest;
    // use "phone" to check for user in Users model
    try {
        // Users can only open an account if they're signed - up
        const user = await Users.findOne({ phone });
        let user_id;
        console.log("\n\t User: ", user);
        let message = [];
        if(!user){
            message.push("Your account has been created. But, you would have to signup in order to make transactions. Account becomes invalid if signup is not done within 72 hours(3 - days) Thanks.")
        }else{
            message.push("New account has been created successfully.")
        }
        user_id = user._id
        const newAccount = await Accounts.create({ 
            user: user_id,
            ...validatedRequest
        });
       
        return res.status(400).json({message: message[0],
                                        status: "Success",
                                        data: newAccount
                                    });

    } catch (error) {
        return res.status(400).json({message: `Account could not be created this time. ${error}`,
                                        status: "Error",
                                        data: null
                                    });
    }

}


export default openAccountController;
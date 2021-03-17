import database from "../../models/index.js";
const FundsTransfer = database.FundsTransfer;
const FundsDeposit = database.FundsDeposit;
const Account = database.Accounts;


const allTransactionsController = async (req, res) => {
    const {accountNumber} = req.body;
    const accountExists = await Account.findOne({ accountNumber });
    if(!accountExists){
        return res.status(400).json({message: "Non - existing account number.",
            status: "Error",
            data: null
        })
    }
    
    try{
        const fundsTransfer = await FundsTransfer.find({ accountNumber}); 
        const fundsDeposit = await FundsDeposit.find({ accountNumber }); 
        console.log("\n\t Transfers: ", fundsTransfer.account);
        console.log("\n\t Deposits: ", fundsDeposit);
        if( fundsTransfer || fundsDeposit ){
            // console.log("\n\t Full name: ", newAccount.user);
            return res.status(200).json({message: "All Transactions.",
                                            status: "Success",
                                            data: {
                                                fundsDeposit,
                                                fundsTransfer
                                            }
                                        })
        }
        throw error;
    }catch(error){
        return res.status(200).json({message: "No record found",
            status: "Success",
            data: null
        })
    }
}

export default allTransactionsController;
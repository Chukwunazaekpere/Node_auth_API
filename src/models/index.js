//==================================  Imports =====================================
import Accounts from "./AccountsSchema.js";
import FundsDeposit from "./FundsDepositSchema.js";
import FundsTransfer from "./FundsTransferSchema.js";
import Users from "./UsersSchema.js";
//==================================================================================

//================================== Exports =======================================
const database = {
    Accounts,
    FundsDeposit,
    FundsTransfer,
    Users
}
export default database;
//==================================================================================
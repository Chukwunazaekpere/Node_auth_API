import database from "../../models/index.js";
const Users = database.Users;

import Email from "email-templates";
import { registerValidator, loginValidator } from "../../validators/authValidators.js";

import bcrypt from "bcrypt";
import mailTransporter from "../../utilities/mailer.js";

import dotenv from "dotenv";
dotenv.config({ path: "../../../src/config/config.env" })
console.log("\n\t User: ", process.env.EMAIL_USER);

export const registerUser = async (req, res) => {
    // Validate all fields from registration 
    const validatedRegisterRequest = await registerValidator(req.body)
    
    if(typeof(validatedRegisterRequest) == "string" ){
        return res.status(400).json({message: validatedRegisterRequest,
                                        status: "Error", 
                                        data: null
                                    })
    }else{
        const { firstname, phone, lastname, email, password } = validatedRegisterRequest;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({
            firstname,
            lastname,
            email,
            phone,
            password: hashedPassword
        });

        try {
            // send user a mail
            
            // const email = new Email({
            //     transport: mailTransporter,
            //     send: true,
            //     preview: true,
            //     views: {
            //         options: {
            //             extension: "ejs"
            //         },
            //         root: "../../utilities"
            //     },
            // });
            // console.log("\n\t Prepared...");
            // await email.send({
            //     template: "emailTemp",
            //     message: {
            //         from: process.env.EMAIL_USER,
            //         to: email
            //     },
            //     locals: {
            //         lastname,
            //         firstname
            //     }
            // }).then(()=> console.log("\n\t Message: ", res.originalMessage));
            console.log("\n\t Email sent...");
            const createdUser = await newUser.save();
            return res.status(201).json({message: `Created new user successfully.`,
                                        status: "Success",
                                        data: createdUser})
            
        } catch (error) {
            return res.status(500).json({message: "Problem saving new user. Please try again.",
                                            status: "Error",
                                            data: null})
        }
    }
}


export const loginUser = async (req, res) => {
    const validatedLoginRequest = await loginValidator(req.body)    

    if(typeof(validatedLoginRequest) == "string" ){
        return res.status(400).json({message: validatedLoginRequest,
                                        status: "Error",
                                        data: null 
                                    })
    }
    console.log("\n\t Valid User: ", validatedLoginRequest);
    const {email } = validatedLoginRequest;

    try {
        const user = await Users.findOne({ email });
        if(user){
            const similarPassword = await bcrypt.compare(req.body.password, user.password);
            if(similarPassword){
                return res.status(200).json({message: "Found user",
                                                status: "Success",
                                                data: validatedLoginRequest
                                            })
            }
        }
        throw error;
    } catch (error) {
        return res.status(400).json({message: "User not found",
                                        status: "Error",
                                        data: null
                                    })
    }

}

export const allUsers = async (req, res) => {
    try {
        const allUsers = await Users.find();
        return res.status(200).json({
            message: "Found all users",
            status: "Success",
            data: allUsers
        })
    } catch (error) {
        return res.status(400).json({
            message: "Users not found",
            status: "Error",
            data: null
        })
        
    }
}
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    }, 
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

userSchema.virtual("fullname").get(() => {
    return `${this.lastname} ${this.firstname}`
})

const Users = mongoose.model("User", userSchema)
export default Users;
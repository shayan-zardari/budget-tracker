import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        maxLength: 100,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Account associated with this email already existed."]
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    }
}, {timestamps: true});


const User = new mongoose.model("User",userSchema);

export default User;
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 100,
        required: [true, "The name for the expense is required."],
        trim: true
    },
    currency: {
        type: String,
        enum: ["$", "Rs"]
    },
    amount: {
        type: Number,
        required: [true, "Please enter an amount for the expense."],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required for the expense."]
    }
},{timestamps: true});

const Expense = new mongoose.model("Expense", expenseSchema);

export default Expense;
import Expense from "../models/expense.model.js";

const expenseController = {
    createExpense: async (req, res) => {
        try {
            const {name, amount} = req.body;

            console.log(req);

            const expense = new Expense({
                name: name,
                currency: "$",
                amount: amount, 
            });

            const expenseDbCreationResponse = await expense.save();

            res.status(200).json({
                success: true,
                data: {
                    expenseCreationResponse: expenseDbCreationResponse
                }
            });

        }
        catch (error) {
            
            res.status(500).json({
                success: false,
                data: {
                    error: error
                }
            });
        }
    },
    getExpense: async (req, res) =>{

    },
    updateExpense: async (req, res) =>{

    },
    deleteExpense: async (req, res) =>{

    }
}

export default expenseController;
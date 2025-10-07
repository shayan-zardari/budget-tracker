import Expense from "../models/expense.model.js";

const expenseController = {
    createExpense: async (req, res) => {
        try {
            const {name, amount} = req.body;

            // console.log(req);

            const expense = new Expense({
                name: name,
                currency: "$",
                amount: amount, 
                user: req.user.userId
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
    getExpenses: async (req, res) => {
        try {
            const userId = req.user.userId;

            if (!user) {
                res.status(401).json({
                    success: false,
                    data: {
                        authenticationError: `No user signed in.`
                    }
                });
            }

            const expenses = await Expense.find({user: userId});

            res.status(200).json({
                success: true,
                data: {
                    expenses
                }
            });
        }
        catch (error) {

            res.status(400).json({
                success: false,
                data: {
                    error
                }
            });

        };
    },
    getExpense: async (req, res) => {
        try {
            const userId = req.user.userId; 

            if (!user) {
                res.status(401).json({
                    success: false,
                    data: {
                        authenticationError: `No user signed in.`
                    }
                });
            };

            

        }
        catch (error) {

        }
    },
    updateExpense: async (req, res) => {

    },
    deleteExpense: async (req, res) => {
        try {
        const userId = req.user.userId; 
        const expenses = await Expense.find({user: userId});
        console.log(expenses)
        res.status(200).json({
            success:true,
            data:{expenses}

        })
            
        } catch (error) {
            
        }
         
         //const findExpense

    }
}

export default expenseController;
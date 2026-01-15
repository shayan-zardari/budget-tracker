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
              
            if (!userId) {
                res.status(401).json({
                    success: false,
                    data: {
                        authenticationError: `No user signed in.`
                    }
                });
            }

            const expenses = await Expense.find({user: userId});
            
     
          return res.status(200).json({
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

            if (!userId) {
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
        const expenseId = req.params.id;

        const expenses = await Expense.findOne({_id:expenseId,user: userId});
        if(!expenses){
            return res.status(404).json({
                success:false,
                data: {message: "Expense not found"}
            })
        }
        await Expense.deleteOne({_id:expenses})
        res.status(200).json({
            success:true,
            data : {message : "Expense deleted successfully"}
            

        })
            
        } catch (error) {
             res.status(400).json({
                success: false,
                data: {
                    error
                }
            });
            
        }
         
         //const findExpense

    }
}

export default expenseController;
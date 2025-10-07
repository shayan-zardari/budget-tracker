import { Router } from "express";

import expenseController from "../controllers/expense.controller.js";

const expenseRouter = Router();

expenseRouter.post("/create-expense", expenseController.createExpense)

expenseRouter.get("/get-expenses", expenseController.getExpenses)

expenseRouter.get("/get-expense/:id", expenseController.getExpenses)

expenseRouter.put("/update-expense/:id", expenseController.updateExpense)

expenseRouter.delete("/delete-expense", expenseController.deleteExpense)

export default expenseRouter;
import { Router } from "express";

import expenseController from "../controllers/expense.controller.js";

const expenseRouter = Router();

expenseRouter.post("/create-expense", expenseController.createExpense)

expenseRouter.get("/get-expense", expenseController.getExpense)

expenseRouter.put("/update-expense", expenseController.updateExpense)

expenseRouter.delete("/delete-expense", expenseController.deleteExpense)

export default expenseRouter;
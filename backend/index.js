import express from 'express';
import { Router } from 'express';

import { PORT } from './configurations/env.configure.js';

import DB_Connect from './configurations/db.configure.js';

import authRouter from './routes/auth.route.js';
import expenseRouter from './routes/expense.route.js'

import verifyToken from './middleware/middleware.js';

const app = express();

await DB_Connect();

app.use(express.json());

app.use("/auth", authRouter);

app.use("/expense", verifyToken, expenseRouter);

app.listen(PORT, () => {console.log(`app is listening at the port ${PORT}`)});
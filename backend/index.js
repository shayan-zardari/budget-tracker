import express from 'express';
import { Router } from 'express';

import { PORT } from './configurations/env.configure.js';

import DB_Connect from './configurations/db.configure.js';
import User from './models/user.model.js';

const app = express();

app.use(express.json());

await DB_Connect();

const userRouter = new Router();

userRouter.post('/create-user', async (req, res)=> {
    try {
        const {name, email, password} = req.body;

        const newUser = new User({
            name: name,
            email: email,
            password: password
        });

        const userCreationResponse = await newUser.save();

        res.status(200).json({
            success: true,
            body: {
                userCreationResponse
            }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            body: {
                error
            }
        })
    }
});

app.use(userRouter);

app.listen(PORT, () => {console.log(`app is listening at the port ${PORT}`)});
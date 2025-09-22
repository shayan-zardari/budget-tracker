import express from 'express';
import { Router } from 'express';

import { PORT } from './configurations/env.configure.js';

import DB_Connect from './configurations/db.configure.js';
import bcrypt from 'bcrypt';

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


userRouter.post('/login', async(req,res) =>{
try {
    const {email, password} = req.body;
 console.log(req.body)
    const user = await User.findOne({ email});
    console.log("user",user.password)
   
    if(!user){
        return res.status(401).json({error:"User not found"});

    }
    const passwordMatch = await bcrypt.compare(password,user.password);
    console.log("password",passwordMatch)
     if(!passwordMatch){
        return res.status(401).json({error: 'Wrong password'})
     }
     const token = jwt.sign({'userId':user._id}, 'UChqzRkb7y',{
        expiresIn :'1h'
     })
res.status(200).json({token});

    
} catch (error) {
    res.status(500).json({error:'Login failed'})
}


})

app.use(userRouter);

app.listen(PORT, () => {console.log(`app is listening at the port ${PORT}`)});
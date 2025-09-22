import User from "../models/user.model.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { JWT_SECRET } from "../configurations/env.configure.js";

const authController = {
    createUser: async (req, res) => {
        try {
            const {name, email, password} = req.body;

            await User.collection.drop();
            // const user = await User.findOne({email});

            // if ( user ) {
            //     throw new Error("User already exists.");
            // }

            const saltRounds = await bcrypt.genSalt(10);

            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword
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
                    error: error.message
                }
            })
        }
    },
    getUser:  async (req,res) => {
        try {
            const {email, password} = req.body;

            const user = await User.findOne({ email});
        
            if( !user ) {
                return res.status(401).json({error:"User not found"});
            }

            const passwordMatch = await bcrypt.compare(password,user.password);

            console.log("password",passwordMatch);

            if( !passwordMatch ){
                return res.status(401).json({error: 'Wrong Email and Password combination.'});
            };

            const token = jwt.sign({user}, JWT_SECRET);

            console.log(`The token is the follwoing: ${token}`);

            res.status(200).json({
                success: true,
                data: {
                    message: "User signed in.",
                    token: token
                }
            });
            
        } catch (error) {
            res.status(500).json({
                success: false,
                data: {
                    error:'Login failed.',
                    errorObject: error.message
                }
            });
        }
    }
}

export default authController;
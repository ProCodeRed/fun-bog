import User from "../models/user.modal.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
         next(errorHandler(400, 'All fields are required'))
    } // to check if all filled


    const hashedPassword = bcryptjs.hashSync(password, 10) // to hash password which not let save or see in db

    const newUser = new User({ username, email, password:hashedPassword }) // to create new user

    try {
        await newUser.save() // to save into db
        res.json({ message: "Sign up is successful" })
    } catch (error) {
        next(error)
    }


}
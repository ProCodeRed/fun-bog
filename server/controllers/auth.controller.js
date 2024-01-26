import User from "../models/user.modal.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    } // to check if all filled


    const hashedPassword = bcryptjs.hashSync(password, 10) // to hash password which not let save or see in db

    const newUser = new User({ username, email, password: hashedPassword }) // to create new user

    try {
        await newUser.save() // to save into db
        res.json({ message: "Sign up is successful" })
    } catch (error) {
        next(error)
    }


}


export const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || !email === '' || !password === '') {
        return next(errorHandler(400, 'All fields are required.'))
    }

    try {
        const validUser = await User.findOne({ email }) // checking if email exists
        if (!validUser) {
            return next(errorHandler(404, 'User not Found !'))
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password); // checking if passwords are matched

        if (!validPassword) {
            return next(errorHandler(400, 'Email or password does not adds up'))
        }

        // generating token to validate user
        const token = jwt.sign(
            {id: validUser?._id},
            process.env.JWT_SECKEY
        )

        const {password: pass, ...rest} = validUser._doc  // to hide encypted password and pass is new name of password
        
        // setting up cookie
        res.status(200).cookie('access-token', token, {
            httpOnly: true
        }).json(rest)

    } catch (error) {
        next(error)
    }
}
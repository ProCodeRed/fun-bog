import User from "../models/user.modal.js";
import bcryptjs from 'bcryptjs'

export const signUp = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: "All fields are required" })
    } // to check if all filled


    const hashedPassword = bcryptjs.hashSync(password, 10) // to hash password which not let save or see in db

    const newUser = new User({ username, email, password:hashedPassword }) // to create new user

    try {
        await newUser.save() // to save into db
        res.json({ message: "Sign up is successful" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}
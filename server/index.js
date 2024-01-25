import expres from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.DB_URI).then(
    () => {
        console.log("db is connected")
    }
).catch((err) => {
    console.log("db error", err)
})

const app = expres();

app.use('/api/user', userRoutes)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
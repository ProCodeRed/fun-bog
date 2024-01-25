import expres from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config()

mongoose.connect(process.env.DB_URI).then(
    () => {
        console.log("db is connected")
    }
).catch((err) => {
    console.log("db error", err)
})

const app = expres();
app.use(expres.json()); // to allow backend use json

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

// error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
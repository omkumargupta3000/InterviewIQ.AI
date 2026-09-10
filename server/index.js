// import express from "express"
// import dotenv from "dotenv"
// import connectDb from "./config/connectDb.js"
// import cookieParser from "cookie-parser"
// dotenv.config()
// import cors from "cors"
// import authRouter from "./routes/auth.route.js"
// import userRouter from "./routes/user.route.js"
// import interviewRouter from "./routes/interview.route.js"
// import paymentRouter from "./routes/payment.route.js"

// const app = express()
// app.use(cors({
//     origin: [
//         "http://localhost:5173",
//         "http://localhost:5174",
//         "https://interview-iq-ai-jet.vercel.app"
//     ],
//     credentials: true
// }))

// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/auth" , authRouter)
// app.use("/api/user", userRouter)
// app.use("/api/interview" , interviewRouter)
// app.use("/api/payment" , paymentRouter)

// const PORT = process.env.PORT || 6000
// app.listen(PORT, "0.0.0.0", ()=>{
//     console.log(`Server running on port ${PORT}`)
//     connectDb()
// })

import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://interview-iq-ai-jet.vercel.app",
        ],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 6000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
    connectDb();
});
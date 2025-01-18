import express from 'express'
import cors from 'cors';
import paymentRoutes from "./routes/payment.js"

const app = express()
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"]
}))

app.use("/payment", paymentRoutes);

app.listen(port, () => console.log(`server started on port ${port}`));
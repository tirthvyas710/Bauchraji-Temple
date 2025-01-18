import dotenv from "dotenv"
import express from "express"
import Razorpay from"razorpay"
import crypto from "crypto"


dotenv.config();

const router = express.Router();

router.post("/orders", async (req, res) => {
    try {
        const {amount} = req.body;
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        // console.log(amount)

        const options = {
            amount: amount,
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/success", async (req, res) => {
    try {
        // getting the details back from our font-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        console.log(req.body)

        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, process.env.RAZORPAY_SECRET);
        const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
        
        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
        
        const digest = shasum.digest("hex");
        console.log(digest)

        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: "Transaction not legit!" });

        // Send Email
        
        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
export default router;
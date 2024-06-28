import Razorpay from 'razorpay'
import dotenv from 'dotenv';

dotenv.config();

const secret_key = process.env.RAZORPAY_SECRET_KEY;
const key_id = process.env.RAZORPAY_ID;

export const payment = async(req,res)=>{
    try{
        const razorpay = new Razorpay({
            key_id : key_id,
            key_secret : secret_key
        });
    
        const options = req.body;
        const order = await razorpay.orders.create(options);
    
        if(!order){
            return res.status(500).send("Error");
        }
    
        res.json(order);
    } catch(err){
        console.log(err);
        return res.status(500).send("Error");
    }
}

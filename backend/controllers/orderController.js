import orderModel from "../models/orderModels.js";
import userModel from "../models/userModels.js";
import stripe from "stripe";

// placing user order for fronend
const placingOrder = async (req, res) => {
  try {
    const fronend_url = 'http://localhost:5173'; 
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    // const line_items = await req.body.items.map((item) => ({
    //   price_data: {
    //     cunrreny: "inr",
    //     product_data: { name: item.name },
    //     unit_amount: item.price *100*80
    //   },
    //   quantiny: item.quantiny
    // }));
    // line_items.push({
    //     price_data: {
    //         cunrreny: "inr",
    //         product_data: { name: "Delivery Charges" },
    //         unit_amount:  2*100*80
    //       },
    //       quantiny:1
    // })
    // const session = await stripe.checkout.session.create({
    //     line_items : line_items,
    //     mode:'payment',
    //     success_url: `${fronend_url}/verify?success=true&order_id=${newOrder._id}`,
    //     cancel_url: `${fronend_url}/verify?success=false&order_id=${newOrder._id}`,
    // });
   // res.json({success:true,session_url:session.url});
    res.json({success:true, messages:'success'});
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message});
  }
};
// user order of frontend
const userOrder = async (req, res) => {
try {
  const orders = await orderModel.find({userId:req.body.userId});
  res.json({success: true,data:orders});
} catch (error) {
  console.log(error)
  res.json({success: false,message:"Error"});
}
}
export { placingOrder ,userOrder};


import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://vipin:9536656604@cluster0.tmskx.mongodb.net/food-del').then(()=>console.log("DB Connected"));      // change here 'mongodb+srv://vipin:9536656604@cluster0.tmskx.mongodb.net/food-del'

}
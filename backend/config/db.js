import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://vipbaghel07:8fXHSA2mY7IzBobi@cluster0.tvvs0tv.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));      // change here 'mongodb+srv://vipin:9536656604@cluster0.tmskx.mongodb.net/food-del'

}

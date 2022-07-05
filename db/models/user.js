import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required
    },
    last_name:{
        type:String,
        required
    },
    email:{
        type:String,
        required
    },
    phone:{
        type:Number,
        required
    },
    address:{
        type:Array,
        required
    },
    password:{
        type:String,
        required
    },
    logo:{
        type:String,
    }
})
module.exports=mongoose.models.user || mongoose.model('user', userSchema);


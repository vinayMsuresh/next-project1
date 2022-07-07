import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:Array,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    logo:{
        type:String,
    },
    approved:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.models.user || mongoose.model('user', userSchema);


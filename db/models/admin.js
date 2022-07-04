import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    
},{timestamps: true})

module.exports =  mongoose.models.admin || mongoose.model('admin', adminSchema);
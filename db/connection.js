import mongoose from 'mongoose';

async function ConnectDB() {
    try{
        await mongoose.connect(process.env.mongodburl, {useNewUrlParser: true});
    }

    catch(err){
        console.log(err);
    }
}

module.exports = ConnectDB;
import mongoose from 'mongoose'
let isConnected = false;
export const connect = async () =>{
    if(isConnected) return;
        await mongoose.connect(process.env.MONGODB_URI);
          isConnected = true;
}

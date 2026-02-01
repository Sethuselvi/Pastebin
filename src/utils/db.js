// Using Node.js `require()`
const mongoose = require('mongoose');
let isConnected = false;
export const connect = async () =>{
    if(isConnected) return;
        await mongoose.connect(process.env.MONGODB_URI);
          isConnected = true;
}

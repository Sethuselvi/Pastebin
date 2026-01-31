// Using Node.js `require()`
const mongoose = require('mongoose');
let isConnected = false;
export const connect = async () =>{
    if(isConnected) return;
        await mongoose.connect('mongodb+srv://sethuselvi:1234@nodetuts.73kic02.mongodb.net/?appName=nodetuts/paste_bucket');
          isConnected = true;
}

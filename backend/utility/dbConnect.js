const mongoose = require('mongoose');

const dbConnect = ()=>{
     mongoose.connect("mongodb://localhost:27017/jwtCookie")
    .then(()=>{
        console.log("db connect succesfully");
    })
    .catch((error)=>{
        console.log("db not connected");
    })
}
module.exports = dbConnect;
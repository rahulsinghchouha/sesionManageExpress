const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model("user",user);



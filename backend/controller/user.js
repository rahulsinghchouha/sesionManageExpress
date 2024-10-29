const user = require('../models/user');
const jwt = require('jsonwebtoken');


exports.user = async (req, res) => {

    const { username, password } = req.body;
    console.log("user,passwor", username, password);

    // store this in jwt token
    //first we need the secrt key
    const secretKey = 'rahulcits';

    const userData =
    {
        name: username,
        password: password
    }

    const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });

    // console.log("token is created", token);


    req.session.token = token;
    console.log("request session", req.session);
    res.send('Logged in and token set in cookie');

}
exports.customers= async(req,res)=>{

    const { username, password } = req.body;
    console.log("user,passwor", username, password);
    //validateion
    if(!username || !password)
    {
        return res.status(404).json({
            msg:"data not found"
        })
    }
try{
    const result = await user.create({
        name:username,
        password:password
    });
    if(!result)
    {

        return res.status(400).json({
            msg:"entry not created"
        })
    }

    return res.status(200).json({
        msg:"entry created succesfully"
    })
}
catch(error)
{
    return res.status(400).json({
        msg:"entry not created"
    })
}
}
exports.sendData = async(req,res) =>{

    try{

    const response = await user.find();

    console.log("response",response);
    
    return res.status(200).json({
        msg:"data found succesfully",
        response,
    })
    }
    catch(error)
    {

        return res.status(400).json({
            msg:"data not found from db"
        })
    }
}
exports.searchData = async (req, res) => {

    const {query} = req;

    console.log("query--------",query);

}




exports.token = async (req, res) => {

    console.log("inside the cookies", req.session);
    const token = req.session.token; // Ensure 'token' matches the name used in res.cookie

    if (token) {
        console.log("token found", token);
    } else {
        console.log("token not found", token);
    }
    res.status(200).send("token fetched successfully");
}
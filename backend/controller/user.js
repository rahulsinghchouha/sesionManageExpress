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

    
    req.session.token=token;
    console.log("request session",req.session);
    res.send('Logged in and token set in cookie');

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
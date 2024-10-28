const express = require('express');
const app = express();
const dbConnect = require("./utility/dbConnect");
const {user,token} = require('./controller/user');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.listen(4000,()=>{

    console.log("server is running on 4000")

})
dbConnect();


app.use(express.json());
//app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,  // Allow credentials (cookies, etc.)
}));

app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'keyboard cat',
  resave: false,//refresh 
  saveUninitialized: true, //empty cookie also saveThis, can be useful if you want to create a session for every user, even those who haven’t interacted with the application yet.
  store:MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/jwtCookie',
  })
}))

  app.post("/user",user);
  app.get("/token",token);










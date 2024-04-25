const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path")
const User = require("./models/userModel");

mongoose.connect("mongodb://0.0.0.0:27017/data").then(()=>{
    console.log("mongodb connected");
    app.listen(3001,(req,res)=>{
        console.log("server running");
    })
})


const staticPath = path.join(__dirname, './public');
app.use(express.static(staticPath));

app.get('/index', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(staticPath, 'home.html'));
});

app.get('/gallary', (req, res) => {
    res.sendFile(path.join(staticPath, 'gallary.html'));
});

app.get('/query', (req, res) => {
    res.sendFile(path.join(staticPath, 'query.html'));
});

app.post("/index",async(req,res)=>{
    const {Firstname,Lastname,Gmail,password } = req.body;
    try{
        const user = await new User({Firstname,Lastname,Gmail,password});
        await user.save();
        console.log(user);
    }
    catch(err){
        console.log("error occu",err)
    }
})
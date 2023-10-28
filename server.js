const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

const detailSchema = {
    name:String,
    email:String,
    contactNo:Number,
    message:String
}

const detail = mongoose.model("detail",detailSchema);


mongoose.connect("mongodb+srv://ak869346:Ankit123@cluster0.b2rrnre.mongodb.net/ApexyData",{useNewUrlParser:true}, {useUnifiedTopology:true})
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/transportio/index.html");
})


app.post("/", function(req,res){
    let newdetail = new detail({
        name:req.body.name,
        email:req.body.email,
        contactNo:req.body.number,
        message:req.body.message
    })
    newdetail.save();
    res.redirect("/");
})

app.listen(3000,function() {
    console.log("Server is Running on 3000");
})
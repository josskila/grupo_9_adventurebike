const path = require("path");


const controller = {
    home: (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/home.html"))
    },
    login: (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/login.html"))
    },
    product: (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/product.html"))
    }, 
    purchase: (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/purchase.html"))
    }, 
    register: (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/register.html"))
    }, 
}

module.exports= controller;
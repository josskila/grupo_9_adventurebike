const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(3000, ()=>{console.log("Corriendo en puerto 3000")});

app.get("/", (req, res)=>{res.sendFile(__dirname + "/views/home.html")});
app.get("/", (req, res)=>{res.sendFile(__dirname,"/views/product.html")});
app.get("/", (req, res)=>{res.sendFile(__dirname,"/views/purchase.html")});
app.get("/", (req, res)=>{res.sendFile(__dirname,"/views/sig-in.html")});
app.get("/", (req, res)=>{res.sendFile(__dirname,"./views/home.html")});

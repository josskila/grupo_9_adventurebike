const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en el puerto 3000"))

app.use("/", mainRouter)

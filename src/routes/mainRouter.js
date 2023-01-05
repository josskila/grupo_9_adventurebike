const express = require("express");
const router = express();
const mainController = require ("../controllers/mainController");

router.get("/", mainController.home);

router.get("/login", mainController.login);

router.get("/product", mainController.product);

router.get("/purchase", mainController.purchase);

router.get("/register", mainController.register);


module.exports= router;

const router = require('express').Router();


const mainController = {



    mainPage: async (req, res, next) => {


        console.log("Page principal activé! ")


        res.render("mainPage", {})
    },

























}

module.exports = mainController;
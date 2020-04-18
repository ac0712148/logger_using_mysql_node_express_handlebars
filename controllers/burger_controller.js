const express = require("express");

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;
const express = require("express");

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

router.post("/api/cats", (req, res) => {
    burger.insertOne({ burger_Name: req.body.name, devoured: req.body.devoured }, (result) => {
        res.json({ id: result.insertID });
    });
});

module.exports = router;
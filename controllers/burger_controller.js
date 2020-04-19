const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((burgers) => {
        console.log(burgers);
        res.render("index", { burgers });
    });
});

router.post("/api/burgers", (req, res) => {
    const newBurger = {
        burger_name: req.body.burger_name,
        devoured: false
    }
    burger.create(newBurger, (result) => {
        if (result.affectedRows === 0) {
            return res.sendStatus(404);
        }
        res.sendStatus(200);
    });
});

module.exports = router;
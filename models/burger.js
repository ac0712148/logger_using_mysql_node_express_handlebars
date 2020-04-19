const orm = require("../config/orm");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    create: (newBurger, cb) => {
        orm.insertOne("burgers", newBurger, (res) => {
            cb(res);
        });
    },

    update: (burgerData, condition, cb) => {
        orm.updateOne("burgers", burgerData, condition, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;
const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (newBurger, cb) => {
        orm.insertOne("burgers", newBurger, (res) => {
            cb(res);
        });
    },
}

module.exports = burger;
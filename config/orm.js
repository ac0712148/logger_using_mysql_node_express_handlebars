const connection = require("../config/connection.js");

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM ??;", [table], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: (table, col, val, cb) => {
        connection.query("INSERT INTO ?? SET ?;", [table, val], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    updateOne: (table, newVal, condition, cb) => {
        connection.query("UPDATE ?? SET ? WHERE ?;", [table, newVal, condition], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
};

module.exports = orm;
const connection = require("./connection.js");

const orm = {
    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: (table, newData, cb) => {
        const queryString = "INSERT INTO ?? SET ?";
        const values = [table, newData];

        connection.query(queryString, values, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    updateOne: (table, newVal, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        const values = [table, newVal, condition];
        connection.query(queryString, values, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
};

module.exports = orm;
const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/himmelblau"
);

exports.getHours = function() {
    return db
        .query(
            `SELECT * FROM hours
            WHERE open_h IS NOT NULL`)
        .then(({ rows }) => rows);
};

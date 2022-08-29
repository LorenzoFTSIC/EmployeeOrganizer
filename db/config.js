const mysql = require("mysql2")

const config = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "employeeTracker_db"
});

config.connect(function (err){
    if (err) throw err;
})

module.exports = config;
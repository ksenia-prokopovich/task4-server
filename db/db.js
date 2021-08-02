const Sequelize = require("sequelize");

const sequelize = new Sequelize("usersdb", "root", "root", {
    dialect: "mysql",
    host: "mysql-jp8q",
    port: "3306"
});

module.exports = sequelize;

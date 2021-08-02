const Sequelize = require("sequelize");

const sequelize = new Sequelize("usersdb", "root", "Ksenia1998", {
    dialect: "mysql",
    host: "localhost",
    port: "3306"
});

module.exports = sequelize;

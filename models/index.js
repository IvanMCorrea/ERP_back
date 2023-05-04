const { model } = require("mongoose");

const models = {
    Enterprise: require("./Enterprise.model"),
    Employee: require("./Employee.model")
};

module.exports = models;

const { model } = require("mongoose");

const models = {
    Enterprise: require("./Enterprise.model"),
    Employee: require("./Employee.model"),
    Invitation: require("./Invitation.model")
};

module.exports = models;

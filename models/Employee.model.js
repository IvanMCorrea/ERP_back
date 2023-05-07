const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
/* const APP_HOST = process.env.APP_HOST; */
const bcrypt = require("bcrypt");
const saltRounds = 10;

const EmployeeScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
    enterprise: {
      type: mongoose.ObjectId,
      ref: "Enterprise"
    },
    address: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

  EmployeeScheme.pre("save", function (next) {
    if (this.isModified("password")) {
      bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
        if (err) return next(err);
        this.password = hashedPassword;
        next();
      });
    }
  });
  
  EmployeeScheme.methods.comparePassword = async function (password) {
    if (!password) throw new Error("Password is miss can not compare!");
    try {
      const result = await bcrypt.compare(password, this.password);
      return result;
    } catch (error) {
      console.log("Error while comparing password!", error.message);
    }
  };

module.exports = mongoose.model("Employee", EmployeeScheme);
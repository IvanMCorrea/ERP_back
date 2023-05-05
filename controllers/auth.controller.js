const { Enterprise, Employee } = require("../models");
const { getToken, getTokenData } = require("../config/jwt.config");

const usersController = {
  register: async (req, res) => {
    try {
      const { data } = req.body;
      let user = (await Enterprise.findOne({ name: data.name })) || null;

      if (user) {
        return res.status(400).send({
          status: false,
          msg: "La empresa ya existe",
        });
      }

      const newUser = await Enterprise(data);

      if (!newUser) {
        res.status(404).send({
          status: false,
          msg: "Error al registrar usuario",
        });
      } else {
        const token = getToken({
          name: data.name,
          password: data.password,
        });
        const userStored = await newUser.save();
        res.status(200).send({
          status: true,
          msg: "Usuario Registrado!",
          token,
          newUser: userStored,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(409).send({
        status: false,
        msg: "Error al registrar",
        error: error,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { name, password } = req.body;
      let user = await Enterprise.findOne({ name });
      if (!user) user = await Enterprise.findOne({ email: name });
      if (user) {
        const result = await user.comparePassword(password);
        if (result) {
          let token = getToken({ name: user.name });
          return res.send({
            status: true,
            msg: "Inicio de sesión exitoso!",
            token,
            user,
            role: 0
          });
        }
        return res.status(400).send({
          status: false,
          msg: "Contraseña incorrecta!",
        });
      }
      user = await Employee.findOne({ name });
      if (!user) user = await Employee.findOne({ email: name });
      if (user) {
        const result = await user.comparePassword(password);
        if (result) {
          let token = getToken({ name: user.name });
          return res.send({
            status: true,
            msg: "Inicio de sesión exitoso!",
            token,
            user,
            role: 1
          });
        }
        return res.status(400).send({
          status: false,
          msg: "Contraseña incorrecta!",
        });
      }
      res.status(404).send({
        status: false,
        msg: "Usuario no registrado!",
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: false,
        error,
      });
    }
  },

  info: async (req, res) => {
    try {
      const authorization = req.get("authorization");
      let token = null;
      if (authorization && authorization.toLowerCase().startsWith("bearer")) {
        token = authorization.substring(7);
      }
      const decodedToken = getTokenData(token);
      if (decodedToken) {
        const user = await Enterprise.findOne({
          name: decodedToken.data.name,
        });
        if (user) {
          res.status(200).send({ status: true, user });
        } else {
          res.status(404).send({ status: false, auth: "no auth, no user" });
        }
      } else {
        res.status(400).send({ status: false, auth: "no auth" });
      }
    } catch (error) {
      res.status(400).send({ status: false, auth: "no token" });
    }
  },
};

module.exports = usersController;

const { Enterprise } = require("../models");
const { getToken, getTokenData } = require("../config/jwt.config");

const usersController = {
  register: async (req, res) => {
    try {
      const { body } = req;
      let user = (await Enterprise.findOne({ name: body.name })) || null;

      if (user) {
        return res.status(400).send({
          success: false,
          msg: "La empresa ya existe",
        });
      }

      const newUser = await Enterprise(body);

      if (!newUser) {
        res.status(404).send({
          success: false,
          msg: "Error al registrar usuario",
        });
      } else {
        const token = getToken({
          name: body.name,
          password: body.password,
        });
        const userStored = await newUser.save();
        res.status(200).send({
          success: true,
          msg: "Usuario Registrado!",
          token,
          newUser: userStored,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(409).send({
        success: false,
        msg: "Error al registrar",
        error: error,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { name, password } = req.body;
      const user = await Enterprise.findOne({ name, password });
      if (user) {
        const result = await user.comparePassword(password);
        if (result) {
          let token = getToken({ name: user.name });
          return res.send({
            success: true,
            msg: "Inicio de sesión exitoso!",
            token,
          });
        }
        return res.status(400).send({
          success: false,
          msg: "Contraseña incorrecta!",
        });
      } else {
        res.status(404).send({
          success: false,
          msg: "Usuario no registrado!",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: true,
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
          res.status(200).send({ success: true, user });
        } else {
          res.status(404).send({ succes: false, auth: "no auth, no user" });
        }
      } else {
        res.status(400).send({ succes: false, auth: "no auth" });
      }
    } catch (error) {
      res.status(400).send({ succes: false, auth: "no token" });
    }
  },
};

module.exports = usersController;
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const company = await tables.company.readAll();
    res.json(company);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const company = await tables.company.read(req.params.id);
    if (company == null) {
      res.sendStatus(404);
    } else {
      res.json(company);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const company = req.body;
  try {
    const insertId = await tables.company.create(company);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.company.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    delete req.body.password;
    delete req.body.confirmPassword;
    const company = { ...req.body, id: Number(req.params.id) };
    await tables.company.update(company);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Connexion réussie",
      id: req.company.id,
      email: req.company.email,
    });
  } catch (error) {
    next(error);
  }
};
const isLogged = async (req, res, next) => {
  try {
    res.status(200).json({ message: "vous êtes bien connecté" });
  } catch (error) {
    next(error);
  }
};

const disconnect = async (req, res, next) => {
  try {
    res.clearCookie("auth").sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const companyActions = {
  browse,
  read,
  add,
  destroy,
  edit,
  login,
  isLogged,
  disconnect,
};
module.exports = companyActions;

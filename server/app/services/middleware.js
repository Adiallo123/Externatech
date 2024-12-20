const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  const { auth } = req.cookies;
  const userCookie = await jwt.decode(auth, process.env.APP_SECRET);
  const cookieId = userCookie.id;
  const user = Number(req.params.id);
  if (cookieId === user) {
    next();
  } else {
    res
      .status(401)
      .send("Vous n'êtes pas identifié comme étant cette entreprise");
  }
};

const takeCompanyId = async (req, res, next) => {
  const { auth } = req.cookies;
  const userCookie = await jwt.decode(auth, process.env.APP_SECRET);
  const cookieId = userCookie.id;
  req.body.company_id = cookieId;
  if (req.body.company_id) {
    next();
  }
};

const middleware = { verifyUser, takeCompanyId };

module.exports = middleware;

const jwt = require("jsonwebtoken");

const secret = "secret stuff for no one to see, secret secret mcgee";
const expiration = "24h";

module.exports = {
  authMiddleware(req, res, next) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return res
        .status(401)
        .json({ msg: "authentication failed. No jwt found." });
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      if (err) {
        res.status(402).json({ msg: "invalid token homie" });
      }
      console.log("Invalid token");
    }

    next();
  },
  signToken({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

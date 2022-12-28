const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res) => {
  const user = {
    id: 1,
    nombre: "Herny",
    email: "herny@email.com"
  }

  const token = jwt.sign({ user }, "secretkey")
  res.json({
    token
  });
});

router.post("/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: "protected",
        data
      })
    }
  })
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;

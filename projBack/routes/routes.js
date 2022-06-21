const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModals");
const loginTemplateCopy = require("../models/LoginModals");
// const User = require("./models/user");
router.post("/signup", (request, response) => {
  const signUpUser = new signUpTemplateCopy({
    email: request.body.email,
    username: request.body.username,
    password: request.body.password,
  });
  signUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      response.json(err);
    });
});

router.get("/login", (req, res) => {
  const loginUser = new loginTemplateCopy({
    email: req.body.email,
    password: req.body.password,
  });
  res.sendFile(__dirname + "/static/login.html");
});

router.get("/login");
module.exports = router;

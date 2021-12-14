var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

// push data from form submission to messages array
router.post("/new", function (req, res, next) {
  let messageText = req.body.msg;
  let messageUser = req.body.name;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  // send user back to index
  res.redirect('/');
});

module.exports = router;

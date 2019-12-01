"use strict";
const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send("Hello, World");
  });

  app.get("/image", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/leaves.jpg"));
  });
};

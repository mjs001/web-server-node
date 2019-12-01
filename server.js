const express = require("express");
const path = require("path");
const app = express();
const config = require("./config/config");
app.use(express.static(path.join(__dirname + "public")));

app.use(function(req, res, next) {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

require("./routes/routes")(app);

var server = app.listen(config.server.port, config.server.host, () => {
  console.log("live", server.address().port);
});

app.use(express.static("public"));

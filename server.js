const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
// config static file
app.use(express.static(path.join(__dirname, "src/public")));
app.get("/", (req, res) => {
  res.send("Hello World vs Hùng Mạnh and NodeMon");
});
app.get("/images", (req, res) => {
  res.render("sample.ejs");
});
app.listen(port, hostname, () => {
  console.log(`Example app listen on port ${port}`);
});

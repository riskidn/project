const { urlencoded } = require("express");
const express = require(`express`);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

//view engine
app.set(`view engine`, `ejs`);

//sett url
app.get(`/`, (req, res) => {
  res.render("pages/index");
});
app.get(`/index`, (req, res) => {
  res.render("pages/index");
});
app.get(`/contact`, (req, res) => {
  res.render("pages/contact");
});
app.get(`/list`, (req, res) => {
  res.render("pages/list");
});
app.get(`/login`, (req, res) => {
  res.render("pages/login");
});
app.get(`/signup`, (req, res) => {
  res.render("pages/signup");
});

//internal server
app.get(`/contohError`, (req, res) => {
  contohError;
});
app.use(function (err, req, res, next) {
  res.status(500).json({
    error: err.message,
  });
});

//404 handler
app.use(function (req, res, next) {
  res.status(404).json({
    errors: `You Typed Wrong`,
  });
});

app.listen(8000, () => {
  console.log("Koneksi berhasil");
});

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

//Content
app.get(`/shoes`, (req, res) => {
  res.render("pages/sepatu");
});
app.get(`/arloji`, (req, res) => {
  res.render("pages/arloji");
});
app.get(`/jacket`, (req, res) => {
  res.render("pages/jaket");
});
app.get(`/necklace`, (req, res) => {
  res.render("pages/kalung");
});
app.get(`/glasses`, (req, res) => {
  res.render("pages/glasses");
});
app.get(`/hat`, (req, res) => {
  res.render("pages/topi");
});

//Error internal server 500
app.get(`/serverError`, (req, res) => {
  serverError;
});
app.use(function (err, req, res, next) {
  res.status(500).json({
    error: err.message,
  });
});

//404 handler
app.use(function (req, res, next) {
  res.writeHead(404, {
    "Content-Type": "text/html",
  });
  res.write("<h1>You Typed it Wrong </h1>");
  res.end;
});

app.listen(8000, () => {
  console.log("Koneksi berhasil");
});

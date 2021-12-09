const { urlencoded } = require("express");
const express = require(`express`);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get(`/`, (req, res) => {
  res.send("Hallosssas");
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

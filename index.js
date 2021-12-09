const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
  res.send("Hallo");
});

app.get(`/pandji`, (req, res) => {
  res.send("Hallo pandji");
});

app.listen(8000, () => {
  console.log("Koneksi berhasil");
});

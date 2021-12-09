//barrang2
var dataBarang5 = [" Glasses | Eyeblind ", "Rp200.000", "Kondisi : baru", "Berat: 10 Gram", "Kategori: glasses ", "Merk: Eyeblind"];
function showBarang5() {
  var listBarang5 = document.getElementById("list-barang5");
  // cetak semua barang
  for (let i = 0; i < 2; i++) {
    listBarang5.innerHTML += "<li>" + "<h2>" + dataBarang5[i] + "</h2>" + "</li>";
  }
  for (let i = 2; i < dataBarang5.length; i++) {
    listBarang5.innerHTML += "<li>" + "<p>" + dataBarang5[i] + "</p>" + "</li>";
  }
}

function showImg5() {
  document.querySelector(".img-glasses").src = "img/product5.jpg";
  document.querySelector(".img-glasses2").src = "img/content/glasses.jpg";
  document.querySelector(".img-glasses3").src = "img/content/glasses2.jpg";
}

showBarang5();
showImg5();

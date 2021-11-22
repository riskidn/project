//barrang2
var dataBarang3 = [" Jacket | chameleon skin", "Rp150.000", "Kondisi : baru", "Berat: 800 Gram", "Kategori: Jacket Pria", "Merk: chameleon skin"];
function showBarang3() {
  var listBarang3 = document.getElementById("list-barang3");
  // cetak semua barang
  for (let i = 0; i < 2; i++) {
    listBarang3.innerHTML += "<li>" + "<h2>" + dataBarang3[i] + "</h2>" + "</li>";
  }
  for (let i = 2; i < dataBarang3.length; i++) {
    listBarang3.innerHTML += "<li>" + "<p>" + dataBarang3[i] + "</p>" + "</li>";
  }
}

function showImg3() {
  document.querySelector(".img-jaket").src = "img/product3.png";
  document.querySelector(".img-jaket2").src = "img/content/jaket.jpg";
  document.querySelector(".img-jaket3").src = "img/content/jaket2.jpg";
}

showBarang3();
showImg3();

//barrang2
var dataBarang4 = [" Necklace | Buccetally", "Rp12.000.000", "Kondisi : baru", "Berat: 5 Gram", "Kategori: Necklace ", "Merk: Buccetally"];
function showBarang4() {
  var listBarang4 = document.getElementById("list-barang4");
  // cetak semua barang
  for (let i = 0; i < 2; i++) {
    listBarang4.innerHTML += "<li>" + "<h2>" + dataBarang4[i] + "</h2>" + "</li>";
  }
  for (let i = 2; i < dataBarang4.length; i++) {
    listBarang4.innerHTML += "<li>" + "<p>" + dataBarang4[i] + "</p>" + "</li>";
  }
}

function showImg4() {
  document.querySelector(".img-kalung").src = "img/product4.jpg";
  document.querySelector(".img-kalung2").src = "img/content/kalung.jpg";
  document.querySelector(".img-kalung3").src = "img/content/kalung2.jpg";
}

showBarang4();
showImg4();

//barrang2
var dataBarang6 = [" Hat | Fans ", "Rp120.000", "Kondisi : baru", "Berat: 800 Gram", "Kategori: Hat ", "Merk: Fans"];
function showBarang6() {
  var listBarang6 = document.getElementById("list-barang6");
  // cetak semua barang
  for (let i = 0; i < 2; i++) {
    listBarang6.innerHTML += "<li>" + "<h2>" + dataBarang6[i] + "</h2>" + "</li>";
  }
  for (let i = 2; i < dataBarang6.length; i++) {
    listBarang6.innerHTML += "<li>" + "<p>" + dataBarang6[i] + "</p>" + "</li>";
  }
}

function showImg6() {
  document.querySelector(".img-hat").src = "img/product6.jpg";
  document.querySelector(".img-hat2").src = "img/content/hat.jpg";
  document.querySelector(".img-hat3").src = "img/content/hat2.jpg";
}

showBarang6();
showImg6();

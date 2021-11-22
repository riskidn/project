//barrang2
var dataBarang2 = ["Arloji | Molex", "Rp11.000.000", "Kondisi : baru", "Berat: 300 Gram", "Kategori: Arloji ", "Merk: Molex"];
function showBarang2() {
  var listBarang2 = document.getElementById("list-barang2");
  // cetak semua barang
  for (let i = 0; i < 2; i++) {
    listBarang2.innerHTML += "<li>" + "<h2>" + dataBarang2[i] + "</h2>" + "</li>";
  }
  for (let i = 2; i < dataBarang2.length; i++) {
    listBarang2.innerHTML += "<li>" + "<p>" + dataBarang2[i] + "</p>" + "</li>";
  }
}

function showImg2() {
  document.querySelector(".img-arloji1").src = "img/product2.jpg";
  document.querySelector(".img-arloji2").src = "img/content/arloji.jpg";
  document.querySelector(".img-arloji3").src = "img/content/arloji2.jpg";
}

showBarang2();
showImg2();

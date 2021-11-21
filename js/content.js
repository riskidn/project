var dataBarang = ["Shoes | Crocodile Skink ", " Rp9.000.000", " Kondisi : baru", " Berat: 1.000 Gram", " Merk: Crocodile Skink"];

function showBarang() {
  var listBarang = document.getElementById("list-barang");
  // cetak semua barang
  for (let i = 0; i < 2; i++) {
    listBarang.innerHTML += "<li>" + "<h2>" + dataBarang[i] + "</h2>" + "</li>";
  }
  for (let i = 2; i < dataBarang.length; i++) {
    listBarang.innerHTML += "<li>" + "<p>" + dataBarang[i] + "</p>" + "</li>";
  }
}
function showShoes() {
  document.querySelector(".img-gambar1").src = "img/product1.jpg";
  document.querySelector(".img-gambar2").src = "img/content/sepatu.png";
  document.querySelector(".img-gambar3").src = "img/content/sepatu2.jpg";
}
showBarang();
showShoes();

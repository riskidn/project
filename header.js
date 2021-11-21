//Navbar
const link = document.getElementsByTagName("a")[0];
link.innerHTML = "<h2>Tokopakedi</h2>";

const menu = document.querySelectorAll(".nav-item");
menu[0].innerHTML = "Home";
menu[1].innerHTML = "App";
menu[2].innerHTML = "Contact Me";
menu[3].innerHTML = "Daftar";
menu[4].innerHTML = "Login";

//Akhir Navbar

//Jumbotron
const judul = document.getElementById("judul");
judul.innerHTML = "Selamat Datang di Tokopakedi";
const thumb = document.querySelector("div p.lead");
thumb.innerHTML = "Lengkapi outfit harianmu dengan belanja di sini ";
const menu2 = document.querySelectorAll(".menu");
menu2[0].innerHTML = "Belanja";
menu2[1].innerHTML = "List";
//Akhir Jumbotron

//About
const jdlContent2 = document.querySelector("section.mt-5 div h2");
jdlContent2.innerHTML = "Belanja di Tokopakedi";

const about = document.querySelectorAll(".about");
about[0].innerHTML = "Tokopakedi menyediakan fashion dan aksesoris yang berkualitas untuk memenuhi kebutuhan fashion di masa sekarang.";
about[1].innerHTML = "Dapatkan Promo menarik dengan selalu belanja di Tokopakedi, juga ada banyak diskon menarik serta cashback dan free ongkir ";
about[2].innerHTML = "Kami menyediakan berbagai produk lokal dan internasional yang berkualitas dengan harga yang terjangkau. Kami akan selalu mengupdate produk produk terbaru. Tampil keren dengan produk dari kami.";
about[3].innerHTML = "Tokopakedi akan tersedia untuk versi mobile";

//Akhir About

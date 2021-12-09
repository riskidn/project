const contact = document.querySelector(".judul");
contact.innerHTML = "Contact Us";
const contact2 = document.querySelector(".card-title");
contact2.innerHTML = "Contact Us";
const contact3 = document.querySelector(".card-text");
contact3.innerHTML = "Kamu punya keluhan? silahkan hubungi kami ya atau bisa kunjungi office kami <i class='bi bi-emoji-wink-fill' style='color:yellow;'></i>";

const letak = document.querySelectorAll("section#contact div ul li");
letak[0].innerHTML = "<h1>Location</h1>";
letak[1].innerHTML = "My Office";
letak[2].innerHTML = "Jl.Sudirman no.17 gang Melati";
letak[3].innerHTML = "Jakarta, Indonesia";

const pesan = document.querySelectorAll("section#contact div label");
pesan[0].innerHTML = "Nama";
pesan[1].innerHTML = "Email";
pesan[1].innerHTML = "Pesan";

const btn = document.querySelector(".btn");
btn.innerHTML = "Kirim Pesan";

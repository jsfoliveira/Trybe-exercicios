const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById("page-title").innerText = "oi";
document.getElementById("second-paragraph").innerText = "olá";
document.getElementById("subtitle").innerText = "hello";

//troquei o texto de todos que tem class="familia", e alterei para "Anaildes".
let francaPeixoto = document.getElementsByClassName("familia");

for (let i = 0; i < francaPeixoto.length; i += 1) {
  console.log((francaPeixoto[i].innerText = "Anaildes"));
}

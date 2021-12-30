const hamburger = document.querySelector(".hamburger");
const lists = document.querySelector(".lists");

hamburger.addEventListener("click", response);

function response(){
    hamburger.classList.toggle("active");
    lists.classList.toggle("active");
}

const links = document.querySelectorAll(".links");

links.forEach(n => n.addEventListener("click", close));

function close() {
    hamburger.classList.remove("active");
    lists.classList.remove("active");
}


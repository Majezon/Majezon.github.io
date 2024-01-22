window.addEventListener("scroll", function () {
  let text1 = document.querySelector(".text-1");
  let text2 = document.querySelector(".text-2");
  let text3 = document.querySelector(".text-3");
  let scrolled = window.pageYOffset;
  if (scrolled < 1000) {
    text1.classList.add("scrolled");
    text2.classList.remove("scrolled");
    text3.classList.remove("scrolled");
  } else if (scrolled >= 1000 && scrolled < 2200) {
    text1.classList.remove("scrolled");
    text2.classList.add("scrolled");
    text3.classList.remove("scrolled");
  } else {
    text1.classList.remove("scrolled");
    text2.classList.remove("scrolled");
    text3.classList.add("scrolled");
  }
});

function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Czytaj mniej";
    moreText.style.display = "inline";
  }
}

let countDownDate = new Date("February 20, 2024").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

window.addEventListener("scroll", function() {
    var text1 = document.querySelector(".text-1");
    var text2 = document.querySelector(".text-2");
    var text3 = document.querySelector(".text-3");
    var scrolled = window.pageYOffset;
    if (scrolled < 200) {
        text1.classList.add("scrolled");
        text2.classList.remove("scrolled");
        text3.classList.remove("scrolled");
    } else if (scrolled >= 200 && scrolled < 1500) {
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
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

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

  var countDownDate = new Date("May 20, 2023").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
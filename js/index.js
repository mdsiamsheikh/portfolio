// resume pdf
document
  .getElementById("downloadResume")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "/img/Siam Sheikh Resume.pdf";
    link.download = "Siam Sheikh Resume.pdf";
    link.click();
  });

//mousemove
var content = document.querySelector(".content");
var content2 = document.querySelector(".content2");
document.addEventListener("mousemove", function (e) {
  content.style.cssText = content2.style.cssText =
    "left:" + e.clientX + "px; top:" + e.clientY + "px;";
});

//
var typingEffect = new Typed(".heading-primary-main", {
  strings: ["siam", "sheikh"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});

//loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

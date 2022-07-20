// noresponsiv
let menu = document.querySelector(".menu");
let icon = document.querySelector(".icon");

icon.addEventListener("click",function() {
  if (this.classList.contains("fa-bars")){
    this.classList = "fas fa-times icon";
    menu.style.left = 0;
  } else {
    this.classList = "fas fa-bars icon";
    menu.style.left = "-340px";
  }

})

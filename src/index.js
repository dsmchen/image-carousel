import "./style.css";

function nextImage() {
  const innerContainer = document.querySelector(".inner-container");
  const compStyles = window.getComputedStyle(innerContainer);
  const left = compStyles.getPropertyValue("left");

  const dotnavItems = document.querySelectorAll(".dotnav-item");
  dotnavItems.forEach((item) => {
    item.classList.remove("current");
  });

  if (left === "0px") {
    innerContainer.style.left = "-400px";
    dotnavItems[1].classList.add("current");
  } else if (left === "-400px") {
    innerContainer.style.left = "-800px";
    dotnavItems[2].classList.add("current");
  } else if (left === "-800px") {
    innerContainer.style.left = 0;
    dotnavItems[0].classList.add("current");
  }
}

function previousImage() {
  const innerContainer = document.querySelector(".inner-container");
  const compStyles = window.getComputedStyle(innerContainer);
  const left = compStyles.getPropertyValue("left");

  const dotnavItems = document.querySelectorAll(".dotnav-item");
  dotnavItems.forEach((item) => {
    item.classList.remove("current");
  });

  if (left === "0px") {
    innerContainer.style.left = "-800px";
    dotnavItems[2].classList.add("current");
  } else if (left === "-400px") {
    innerContainer.style.left = 0;
    dotnavItems[0].classList.add("current");
  } else if (left === "-800px") {
    innerContainer.style.left = "-400px";
    dotnavItems[1].classList.add("current");
  }
}

function handleClickDotnav(e) {
  const dotnavItems = document.querySelectorAll(".dotnav-item");
  dotnavItems.forEach((item) => {
    item.classList.remove("current");
  });
  e.target.classList.add("current");

  const innerContainer = document.querySelector(".inner-container");
  if (e.target.classList.contains("dotnav-item-1")) {
    innerContainer.style.left = 0;
  } else if (e.target.classList.contains("dotnav-item-2")) {
    innerContainer.style.left = "-400px";
  } else if (e.target.classList.contains("dotnav-item-3")) {
    innerContainer.style.left = "-800px";
  }
}

(function () {
  const nextButton = document.querySelector(".next");
  const previousButton = document.querySelector(".previous");

  nextButton.addEventListener("click", nextImage);
  previousButton.addEventListener("click", previousImage);

  const dotnavItems = document.querySelectorAll(".dotnav-item");

  dotnavItems.forEach((item) => {
    item.addEventListener("click", handleClickDotnav);
  });
})();

setInterval(nextImage, 5000);

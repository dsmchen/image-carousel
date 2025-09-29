import "./style.css";

function nextImage() {
  const innerContainer = document.querySelector(".inner-container");
  const compStyles = window.getComputedStyle(innerContainer);
  const left = compStyles.getPropertyValue("left");

  if (left === "0px") {
    innerContainer.style.left = "-400px";
  } else if (left === "-400px") {
    innerContainer.style.left = "-800px";
  } else if (left === "-800px") {
    innerContainer.style.left = "0";
  }
}

function previousImage() {
  const innerContainer = document.querySelector(".inner-container");
  const compStyles = window.getComputedStyle(innerContainer);
  const left = compStyles.getPropertyValue("left");

  if (left === "0px") {
    innerContainer.style.left = "-800px";
  } else if (left === "-400px") {
    innerContainer.style.left = "0";
  } else if (left === "-800px") {
    innerContainer.style.left = "-400px";
  }
}

(function () {
  const nextButton = document.querySelector(".next");
  const previousButton = document.querySelector(".previous");

  nextButton.addEventListener("click", nextImage);
  previousButton.addEventListener("click", previousImage);
})();

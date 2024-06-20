// SearchBox Hide/show
const searchBoxClose = document.getElementById("searchBoxClose");
const searchBoxOpen = document.getElementById("searchBoxOpen");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchBox");
searchBoxClose.addEventListener("click", function () {
  searchInput.value = "";
  searchContainer.classList.remove("active");
});
searchBoxOpen.addEventListener("click", function () {
  searchContainer.classList.add("active");
  searchInput.focus();
});

/*Popular post container scrooling effect*/
const popularPostContainer = document.querySelectorAll(".popularPostContainer");
const previousPopularPostContainer = document.getElementById(
  "previousPopularPostContainer"
);
const nextPopularPostContainer = document.getElementById(
  "nextPopularPostContainer"
);
const popularPostContainerItemsLength = popularPostContainer.length;
let counter = 0;
let previouscounter = 0;
previousPopularPostContainer.addEventListener("click", function () {
  previouscounter = counter;
  counter = counter + 1;
  if (counter < popularPostContainerItemsLength) {
    popularPostContainer[previouscounter].classList.remove("active");
    popularPostContainer[counter].classList.add("active");
  } else {
    popularPostContainer[previouscounter].classList.remove("active");
    counter = 0;
    popularPostContainer[counter].classList.add("active");
  }
});
nextPopularPostContainer.addEventListener("click", function () {
  previouscounter = counter;
  counter = counter - 1;
  if (counter >= 0) {
    popularPostContainer[previouscounter].classList.remove("active");
    popularPostContainer[counter].classList.add("active");
  } else {
    popularPostContainer[previouscounter].classList.remove("active");
    counter = popularPostContainerItemsLength - 1;
    popularPostContainer[counter].classList.add("active");
  }
});

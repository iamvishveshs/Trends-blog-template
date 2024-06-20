# Trends-Blog-template
 This repository contains the source code for a webpage that features a dynamic search box and a popular post container with scrolling effects. The webpage is designed to enhance user experience by providing intuitive navigation and interactive content display.
Certainly! Here's a README description for a GitHub repository containing the webpage code you've shared:

---


## Features

### 1. Search Box Hide/Show
The search box can be toggled open or closed, improving accessibility and user interface cleanliness.

- **Open Search Box**: Clicking the open button displays the search box and automatically focuses on the input field for immediate typing.
- **Close Search Box**: Clicking the close button hides the search box and clears any text input.

### 2. Popular Post Container Scrolling Effect
The popular post container allows users to scroll through multiple posts smoothly using previous and next buttons.

- **Next Button**: Clicking the next button moves the view to the next popular post.
- **Previous Button**: Clicking the previous button moves the view to the previous popular post.

## Code Description

### JavaScript Functionality

The JavaScript code provides functionality for both the search box and the popular post container scrolling effects.

#### Search Box

```javascript
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
```

#### Popular Post Container

```javascript
/* Popular post container scrolling effect */
const popularPostContainer = document.querySelectorAll(".popularPostContainer");
const previousPopularPostContainer = document.getElementById("previousPopularPostContainer");
const nextPopularPostContainer = document.getElementById("nextPopularPostContainer");
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
```

### HTML Structure

Ensure your HTML has the necessary elements for the JavaScript to function correctly.

```html
<!-- Search Box Elements -->
<button id="searchBoxOpen">Open Search</button>
<div id="searchContainer">
  <button id="searchBoxClose">Close Search</button>
  <input type="text" id="searchBox" placeholder="Search...">
</div>

<!-- Popular Post Container Elements -->
<button id="previousPopularPostContainer">Previous</button>
<div class="popularPostContainer active">Post 1</div>
<div class="popularPostContainer">Post 2</div>
<div class="popularPostContainer">Post 3</div>
<button id="nextPopularPostContainer">Next</button>
```

### CSS

Ensure you have the relevant CSS classes (`.active`, etc.) defined to handle the visibility and styling of the elements.

## Getting Started

To get started with this project:

1. Clone the repository:
   ```sh
   git clone https://github.com/iamvishveshs/Trends-blog-template.git
   ```

2. Open the `index.html` file in your browser to see the webpage in action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Feel free to customize the content according to your specific needs and additional details about your project.

let toggleButton = document.querySelector(".toggle");
let items = document.querySelectorAll(".item");

let highlightItems = () => {
  items.forEach((item) => {
    item.classList.toggle("highlight");
  });
};

toggleButton.addEventListener("click", highlightItems);
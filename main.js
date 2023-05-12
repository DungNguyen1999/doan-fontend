// SEARCH

const searchInput = document.getElementById("search-input");
const productItems = document.querySelectorAll(".product-item");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();

  productItems.forEach((item) => {
    const nameElement = item.querySelector(".pro-item-species");
    const name = nameElement.innerText.toLowerCase();

    if (name.includes(keyword)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// LOAD MORE

$(document).ready(function () {
  $(".product-btn").click(function () {
    $(".product-list-2").toggle();
    if ($(".product-list-2").is(":visible")) {
      $(this).text("Hide");
    } else {
      $(this).text("Load more");
    }
  });

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      $(".header-nav").addClass("style-nav");
    } else {
      $(".header-nav").removeClass("style-nav");
    }
  });
});

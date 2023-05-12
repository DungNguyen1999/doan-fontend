// SEARCH

const searchInput = document.getElementById('search-input');
const productItems = document.querySelectorAll('.pro-item');

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase().trim();

  productItems.forEach((item) => {
    const nameElement = item.querySelector('.pro-item-species');
    const name = nameElement.innerText.toLowerCase();

    if (name.includes(keyword)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

// COLOR LIST

const colorBtns = document.querySelectorAll(".color-btn");

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // xóa class active của các button còn lại
    colorBtns.forEach((btn) => btn.classList.remove("active"));
    // thêm class active cho button được click
    btn.classList.add("active");
  });
});

// SIZE LIST

const sizeBtns = document.querySelectorAll(".size-btn");

sizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // xóa class active của các button còn lại
    sizeBtns.forEach((btn) => btn.classList.remove("active"));
    // thêm class active cho button được click
    btn.classList.add("active");
  });
});

// TOGGLE FILTER

$(".filter-btn").on("click", function () {
  $(this).toggleClass("active");
  $(".pro-filter-list").slideToggle();
});

// TOGGLE BRAND

$(".toggle-btn-brand").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".pro-form-brand").slideToggle();
});

// TOGGLE SIZE

$(".toggle-btn-size").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".size-list").slideToggle();
});

// TOGGLE DRESS

$(".toggle-btn-dress").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".pro-form-dress").slideToggle();
});

// TOGGLE COLOR

$(".toggle-btn-color").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".color-list-toggle").slideToggle();
});

// TOGGLE PRICE

$(".toggle-btn-price").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".pro-price-body").slideToggle();
});

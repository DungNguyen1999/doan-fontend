// SHOW IMG

const thumbnails = document.querySelectorAll(".img-item");
const displayedImage = document.querySelector("#displayed-image");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    // lấy đường dẫn ảnh được chọn
    const selectedImage = this.src;
    // cập nhật đường dẫn ảnh được chọn vào ảnh hiển thị
    displayedImage.src = selectedImage;
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

// QUANTITY PRICE

let minusButton = document.querySelector(".minus-btn");
let plusButton = document.querySelector(".plus-btn");
let quantityInput = document.querySelector("input[name='quantity']");
let price = 90;

function updatePrice() {
  let totalPrice = price * parseInt(quantityInput.value);
  let priceText = totalPrice.toFixed(2) + " EUR";
  document.querySelector(".quantity-price").textContent = priceText;
}

minusButton.addEventListener("click", function () {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    updatePrice();
  }
});

plusButton.addEventListener("click", function () {
  const currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
  updatePrice();
});

// DETAILS TOGGLE

$(".toggle-btn").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".details-body").slideToggle();
});

$(".toggle-btn-2").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".details-body-2").slideToggle();
});

$(".toggle-btn-3").on("click", function () {
  $(this).toggleClass("active");
  $(this).text(function (i, text) {
    return text === "-" ? "+" : "-";
  });

  $(".details-body-3").slideToggle();
});


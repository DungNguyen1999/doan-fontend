$(document).ready(function () {
  let quantity = 1;
  let price = 100;
  let priceIncrement = 100;

  // Xử lý khi click vào button +
  $(".plus-btn-4").click(function () {
    quantity++;
    price += priceIncrement;
    $(".quantity-4 input").val(quantity);
    $(".quantity-price-4").text(price + " EUR");
  });

  // Xử lý khi click vào button -
  $(".minus-btn-4").click(function () {
    if (quantity > 1) {
      quantity--;
      price -= priceIncrement;
      $(".quantity-4 input").val(quantity);
      $(".quantity-price-4").text(price + " EUR");
    }
  });
});

$(document).ready(function () {
  let quantity = 1;
  let price = 200;
  let priceIncrement = 200;

  // Xử lý khi click vào button +
  $(".plus-btn-2").click(function () {
    quantity++;
    price += priceIncrement;
    $(".quantity-2 input").val(quantity);
    $(".quantity-price-2").text(price + " EUR");
  });

  // Xử lý khi click vào button -
  $(".minus-btn-2").click(function () {
    if (quantity > 1) {
      quantity--;
      price -= priceIncrement;
      $(".quantity-2 input").val(quantity);
      $(".quantity-price-2").text(price + " EUR");
    }
  });
});

$(document).ready(function () {
  let quantity = 1;
  let price = 150;
  let priceIncrement = 150;

  // Xử lý khi click vào button +
  $(".plus-btn-3").click(function () {
    quantity++;
    price += priceIncrement;
    $(".quantity-3 input").val(quantity);
    $(".quantity-price-3").text(price + " EUR");
  });

  // Xử lý khi click vào button -
  $(".minus-btn-3").click(function () {
    if (quantity > 1) {
      quantity--;
      price -= priceIncrement;
      $(".quantity-3 input").val(quantity);
      $(".quantity-price-3").text(price + " EUR");
    }
  });
});




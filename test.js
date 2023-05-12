// Lấy danh sách các sản phẩm
const productList = document.querySelectorAll(".product-item");

// Lưu trữ sản phẩm trong một mảng
let products = Array.from(productList);

// Lắng nghe sự kiện khi người dùng chọn tùy chọn sắp xếp theo tên
document.getElementById("sort-select").addEventListener("change", function () {
  // Kiểm tra nếu người dùng chọn tùy chọn "Tên (a - z)"
  if (this.value === "name") {
    // Sắp xếp các sản phẩm theo tên
    products.sort(function (a, b) {
      const speciesA = a
        .querySelector(".pro-item-species")
        .textContent.trim()
        .charAt(0)
        .toLowerCase();
      const speciesB = b
        .querySelector(".pro-item-species")
        .textContent.trim()
        .charAt(0)
        .toLowerCase();
      if (speciesA < speciesB) return -1;
      if (speciesA > speciesB) return 1;
      return 0;
    });

    // Xóa các sản phẩm hiện có
    productList.innerHTML = "";

    // Thêm lại các sản phẩm đã được sắp xếp
    products.forEach(function (product) {
      productList.appendChild(product);
    });
  }
});

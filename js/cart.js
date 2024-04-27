
document.addEventListener("DOMContentLoaded", function() {
    // Lấy dữ liệu từ Local Storage
    const MY_CART = JSON.parse(localStorage.getItem("MY_CART")) || [];

    document.addEventListener("DOMContentLoaded", function() {
        // Lấy dữ liệu từ Local Storage
        const MY_CART = JSON.parse(localStorage.getItem("MY_CART")) || [];

        // Hiển thị số lượng sản phẩm trong giỏ hàng
        const cartItemCount2 = document.getElementById('cartItemCount2');
        cartItemCount2.textContent = MY_CART.length;
    });


    // Hiển thị dữ liệu trong bảng và tổng số tiền
    const cartTableBody = document.querySelector('.table tbody');
    const cartTotal = document.querySelector('.col-8');

    // Hiển thị giỏ hàng và tổng số tiền
    renderCart();
    renderTotal();

    // Hàm tính tổng số tiền
    function calculateTotal() {
        let total = 0;
        MY_CART.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    }
    // Hàm cập nhật lại tổng số tiền
    function renderTotal() {
        const subtotal = calculateTotal();
        const shipping = 3; // Phí vận chuyển cố định
        const totalAmount = subtotal + shipping;

        cartTotal.innerHTML = `
            <div class="bg-light rounded">
                <div class="p-4">
                    <h1 class="display-6 mb-4">Cart <span class="fw-normal">Total</span></h1>
                    <div class="d-flex justify-content-between mb-4">
                        <h5 class="mb-0 me-4">Subtotal:</h5>
                        <p class="mb-0">${subtotal.toLocaleString()}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h5 class="mb-0 me-4">Shipping</h5>
                        <div class="">
                            <p class="mb-0">Flat rate: ${shipping.toLocaleString()}</p>
                        </div>
                    </div>
                    <p class="mb-0 text-end">Shipping to Ukraine.</p>
                </div>
                <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 class="mb-0 ps-4 me-4">Total</h5>
                    <p class="mb-0 pe-4">${totalAmount.toLocaleString()}</p>
                </div>
                <button class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
            </div>
        `;
    }
    function renderCart() {
        // Xóa bảng cũ
        cartTableBody.innerHTML = '';

        // Hiển thị lại giỏ hàng với dữ liệu mới
        MY_CART.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">
                    <div class="d-flex align-items-center">
                        <img src="${product.image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
                    </div>
                </th>
                <td>
                    <p class="mb-0 mt-4">${limitCharacters(product.name, 80)}</p>
                </td>
                <td>
                    <p class="mb-0 mt-4">${product.price.toLocaleString()} $</p>
                </td>
                <td>
                    <div class="input-group quantity mt-4" style="width: 100px;">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" class="form-control form-control-sm text-center border-0" value="${product.quantity}">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <p class="mb-0 mt-4">${(product.price * product.quantity).toLocaleString()} $</p>
                </td>
                <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4 btn-remove-product" data-index="${index}">
                        <i class="fa fa-times text-danger"></i>
                    </button>
                </td>
            `;

            // Thêm hàng vào bảng
            cartTableBody.appendChild(row);
        });

        // Cập nhật lại sự kiện click cho nút xóa
        const removeProductButtons = document.querySelectorAll('.btn-remove-product');
removeProductButtons.forEach(button => {
    button.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));

        // Hiển thị hộp thoại xác nhận trước khi xóa
        const confirmation = confirm("Bạn có muốn xóa không?");

        // Nếu người dùng xác nhận muốn xóa
        if (confirmation) {
            // Xóa sản phẩm khỏi giỏ hàng
            MY_CART.splice(index, 1);

            // Lưu lại giỏ hàng đã cập nhật vào Local Storage
            localStorage.setItem("MY_CART", JSON.stringify(MY_CART));

            // Cập nhật lại hiển thị của giỏ hàng trên trang và tổng số tiền
            renderCart();
            renderTotal();
        }
    });
});
    }
});

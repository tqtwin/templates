function limitCharacters(text, limit) {
    if (text.length > limit) {
        return text.slice(0, limit) + '...'; // Cắt chuỗi nếu vượt quá số ký tự giới hạn và thêm dấu '...'
    }
    return text; // Trả về chuỗi nguyên gốc nếu không cần cắt
}
const MY_CART = JSON.parse(localStorage.getItem("MY_CART")) ||
console.log(product.id);
let loadingEl = document.getElementById("loading-tiki")
loadingEl.innerHTML = "Đang loading sản phẩm từ kiki..."

function fetchData1() {
    setTimeout(() => {
    let data = fetch("https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=0c5337dd-cf75-db38-3651-1b34f1d2dd76&category=1789&page=1&urlKey=dien-thoai-may-tinh-bang")
        .then((response) => response.json())
        .then(data => {
            loadingEl.innerHTML = ""
            const listItemel = document.getElementsByClassName("design_section_2")[0]
            // Lấy danh sách sản phẩm từ dữ liệu API
            let products = data.data;
            console.log(data.data);
            // Tạo một biến để chứa HTML cho danh sách sản phẩm
            let productListHTML = '';

            // Lặp qua mỗi sản phẩm và tạo HTML cho nó
            products.forEach(product => {
                productListHTML += `
                    <div class="col-md-6 col-lg-4 col-xl-3">
                    <a href="shop-detail.html?productId=${product.id}&productName=${encodeURIComponent(product.name)}&productPrice=${encodeURIComponent(product.price)}&productImage=${encodeURIComponent(product.thumbnail_url)}">
                    <div class="rounded position-relative fruite-item">
                        <div class="fruite-img">
                            <img src="${product.thumbnail_url}" class="img-fluid w-100 rounded-top" alt="">
                        </div>
                        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
                        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h5>${limitCharacters(product.name, 40)}</h5>
                            <p></p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">${product.price.toLocaleString()}</p>
                                <a class="btn border border-secondary rounded-pill px-3 text-primary button-add" data-sku="${product.master_id}" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.thumbnail_url}"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>

                `;

                });
            // Thêm HTML vào phần tử #listings-container
            $('.listings-container').html(productListHTML);
            $('.button-add').on('click', function(e) {
                e.preventDefault();
                const productName = $(this).data('name');
                const productPrice = $(this).data('price');
                const productImage = $(this).data('image');
                const productId = $(this).data('id');
                const product_card = {
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1,
                    id:productId
                };
                alert("Đã thêm vào giỏ hàng");
                // window.location.href = 'cart.html';
                MY_CART.push(product_card);
                console.log(MY_CART);
                localStorage.setItem("MY_CART", JSON.stringify(MY_CART));
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
  }, 1000)}
function fetchData2() {
    let data2 = fetch("https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=2e24c25a-3b13-ea9f-8fb3-85e5975e61ec&category=1846&page=1&urlKey=laptop-may-vi-tinh-linh-kien")
        .then((response) => response.json())
        .then(data2 => {
            // Lấy danh sách sản phẩm từ dữ liệu API
            let products2 = data2.data;
            console.log(data2.data);
            // Tạo một biến để chứa HTML cho danh sách sản phẩm
            let product2ListHTML = '';

            // Lặp qua mỗi sản phẩm và tạo HTML cho nó
            products2.forEach(product2 => {
                product2ListHTML += `
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="${product2.thumbnail_url}" class="img-fluid w-100 rounded-top" alt="">
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>${limitCharacters(product2.name, 40)}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">${product2.price.toLocaleString()}</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>

                `;
            });

            // Thêm HTML vào phần tử #listings-container
            $('.listings-container-2').html(product2ListHTML);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    // Lấy dữ liệu từ Local Storage
    const MY_CART = JSON.parse(localStorage.getItem("MY_CART")) || [];

    // Hiển thị số lượng sản phẩm trong giỏ hàng
    const cartItemCount = document.getElementById('cartItemCount');
    cartItemCount.textContent = MY_CART.length;
});


// Gọi hàm fetchData để lấy dữ liệu khi trang web được load
// Thêm sự kiện DOMContentLoaded để gọi hàm fetchData() khi DOM đã được tải
document.addEventListener("DOMContentLoaded", function() {
    fetchData1();
    fetchData2();
});

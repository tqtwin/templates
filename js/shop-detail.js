document.addEventListener("DOMContentLoaded", function() {
    // Parse the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const productId = urlParams.get('productId');
    const productPrice = urlParams.get('productPrice');
    const productImage = urlParams.get('productImage');
    const productContainer = document.querySelector('.product-dt');

    function fetchData3() {
        setTimeout(() => {
            let data = fetch(`https://tiki.vn/api/v2/products/${productId}?platform=web`)
                .then((response) => response.json())
                .then(data => {
                    // Lấy dữ liệu sản phẩm từ API
                    const productData = data;
                    const productDetail= data.specifications[1].attributes;
                    ;
                    console.log(productData);
                    console.log(productDetail);
                    // Tạo HTML để hiển thị thông tin sản phẩm
                    const productHTML = `
                    <div class="row g-4">
                    <div class="col-lg-6">
                           <div class="border rounded">
                               <a href="#">
                                   <img src="${productImage}" class="img-fluid rounded" alt="Image">
                               </a>
                           </div>
                           </div>
                           <div class="col-lg-6">
                           <h4 class="fw-bold mb-3">${productName}</h4>
                           <p class="mb-3">Category: Vegetables</p>
                           <h5 class="fw-bold mb-3">${productPrice.toLocaleString()}</h5>
                           <div class="d-flex mb-4">
                               <i class="fa fa-star text-secondary"></i>
                               <i class="fa fa-star text-secondary"></i>
                               <i class="fa fa-star text-secondary"></i>
                               <i class="fa fa-star text-secondary"></i>
                               <i class="fa fa-star"></i>
                           </div>
                           <p class="mb-4"></p>
                           <p class="mb-4"></p>
                           <div class="input-group quantity mb-5" style="width: 100px;">
                               <div class="input-group-btn">
                                   <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                                       <i class="fa fa-minus"></i>
                                   </button>
                               </div>
                               <input type="text" class="form-control form-control-sm text-center border-0" value="1">
                               <div class="input-group-btn">
                                   <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                       <i class="fa fa-plus"></i>
                                   </button>
                               </div>
                           </div>
                           <a href="#" class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                       </div>
                    <div class="col-lg-12">
                       <nav>
                           <div class="nav nav-tabs mb-3">
                               <button class="nav-link active border-white border-bottom-0" type="button"
                                   role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                   aria-controls="nav-about" aria-selected="true">Description</button>
                               <button class="nav-link border-white border-bottom-0" type="button" role="tab"
                                   id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                                   aria-controls="nav-mission" aria-selected="false">Reviews</button>
                           </div>
                       </nav>
                       <div class="tab-content mb-5">
                           <div class="tab-pane active" id="nav-about" role="tabpanel"
                               aria-labelledby="nav-about-tab">
                               <p>${productData.short_description}</p>

                               <div class="px-2">
                                   <div class="row g-4">
                                       <div class="col-6">
                                           <div
                                               class="row bg-light align-items-center text-center justify-content-center py-2">
                                               <div class="col-6">
                                                   <p class="mb-0">${productDetail.battery_capacity}</p>
                                               </div>
                                               <div class="col-6">
                                                   <p class="mb-0">1 kg</p>
                                               </div>
                                           </div>
                                           <div
                                               class="row text-center align-items-center justify-content-center py-2">
                                               <div class="col-6">
                                                   <p class="mb-0">Country of Origin</p>
                                               </div>
                                               <div class="col-6">
                                                   <p class="mb-0">Agro Farm</p>
                                               </div>
                                           </div>
                                           <div
                                               class="row bg-light text-center align-items-center justify-content-center py-2">
                                               <div class="col-6">
                                                   <p class="mb-0">Quality</p>
                                               </div>
                                               <div class="col-6">
                                                   <p class="mb-0">Organic</p>
                                               </div>
                                           </div>
                                           <div
                                               class="row text-center align-items-center justify-content-center py-2">
                                               <div class="col-6">
                                                   <p class="mb-0">Сheck</p>
                                               </div>
                                               <div class="col-6">
                                                   <p class="mb-0">Healthy</p>
                                               </div>
                                           </div>
                                           <div
                                               class="row bg-light text-center align-items-center justify-content-center py-2">
                                               <div class="col-6">
                                                   <p class="mb-0">Min Weight</p>
                                               </div>
                                               <div class="col-6">
                                                   <p class="mb-0">250 Kg</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="tab-pane" id="nav-mission" role="tabpanel"
                               aria-labelledby="nav-mission-tab">
                               <div class="d-flex">
                                   <img src="img/avatar.jpg" class="img-fluid rounded-circle p-3"
                                       style="width: 100px; height: 100px;" alt="">
                                   <div class="">
                                       <p class="mb-2" style="font-size: 14px;">April 12, 2024</p>
                                       <div class="d-flex justify-content-between">
                                           <h5>Jason Smith</h5>
                                           <div class="d-flex mb-3">
                                               <i class="fa fa-star text-secondary"></i>
                                               <i class="fa fa-star text-secondary"></i>
                                               <i class="fa fa-star text-secondary"></i>
                                               <i class="fa fa-star text-secondary"></i>
                                               <i class="fa fa-star"></i>
                                           </div>
                                       </div>
                                       <p>The generated Lorem Ipsum is therefore always free from repetition
                                           injected humour, or non-characteristic
                                           words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                   </div>
                               </div>
                               <div class="d-flex">
                                   <img src="img/avatar.jpg" class="img-fluid rounded-circle p-3"
                                       style="width: 100px; height: 100px;" alt="">
                                   <div class="">
                                       <p class="mb-2" style="font-size: 14px;">April 12, 2024</p>
                                       <div class="d-flex justify-content-between">
                                           <h5>Sam Peters</h5>
                                           <div class="d-flex mb-3">
                                               <i class="fa fa-star text-secondary"></i>
                                               <i class="fa fa-star text-secondary"></i>
                                               <i class="fa fa-star text-secondary"></i>
                                               <i class="fa fa-star"></i>
                                               <i class="fa fa-star"></i>
                                           </div>
                                       </div>
                                       <p class="text-dark">The generated Lorem Ipsum is therefore always free from
                                           repetition injected humour, or non-characteristic
                                           words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                   </div>
                               </div>
                           </div>
                           <div class="tab-pane" id="nav-vision" role="tabpanel">
                               <p class="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                                   tempor sit. Aliqu diam
                                   amet diam et eos labore. 3</p>
                               <p class="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                                   labore.
                                   Clita erat ipsum et lorem et sit</p>
                           </div>
                       </div>
                    </div>
                    <form action="#">
                       <h4 class="mb-5 fw-bold">Leave a Reply</h4>
                       <div class="row g-4">
                           <div class="col-lg-6">
                               <div class="border-bottom rounded">
                                   <input type="text" class="form-control border-0 me-4" placeholder="Yur Name *">
                               </div>
                           </div>
                           <div class="col-lg-6">
                               <div class="border-bottom rounded">
                                   <input type="email" class="form-control border-0" placeholder="Your Email *">
                               </div>
                           </div>
                           <div class="col-lg-12">
                               <div class="border-bottom rounded my-4">
                                   <textarea name="" id="" class="form-control border-0" cols="30" rows="8"
                                       placeholder="Your Review *" spellcheck="false"></textarea>
                               </div>
                           </div>
                           <div class="col-lg-12">
                               <div class="d-flex justify-content-between py-3 mb-5">
                                   <div class="d-flex align-items-center">
                                       <p class="mb-0 me-3">Please rate:</p>
                                       <div class="d-flex align-items-center" style="font-size: 12px;">
                                           <i class="fa fa-star text-muted"></i>
                                           <i class="fa fa-star"></i>
                                           <i class="fa fa-star"></i>
                                           <i class="fa fa-star"></i>
                                           <i class="fa fa-star"></i>
                                       </div>
                                   </div>
                                   <a href="#"
                                       class="btn border border-secondary text-primary rounded-pill px-4 py-3">
                                       Post Comment</a>
                               </div>
                           </div>
                       </div>
                    </form>
                    </div>

                    `;

                    // Hiển thị thông tin sản phẩm trên trang web
                    productContainer.innerHTML = productHTML;
                })
                .catch(error => {
                    console.error('Error fetching product data:', error);
                });
        }, 1000); // Đợi 1 giây trước khi thực hiện yêu cầu fetch
    }

    // Gọi hàm fetchData3 để lấy dữ liệu sản phẩm
    fetchData3();
});

// Thêm HTML vào phần tử #listings-container


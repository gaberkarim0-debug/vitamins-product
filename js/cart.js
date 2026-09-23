// selector
const productCart = document.querySelector("main .row");
// vars
const cart = JSON.parse(localStorage.getItem("cart")) || [];
// functions
function showCart() {
  productCart.innerHTML = "";
  cart.forEach((item, i) => {
    productCart.innerHTML += ` <div class="col-12 items d-flex align-items-start gap-5 p-4 mb-4 ">
          <div class="item d-flex align-items-start">
        <img class="mt-3 me-3" src="${item.img}" alt="${item.category}" />
        <div class="content">
          <h1 class="category fs-6 text-muted">${item.category}</h1>
          <p class="text-black mb-0 mt-3">
           ${item.discreption}
          </p>
          <span class="text-secondary d-block mt-2"
            >600g<svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path d="M0 0h20v20H0z" fill="none" />
              <path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z" />
            </svg>
          </span>
          <span class="text-secondary product-code mt-2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 16 16"
            >
              <path d="M0 0h16v16H0z" fill="none" />
              <path
                fill="currentColor"
                d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
              />
            </svg>
            Product code: OPN-02385
          </span>
          <div class="items-for-delete text-secondary d-flex gap-3 mt-2">
            <span class="count d-flex align-items-center"
              >1<svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path d="M0 0h20v20H0z" fill="none" />
                <path fill="currentColor" d="m5 6l5 5l5-5l2 1l-7 7l-7-7z" />
              </svg>
            </span>
            <span class="trash d-flex align-items-center"
              ><svg
              onclick="deleteItem(${i})";
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 1024 1024"
              >
                <path d="M0 0h1024v1024H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M160 256H96a32 32 0 0 1 0-64h256V96a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v96h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
                />
              </svg>
            </span>
            <span class="for-later d-flex align-items-center">save for later</span>
          </div>
        </div>
        </div>
        <div class="the-price fw-medium fs-4 mt-3">EGP${item.price}</div>
      </div>`;
  });
}
showCart();
function deleteItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart" , JSON.stringify(cart))
  showCart();
}

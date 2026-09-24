// selectors
const cart = [];
const productRow = document.querySelector("main .row");
// vars
const products = [
  {
    img: "./images/vitamin-now.avif",
    category: "vitamin",
    discreption:
      "NOW Foods, Magnesium Glycinate, 180 Tablets (100 mg per Tablet)",
    price: 990,
    dis: 2000,
    id:1,
  },
  {
    img: "../images/vitamin-best.avif",
    category: "vitamin",
    discreption:
      "Doctor's Best, Brain Magnesium with Magtein®,Magnesium Glycinate,180 Tablets (100 mg per Tablet)",
    price: 2190,
    dis: 3000,
    rate: ``,
    id:2,
  },
  {
    img: "../images/omega-vitamin.avif",
    category: "vitamin",
    discreption:
      "California Gold Nutrition, Omega-3 Premium Fish Oil, 100 Fish Gelatin Softgels (1,100 mg per Softgel)",
    price: 643,
    dis: 900,
    id:3,
  },
  {
    img: "../images/life-vitamin.avif",
    category: "vitamin",
    discreption:
      "Life Extension, BioActive Complete B-Complex, 60 Vegetarian Capsules",
    price: 609,
    dis: 800,
    id:4,
  },
  {
    img: "../images/ashwaganda.avif",
    category: "vitamin",
    discreption:
      "Swanson Vitamins, Full Spectrum® Ashwagandha, 450 mg, 100 Vegan Capsules",
    price: 471,
    dis: 500,
    id:5,
  },
  {
    img: "../images/vitamin.avif",
    category: "vitamin",
    discreption: "Nutricost, Multivitamin, 120 Capsules",
    price: 742,
    dis: 999,
    id:6,
  },
  {
    img: "../images/creatine.avif",
    category: "Supplements",
    discreption:
      "Optimum Nutrition, Micronized Creatine Powder, Unflavored, 1.32 lb (600 g)",
    price: 2138,
    dis: 2700,
    id:7,
  },
  {
    img: "..//images/whey-protein.avif",
    category: "Supplements",
    discreption:
      "Optimum Nutrition, Gold Standard® 100% Whey Protein, Double Rich Chocolate, 5.05 lb (2.29 kg)",
    price: 7283,
    dis: 8000,
    id:8,
  },
  {
    img: "../images/supplement.avif",
    category: "Supplements",
    discreption:
      "NutraBio, Intra Blast, Advanced Intra-Workout, Passion Fruit, 1.56 lb (712 g)",
    price: 2512,
    dis: 2990,
    id:9,
  },
  {
    img: "../images/intra-preworkout.avif",
    category: "Supplements",
    discreption:
      "NutraBio, Intra Blast, Advanced Intra-Workout, Tropical Fruit Punch, 1.58 lb (717 g)",
    price: 2512,
    dis: 3200,
    id:10,
  },
  {
    img: "../images/granola.avif",
    category: "Grocery",
    discreption:
      "Bob's Red Mill, Granola, Honey Oat, Gluten Free , 12 oz (340 g)",
    price: 491,
    dis: 520,
    id:11,
  },
  {
    img: "../images/oat-breakfast.avif",
    category: "Grocery",
    discreption: "Bob's Red Mill, Classic Pancake & Waffle Mix, 24 oz (680 g)",
    price: 625,
    dis: 730,
    id:12,
  },
  {
    img: "../images/strawbeery-snacks.avif",
    category: "Grocery",
    discreption:
      "California Gold Nutrition, Foods, Freeze-Dried Strawberry, Ready to Eat Whole Freeze-Dried Slices, 1 oz (28 g)",
    price: 277,
    dis: 299,
    id:13,
  },
  {
    img: "../images/toast-coconut.avif",
    category: "Grocery",
    discreption:
      "Chimes, Toasted Coconut Hard Toffee with Sea Salt, 3.5 oz (100 g)",
    price: 252,
    dis: 310,
    id:14,
  },
];
// fuctions
function displayProducts() {
  productRow.innerHTML = ""
  products.forEach((product, i) => {
    productRow.innerHTML += `  <div class="col-12 col-md-6 col-lg-4 col-xl-3 ">
          <div class="item d-flex flex-column align-items-center">
            <img
              
              src="${product.img}"
              alt="${product.category}"
            />
            <div class="content p-2 d-flex flex-column align-items-center">
              <h2 class="fs-6 mb-2 me-auto ms-0 text-body-tertiary category mt-3">${product.category}</h2>
              <p class="text-muted text-center mb-2">
                ${product.discreption}
              </p>
              <span class="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7z"
                  />
                </svg>
              </span>
              <span
                class="fs-4 text-danger d-flex align-items-center gap-4 mb-2 fw-bold"
                >EGP${product.price}<del class="text-body-tertiary fs-5 fw-normal"
                  >EGP${product.dis}</del
                ></span
              >
              <button onclick="addToCart(${product.id})" class="btn add-to-cart text-white">Add to Cart</button>
            </div>
          </div>
        </div>`;
  });
}
displayProducts();
// display vitamins
function displayVitamin() {
  const vitamens = products.filter((item) => item.category == "vitamin");
  productRow.innerHTML = "";
  vitamens.forEach((item, i) => {
    productRow.innerHTML += `  <div class="col-12 col-md-6 col-lg-4 col-xl-3 ">
          <div class="item d-flex flex-column align-items-center">
            <img
              
              src="${item.img}"
              alt="${item.category}"
            />
            <div class="content p-2 d-flex flex-column align-items-center">
              <h2 class="fs-6 mb-2 me-auto ms-0 text-body-tertiary category mt-3">${item.category}</h2>
              <p class="text-muted text-center mb-2">
                ${item.discreption}
              </p>
              <span class="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7z"
                  />
                </svg>
              </span>
              <span
                class="fs-4 text-danger d-flex align-items-center gap-4 mb-2 fw-bold"
                >EG${item.price}<del class="text-body-tertiary fs-5 fw-normal"
                  >EG${item.dis}</del
                ></span
              >
              <button onclick="addToCart(${item.id})" class="btn add-to-cart text-white">Add to Cart</button>
            </div>
          </div>
        </div>`;
  });
}
//display supplements
function showSupplements () {
const supplements = products.filter((supplement) => supplement.category == "Supplements" )
productRow.innerHTML = "";
supplements.forEach((supplement, i) => {
  productRow.innerHTML += `  <div class="col-12 col-md-6 col-lg-4 col-xl-3 ">
          <div class="item d-flex flex-column align-items-center">
            <img
              
              src="${supplement.img}"
              alt="${supplement.category}"
            />
            <div class="content p-2 d-flex flex-column align-items-center">
              <h2 class="fs-6 mb-2 me-auto ms-0 text-body-tertiary category mt-3">${supplement.category}</h2>
              <p class="text-muted text-center mb-2">
                ${supplement.discreption}
              </p>
              <span class="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7z"
                  />
                </svg>
              </span>
              <span
                class="fs-4 text-danger d-flex align-items-center gap-4 mb-2 fw-bold"
                >EG${supplement.price}<del class="text-body-tertiary fs-5 fw-normal"
                  >EG${supplement.dis}</del
                ></span
              >
              <button onclick="addToCart(${supplement.id})" class="btn add-to-cart text-white">Add to Cart</button>
            </div>
          </div>
        </div>`;
})
}
// show grocery
function showGroceryItem () {
  const grocery = products.filter((item) => item.category == "Grocery")
  productRow.innerHTML = ""
  grocery.forEach((item, i) => {
    productRow.innerHTML += `  <div class="col-12 col-md-6 col-lg-4 col-xl-3 ">
          <div class="item d-flex flex-column align-items-center">
            <img
              
              src="${item.img}"
              alt="${item.category}"
            />
            <div class="content p-2 d-flex flex-column align-items-center">
              <h2 class="fs-6 mb-2 me-auto ms-0 text-body-tertiary category mt-3">${item.category}</h2>
              <p class="text-muted text-center mb-2">
                ${item.discreption}
              </p>
              <span class="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="#ffb310"
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7z"
                  />
                </svg>
              </span>
              <span
                class="fs-4 text-danger d-flex align-items-center gap-4 mb-2 fw-bold"
                >EG${item.price}<del class="text-body-tertiary fs-5 fw-normal"
                  >EG${item.dis}</del
                ></span
              >
              <button onclick="addToCart(${item.id})" class="btn add-to-cart text-white">Add to Cart</button>
            </div>
          </div>
        </div>`;
  })
}
// Add to cart
let addToCart = (productId) => {
  const inventory = products.find(({id}) => id === productId)
  cart.push(inventory);
  localStorage.setItem("cart", JSON.stringify(cart));
};

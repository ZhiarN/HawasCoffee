const products = document.querySelectorAll(".product");
const productGrid = document.getElementById("productGrid");
const activeContainer = document.getElementById("activeContainer");
const activeProduct = document.getElementById("activeProduct");
const activeDescription = document.getElementById("activeDescription");
const goBack = document.getElementById("goBack");

const productData = {
  1: {
    title: "Viet Bang",
    img: "media/HawasProduct.webp",
    description:
      "Single origin Arabica. Medium roast with hints of dark chocolate and pepper. ",
  },
  2: {
    title: "Kenya Bold",
    img: "media/HawasProduct.webp",
    description:
      "Strong and full-bodied. Notes of berry and citrus. Perfect for espresso lovers.",
  },
  3: {
    title: "Colombia Light",
    img: "media/HawasProduct.webp",
    description:
      "Smooth and mellow. Light roast with caramel and nutty aromas.",
  },
  4: {
    title: "Colombia Tight",
    img: "media/HawasProduct.webp",
    description:
      "Smooth and mellow. Light roast with caramel and nutty aromas.",
  },
};

products.forEach((product) => {
  product.addEventListener("click", () => {
    const id = product.getAttribute("data-id");
    const data = productData[id];

    // Hide the grid
    productGrid.classList.add("hidden");

    // Populate and show the active product + description
    activeProduct.innerHTML = `
          <img src="${data.img}" alt="${data.title}">
          <h3>${data.title}</h3>
        `;

    activeDescription.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.description}</p>
        `;

    activeContainer.classList.remove("hidden");
    goBack.style.display = "block";
  });
});

goBack.addEventListener("click", () => {
  activeContainer.classList.add("hidden");
  productGrid.classList.remove("hidden");
  goBack.style.display = "none";
});




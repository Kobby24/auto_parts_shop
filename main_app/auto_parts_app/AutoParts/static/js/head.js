document.addEventListener('DOMContentLoaded', () => {
        const brandSelect = document.getElementById('brand');
        const modelSelect = document.getElementById('model');

        // Event listener for brand selection
        brandSelect.addEventListener('change', () => {
            const selectedBrand = brandSelect.value;

            // Find the selected brand's models
            const brand = brandsData.find(r => r.brand === selectedBrand);
            const models = brand ? brand.models : [];

            // Clear existing options in the model dropdown
            modelSelect.innerHTML = '<option value="" disabled selected>Select a model</option>';

            // Populate the model dropdown with the corresponding models
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        });
    });

        const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const card = e.target.closest(".food-card");
        const selectedFood = {
          name: card.getAttribute("data-name"),
          price: parseFloat(card.getAttribute("data-price")),
          image: card.getAttribute("data-image"),
        };
        cart.push(selectedFood);
        updateCart();
        updateCartCount();
      });
    });

    /** UPDATE CART **/
    const cartContainer = document.createElement("div");
    const cartTotal = document.querySelector(".cart-total");
    cartContainer.classList.add("cart-container");
    menuPage.appendChild(cartContainer);

    function updateCart() {
      cartContainer.innerHTML = "";
      let total = 0;

      cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        const img = document.createElement("img");
        img.src = item.image;

        const name = document.createElement("p");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = `GH₵${item.price}`;

        cartItem.appendChild(img);
        cartItem.appendChild(name);
        cartItem.appendChild(price);

        cartContainer.appendChild(cartItem);

        total += item.price;
      });

      cartTotal.textContent = `Total: GH₵${total.toFixed(2)}`;
    }

    /** UPDATE CART ITEM COUNT **/
    function updateCartCount() {
      cartCount.textContent = `(${cart.length})`; // Update the count displayed next to the cart icon
      cartCount.classList.add("large"); // Make the cart count number larger when updated

      // Remove the 'large' class after a short time to return it to normal size
      setTimeout(() => {
        cartCount.classList.remove("large");
      }, 300);
    }
  });

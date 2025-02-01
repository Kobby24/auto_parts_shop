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


// Select cart elements
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartNum = document.getElementById('cart-count');

let totalAmount = 0;
let totalNum = 0;

// Add event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', event => {
    const productElement = event.target.closest('.card');
    const productName = productElement.querySelector('p').innerText;
    const productPrice = parseFloat(productElement.dataset.price);

    // Create list item for the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - GH₵${productPrice.toFixed(2)}`;
    listItem.classList.add('nav-item');

    // Create delete link
    const delete_ = document.createElement('button');
    delete_.classList.add('nav-link');

    // Create trash icon
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('bi', 'bi-trash3');
    delete_.appendChild(trashIcon);

    // Add event listener to delete link
    delete_.addEventListener('click', () => {
      // Remove the list item and delete link
      listItem.remove();
      delete_.remove();

      // Update total amount and total number of items
      totalAmount -= productPrice;
      totalNum -= 1;

      // Update the cart display
      cartTotal.textContent = totalAmount.toFixed(2);
      cartNum.textContent = totalNum.toString();
    });

    // Append list item and delete link to the cart
    cartItems.appendChild(listItem);
    cartItems.appendChild(delete_);

    // Update total amount and total number of items
    totalAmount += productPrice;
    totalNum += 1;

    // Update the cart display
    cartTotal.textContent = totalAmount.toFixed(2);
    cartNum.textContent = totalNum.toString();
  });
});
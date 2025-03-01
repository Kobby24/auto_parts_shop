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

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || { items: [], totalAmount: 0, totalNum: 0 };

// Function to update the cart display
function updateCartDisplay() {
  if (!cartItems || !cartTotal || !cartNum) return; // Prevent errors on pages without a cart section

  cartItems.innerHTML = ''; // Clear cart display
  cart.totalAmount = 0;
  cart.totalNum = 0;

  cart.items.forEach((item, index) => {
    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} x${item.quantity} - GH₵${(item.price * item.quantity).toFixed(2)}`;
    listItem.classList.add('nav-item');

    // Create delete button
    const delete_ = document.createElement('button');
    delete_.classList.add('nav-link');

    // Create trash icon
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('bi', 'bi-trash3');
    delete_.appendChild(trashIcon);

    // Add event listener to delete button
    delete_.addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart.items.splice(index, 1);
      }

      saveCart();
      updateCartDisplay();
    });

    // Append list item and delete button to cart
    cartItems.appendChild(listItem);
    cartItems.appendChild(delete_);

    // Update total amount and total number of items
    cart.totalAmount += item.price * item.quantity;
    cart.totalNum += item.quantity;
  });

  // Update cart display
  cartTotal.textContent = cart.totalAmount.toFixed(2);
  cartNum.textContent = `(${cart.totalNum})`;
}

// Function to save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', event => {
    const productElement = event.target.closest('.card');
    const productName = productElement.querySelector('p').innerText;
    const productPrice = parseFloat(productElement.dataset.price);

    // Check if item already exists in cart
    const existingItem = cart.items.find(item => item.name === productName);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ name: productName, price: productPrice, quantity: 1 });
    }

    saveCart();
    updateCartDisplay();
  });
});

// Ensure cart updates on page load
updateCartDisplay();

// Redirect to cart page when clicking the cart link
document.getElementById('cart-icon')?.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor action
  window.location.href = "/cart/"; // Change to Django's cart page
});

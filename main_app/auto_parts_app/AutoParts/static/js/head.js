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
  if (!cartItems || !cartTotal || !cartNum) return; // Prevent errors on pages without a cart

  cartItems.innerHTML = ''; // Clear current cart items
  cart.totalAmount = 0;
  cart.totalNum = 0;

  cart.items.forEach((item, index) => {
    // Create Bootstrap list group item
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    // Item Name & Price
    listItem.innerHTML = `
      <span>
        <strong>${item.name}</strong> - GH₵${(item.price * item.quantity).toFixed(2)}
      </span>
      <span class="badge bg-secondary">${item.quantity}</span>
    `;

    // Delete button with Bootstrap styles
    const delete_ = document.createElement('button');
    delete_.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
    delete_.innerHTML = `<i class="bi bi-trash3"></i>`;

    // Add event listener to remove item
    delete_.addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart.items.splice(index, 1);
      }

      saveCart();
      updateCartDisplay();
    });

    // Append delete button to list item
    listItem.appendChild(delete_);

    // Append to cart
    cartItems.appendChild(listItem);

    // Update totals
    cart.totalAmount += item.price * item.quantity;
    cart.totalNum += item.quantity;
  });

  // Update total amount and cart count display
  cartTotal.innerHTML = `<span class="alert alert-primary p-1">GH₵${cart.totalAmount.toFixed(2)}</span>`;
  cartNum.innerHTML = `<span class="badge bg-danger">${cart.totalNum}</span>`;
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

// Redirect to cart page when clicking the cart link
document.getElementById('cart-icon')?.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor action
  window.location.href = "/cart/"; // Change to Django's cart page
});

// Ensure cart updates on page load
updateCartDisplay();

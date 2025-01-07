//const optionsData = {{ regions|safe }};
//
//  function updateContent() {
//    const selectedValue = document.getElementById('region').value;
//    const contentDiv = document.getElementById('city');
//
//    // Find the corresponding option in the data
//    const selectedOption = optionsData.find(opt => opt.id == selectedValue);
//
//    if (selectedOption) {
//      contentDiv.innerHTML = `<p>${selectedOption.content}</p>`;
//    } else {
//      contentDiv.innerHTML = "<p>Select a region to see cities here!</p>";
//    }
//  }
document.addEventListener('DOMContentLoaded', function () {
        // Define the options for each category
        const options = {
            fruits: [
                { value: 'apple', text: 'Apple' },
                { value: 'banana', text: 'Banana' },
                { value: 'orange', text: 'Orange' }
            ],
            vegetables: [
                { value: 'carrot', text: 'Carrot' },
                { value: 'broccoli', text: 'Broccoli' },
                { value: 'spinach', text: 'Spinach' }
            ]
        };

        // Get references to the select elements
        const categorySelect = document.getElementById('category');
        const itemsSelect = document.getElementById('items');

        // Function to update the items dropdown
        function updateItems(selectedCategory) {
            // Clear existing options in the items dropdown
            itemsSelect.innerHTML = '';

            // Add new options based on the selected category
            if (options[selectedCategory]) {
                options[selectedCategory].forEach(option => {
                    const newOption = document.createElement('option');
                    newOption.value = option.value;
                    newOption.textContent = option.text;
                    itemsSelect.appendChild(newOption);
                });
            }
        }

        // Event listener for changes in the category dropdown
        categorySelect.addEventListener('change', function () {
            const selectedCategory = categorySelect.value;
            updateItems(selectedCategory);
        });

        // Initialize the items dropdown on page load
        updateItems(categorySelect.value);
    });
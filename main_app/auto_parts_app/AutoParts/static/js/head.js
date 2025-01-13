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
document.addEventListener('DOMContentLoaded', () => {
        const regionSelect = document.getElementById('brand');
        const citySelect = document.getElementById('model');

        // Event listener for region selection
        regionSelect.addEventListener('change', () => {
            const selectedRegion = regionSelect.value;

            // Find the selected region's cities
            const region = regionsData.find(r => r.region === selectedRegion);
            const cities = region ? region.cities : [];

            // Clear existing options in the city dropdown
            citySelect.innerHTML = '<option value="" disabled selected>Select a model</option>';

            // Populate the city dropdown with the corresponding cities
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        });
    });
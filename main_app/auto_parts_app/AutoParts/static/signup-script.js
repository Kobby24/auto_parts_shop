const optionsData = {{ options|safe }};

  function updateContent() {
    const selectedValue = document.getElementById('region').value;
    const contentDiv = document.getElementById('city');

    // Find the corresponding option in the data
    const selectedOption = optionsData.find(opt => opt.id == selectedValue);

    if (selectedOption) {
      contentDiv.innerHTML = `<p>${selectedOption.content}</p>`;
    } else {
      contentDiv.innerHTML = "<p>Select an option to see changes here!</p>";
    }
  }
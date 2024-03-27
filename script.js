function remove() {
    let selectElement = document.getElementById("colorSelect")
    const selectedIndex = selectElement.selectedIndex;

    // Check if an option is selected
    if (selectedIndex !== -1) {
      // Remove the selected option from the list
      selectElement.remove(selectedIndex);
}}
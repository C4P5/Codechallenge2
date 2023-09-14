function updateList() {
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255')
        .then(response => response.json())
        .then(data => {
            let listContainer = document.querySelector('.Lista');
            // Clear the existing list
            listContainer.innerHTML = '';
            
            // Loop through the data and create list items
            data.forEach(item => {
                let listItem = document.createElement('div');
                listItem.textContent = `Nombre: ${item.nombre}, Apellido: ${item.apellido}, Grupo: ${item.grupo}, Sala: ${item.sala}`;
                // Create an image for deleting the item
                let deleteIcon = document.createElement('img');
                deleteIcon.src = 'checkbox-152188_640.png'; // Replace with your delete icon URL
                deleteIcon.alt = 'Delete';
                deleteIcon.width = 130;
                deleteIcon.height = 105;
                
                // Add a click event listener to delete the item
                deleteIcon.addEventListener('click', () => {
                    // Send a DELETE request to your API to delete the item
                    fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255`, {
                        method: 'DELETE'
                    })
                    .then(() => {
                        // After successful deletion, remove the item from the list
                        listItem.remove();
                    })
                    .catch(error => console.error('Error deleting item:', error));
                });

                // Append the delete icon to the list item
                listItem.appendChild(deleteIcon);
                
                // Append the list item to the list container
                listContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the updateList function every 1.5 seconds
setInterval(updateList, 1500);

// Initial call to populate the list
updateList();
function updateList() {
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255')
        .then(response => response.json())
        .then(data => {
            let listContainer = document.querySelector('.Lista');

            listContainer.innerHTML = '';
            
            data.forEach(item => {
                let listItem = document.createElement('div');
                listItem.textContent = `Nombre: ${item.nombre}, Apellido: ${item.apellido}, Grupo: ${item.grupo}, Sala: ${item.sala}`;
                let deleteIcon = document.createElement('img');
                deleteIcon.src = 'checkbox-152188_640.png'; 
                deleteIcon.alt = 'Delete';
                deleteIcon.width = 130;
                deleteIcon.height = 105;
      
        // pointer img //
            deleteIcon.addEventListener('mouseover', () => {
            deleteIcon.style.cursor = 'pointer';
            });

            deleteIcon.addEventListener('mouseout', () => {
            deleteIcon.style.cursor = 'auto';
            });

                deleteIcon.addEventListener('click', () => {
                    fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255`, {
                        method: 'DELETE'
                    })
                    .then(() => {
                        listItem.remove();
                    })
                    .catch(error => console.error('Error deleting item:', error));
                });
                listItem.appendChild(deleteIcon);
                 listContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
setInterval(updateList, 1500);
updateList();
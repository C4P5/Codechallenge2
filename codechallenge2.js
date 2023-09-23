let listContainer = document.querySelector('.Lista');

function updateList() {
  fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255')
    .then(response => response.json())
    .then(data => {
      
        listContainer.innerHTML = '';

      data.forEach(item => {
        let listItem = document.createElement('div');
        listItem.textContent = `Nombre: ${item.nombre}, Apellido: ${item.apellido}, Grupo: ${item.grupo}, Sala: ${item.room}`;
        
        let deleteIcon = document.createElement('img');
        deleteIcon.src = 'checkbox-152188_640.png';
        deleteIcon.alt = 'Delete';
        deleteIcon.width = 99;
        deleteIcon.height = 99;
        
        deleteIcon.addEventListener('click', () => {
          fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255/${item._id}`, {
            method: 'DELETE'
          })
            .then(() => {
              listItem.remove();
            })
            .catch(error => console.error('Error al eliminar el elemento:', error));
        });

        listItem.appendChild(deleteIcon);
        listContainer.appendChild(listItem);
      });
    })

    .catch(error => console.error('Error al obtener datos:', error));
};

setInterval(updateList, 1500);
updateList();
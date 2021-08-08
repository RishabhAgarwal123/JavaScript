let list = document.querySelector('#list');

const add = function () {
    let item = document.querySelector('#listItem');
    if (item.value !== '') {
        let element = document.createElement('li');
        element.innerHTML = item.value;

        let removeButton = document.createElement('button');
        removeButton.className = 'close';
        removeButton.innerHTML = '\u00D7';
        element.appendChild(removeButton);

        list.appendChild(element);
        item.value = '';

        element.addEventListener('click', (e) => {
            e.target.style.textDecoration = 'line-through';
        });
    
        removeButton.addEventListener('click', (e) => {
            e.target.parentElement.style.display = 'none';
        });
    } else {
        alert('No Input');
    }
}

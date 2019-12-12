const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from Airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {

    const listElem = document.querySelector('.list');
    const createBtn = document.querySelector('.create-task-btn');

    const listItemElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {

            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item-done');  //add styles
            }

            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');        
            listItemElem.append(checkboxElem, text);

           
            

            return listItemElem;
        });

        const addListItem = createBtn.addEventListener('click', function(text, done) {

            const newLi = document.createElement('li');
            newLi.appendChild(document.createTextNode(`${text}`));
            listElem.appendChild(newLi);
            newLi.classList.add('list__item');

            const checkForNew = document.createElement('input');
            checkForNew.setAttribute('type', 'checkbox');
            checkForNew.checked = done;
            checkForNew.classList.add('list__item-checkbox');        
            newLi.prepend(checkForNew);

        })

    listElem.append(...listItemElems);
        }

renderListItems(tasks);
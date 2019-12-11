const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from Airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {

    const listElem = document.querySelector('.list');

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

    listElem.append(...listItemElems);
};

renderListItems(tasks);
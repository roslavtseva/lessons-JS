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
    const taskInput = document.querySelector('.task-input');

    const listItemElems = listItems
        .sort((a, b) => !b.done - !a.done)
        .map(({ text, done }) => {

            const listItemElem = document.createElement('li');

            if (done) {
                listItemElem.classList.add('list__item-done', 'list__item');  //add styles
            }else {
                listItemElem.classList.add('list__item');

            };

            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');        
            listItemElem.append(checkboxElem, text);

           
            

            return listItemElem;
        });

        const addListItem = createBtn.addEventListener('click', function(text, done) {
            text = taskInput.value;
            const sortNewLi = () => {
                listItemElems.sort((a, b) => !b.done - !a.done);
            };

            const newLi = document.createElement('li');
            newLi.appendChild(document.createTextNode(text));
            listElem.appendChild(newLi);
            newLi.classList.add('list__item');
            
            const checkForNew = document.createElement('input');
            checkForNew.setAttribute('type', 'checkbox');
            checkForNew.checked = done;
            checkForNew.classList.add('list__item-checkbox');        
            newLi.prepend(checkForNew);
            sortNewLi();
            
            const markDone = checkForNew.addEventListener('change', function(){
                if(checkForNew.checked){
                    newLi.classList.add('list__item-done');

                }else {
                    newLi.classList.remove('list__item-done');
                }
                
            })
            
        })


    listElem.append(...listItemElems);
        }

renderListItems(tasks);
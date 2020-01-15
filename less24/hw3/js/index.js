import { tasks, setItem, getItem, ifStorageChanges} from './storage.js';

const toDoList = document.querySelector('.list');

const createBtn = document.querySelector('.create-task-btn');

export const createListRander = listItems => {

    toDoList.innerHTML = '';

    const tasks = getItem('listItems') || 0; 

    const itemsOfList = listItems
    .sort ((a,b) => b.date - a.date)
    .sort ((a,b) => !b.done - !a.done)
    .map (({text, done}) => {

        const liElem = document.createElement('li');
        liElem.classList.add('li__elem');


        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('li__elem-checkbox');
        checkBox.checked = done;
        if (done) liElem.classList.add('li__elem-done');

        liElem.append(checkBox, text);
        return liElem;
    });

    toDoList.append(...itemsOfList);

                                            //setItem

};



const switchBox = event => {
  const elemText = event.target.parentElement.textContent;
    tasks.map((elem) => {
    if (elem.text === elemText){
        elem.done = !elem.done;
    }
    });


    createListRander(tasks);
}

toDoList.addEventListener('click', switchBox);

const addListItem = createBtn.addEventListener('click', function(){
    const taskInput = document.querySelector('.task-input');

    taskInput.value = '';


    const tasksList = getItem('tasks') || [];
    ​
        const newElem = tasks.concat({
            text: taskInput.value,
            done: false,
            date: new Date().toISOString(),

        });
    ​
     const newList = setItem('tasks', newElem);

    
    createListRander(tasks);

})


createListRander(tasks);
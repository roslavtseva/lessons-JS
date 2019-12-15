const tasks = [
    { text: 'Buy milk', done: false, date: new Date(), },
    { text: 'Pick up Tom from Airport', done: false, date: new Date(), },
    { text: 'Visit party', done: false, date: new Date(), },
    { text: 'Visit doctor', done: true, date: new Date(), },
    { text: 'Buy meat', done: true, date: new Date(), },
];

const toDoList = document.querySelector('.list');

const createBtn = document.querySelector('.create-task-btn');

const createListRander = listItems => {

    toDoList.innerHTML = '';

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

};

const randerList = renderedTasks => {
    toDoList.innerHTML = '';
    toDoList.append(...renderedTasks);
}

const switchBox = event => {
  const elemText = event.target.parentElement.textContent;
    tasks.map((elem) => {
    if (elem.text === elemText){
        elem.done = !elem.done;
    }
    });

    // const currentTask = tasks.find(elem => elem.id === +event.target.parentElement.id);
    // currentTask.done = event.target.checked;

    createListRander(tasks);
}

toDoList.addEventListener('click', switchBox);

const addListItem = createBtn.addEventListener('click', function(){
    const taskInput = document.querySelector('.task-input');
    let newElem = {
        text: taskInput.value,
        done: false,
        date: new Date(),
    };
    
    taskInput.value = '';

    tasks.push(newElem);
    
    createListRander(tasks);

})


createListRander(tasks);

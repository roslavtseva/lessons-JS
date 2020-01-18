import {setItem, getItem, ifStorageChanges, tasks} from './storage.js';
import {renderTasks, createListItem, createCheckbox} from './renderer.js';


const createBtnElem = document.querySelector('.create-task-btn');

const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';

    const tasksListItems = getItem('tasks') || [];
    const newTasksList = tasksListItems.push({
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString()
    });

    setItem('tasksListItems', newTasksList);

    renderTasks(newTasksList);
};

createBtnElem.addEventListener('click', onCreateTask);
import {setItem, getItem, tasks} from './storage.js';
import {renderTasks} from './renderer.js';

const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }
    
 const tasksListItems = getItem('tasks') || [];

    const newTasksList = tasks
        .map(task => {
            if(task.id === e.target.dataset.id) {
                const done = e.target.cheked;
                return{
                    ...task,
                    done,
                    finishDate: done
                        ? new Date().toISOString()
                        : null

                };
            }
            return task;
        });

    setItem('tasksListItems', newTasksList);
    

    
 renderTasks(newTasksList);


};

const todoListElem = document.querySelector('.list');

todoListElem.addEventListener('click', onToggleTask);
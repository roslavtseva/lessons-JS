import { renderTasks } from "./renderer.js";

export const tasks = [
    { text: 'Buy milk', done: false, createDate: '2019-10-24T15:51:32.222Z', finishDate: null, id: '1' },
    { text: 'Pick up Tom from airport', done: false, createDate: '2019-10-25T15:51:32.222Z', finishDate: null, id: '2' },
    { text: 'Visit party', done: false, createDate: '2019-10-26T15:51:32.222Z', finishDate: null, id: '3' },
    { text: 'Visit doctor', done: true, createDate: '2019-10-27T15:51:32.222Z', finishDate: '2019-11-27T15:51:32.222Z', id: '4' },
    { text: 'Buy meat', done: true, createDate: '2019-10-28T15:51:32.222Z', finishDate: '2019-11-28T15:51:32.222Z', id: '5' },
];

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
    return JSON.parse(localStorage.getItem(key));
};

export function ifStorageChanges(event) {
    if (event.key === 'listItems') {
        renderTasks();
    }
}


export const tasksListItems = getItem('tasks') || [];
document.addEventListener('DOMContentLoaded', () => renderTasks)

window.addEventListener('storage', ifStorageChanges);

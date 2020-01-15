import {createListRander} from './index.js';
export const tasks = [
    { text: 'Buy milk', done: false, date: new Date(), },
    { text: 'Pick up Tom from Airport', done: false, date: new Date(), },
    { text: 'Visit party', done: false, date: new Date(), },
    { text: 'Visit doctor', done: true, date: new Date(), },
    { text: 'Buy meat', done: true, date: new Date(), },
];

// const toLocalStorage (el) => {
//     for( let i = 0; i <= tasks.length; i++){
//         setItem(tasks[i]);
//     }
// }

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
        JSON.parse(localStorage.getItem(key));
};

export function ifStorageChanges (event) {
    if (event.key === 'listItems'){
        createListRander();
    }
}

window.addEventListener('storage', ifStorageChanges);
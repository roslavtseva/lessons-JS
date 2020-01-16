// const toLocalStorage (el) => {
//     for( let i = 0; i <= tasks.length; i++){
//         setItem(tasks[i]);
//     }
// }

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
    return JSON.parse(localStorage.getItem(key));
};

export function ifStorageChanges(event) {
    if (event.key === 'listItems') {
        createListRander();
    }
}

let emptyAr = [];
export const tasks = getItem('tasks') || emptyAr;

window.addEventListener('storage', ifStorageChanges);
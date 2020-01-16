const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }

    const taskData = tasks.find(task => task.id === e.target.dataset.id);
    //TODO USE LOCAL STORAGE
    const done = e.target.checked;
    Object.assign(taskData, { done, finishDate: done ? new Date().toISOString() : null  });
    renderTasks(tasks);
};

const todoListElem = document.querySelector('.list');

todoListElem.addEventListener('click', onToggleTask);
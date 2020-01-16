const createBtnElem = document.querySelector('.create-task-btn');

const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';

    //TODO USE LOCAL STORAGE
    tasks.push({
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString()
    });

    renderTasks(tasks);
};

createBtnElem.addEventListener('click', onCreateTask);
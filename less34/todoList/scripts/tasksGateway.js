const baseUrl = 'https://crudcrud.com/api/1f89fedbd8c44dd199c4cc0218a0024c/tasks';

const mapTasks = tasks => 
    tasks.map(({ _id, ...rest}) => ({...rest, id: _id}));

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks)
        )};

export const createTask = taskData => {
    return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(taskData)
    })
}
export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(updatedTaskData)
    })
}
function deleteTask(taskId) {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
};
export{ deleteTask };
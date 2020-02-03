let baseUrl = 'https://crudcrud.com/api/5fc8d46ebf384698a2144e2cab601056/users'


const form = document.forms[0];

const submitButton = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const inputs = [...document.querySelectorAll('input')];

form.addEventListener('submit', submitData);
form.addEventListener('input', validateFields);

function validateFields() {
    if (form.reportValidity()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
    errorText.textContent = '';
};

function submitData(event) {
    event.preventDefault();
    const newUser = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {});

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(newUser),
    })
        .then(response => response.json())
        .then(data => {
            inputs.map(elem => elem.value = '');
            submitButton.disabled = true;
            alert(JSON.stringify(data))
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        });
};
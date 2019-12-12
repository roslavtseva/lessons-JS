const divElem = document.querySelector('.rect_div'); //призначаємо змінну до селектора
const pElem = document.querySelector('.rect_p'); 
const spanElem = document.querySelector('.rect_span'); 
const clearButton = document.querySelector('.clear-btn')
const removeHandl = document.querySelector('.remove-handlers-btn');
const attachHandl = document.querySelector('.attach-handlers-btn');
const eventsListElem = document.querySelector('.events-list');



const logTarget = (text, color) => { //ств функцію
    const eventListElem = document.querySelector('.events-list'); //призн змінну до селектора

    eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;"> ${text} </span>`; //кожного разу додаємо елемент 
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');

const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreyP = logTarget.bind(null, 'P', 'grey');

const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const add = () => {
    divElem.addEventListener('click', logGreyDiv, true); //викликаємо змінну елем яка після кліку в змінну логТаргет додає зелений дів
divElem.addEventListener('click', logGreenDiv); //викликаємо змінну елем яка після кліку в змінну логТаргет додає зелений дів

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP); //{capture: true} / захват

pElem.addEventListener('click', logGreySpan, true);
pElem.addEventListener('click', logGreenSpan);
};
add();

attachHandl.addEventListener('click', add);


const remove = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);
    
    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);
    
    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
};

removeHandl.addEventListener('click', remove);

const clear = (elem) => {
    elem.innerHTML = '';
};

const clearEl = clear.bind(null, eventsListElem);
clearButton.addEventListener('click', clearEl);
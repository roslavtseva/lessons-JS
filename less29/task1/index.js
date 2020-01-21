export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Me Photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    
    const onImageLoaded = () => {
        const {width, height} = imgElem;
        callback(null, {width, height});
    }
    
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => callback('Image load failed'));


};

//const imgSrc = 'http://tlap.com/wp-content/uploads/2015/02/Foreks-sovetnik-kalmar-skachat-besplatno-i-bez-registratsii.jpg';
const imgSrc = 'https://server.com/image.png';

const onImageLoaded = (error, data) => {

    if (error){
        console.log('error');
        return;
    };

    const {width, height} = data;
    const sizeElem = document.querySelector('.img-size');
    sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);


















/**Напишите функцию, которая добавит картинку на страницу и вернет размеры этой картинки

Основные требования:
Файл должен экспортировать функцию под именем addImage
Сигнатура: addImage('https://server.com/image.png', callback), где первый аргумент - адрес изображения, callback - функция обратного вызова
addImage должна добавить в элемент с классом page картинку с указанным адресом
Когда картинка подгрузиться, то ф-ция callback должна быть вызвана с аргументами (null, { width: 200, height: 100 }), где 200 х 100 - размеры загруженной картинки
Если произошла ошибка при загрузке картинки, то , то ф-ция callback должна быть вызвана с текстом 'Image load failed' в первом аргументе */
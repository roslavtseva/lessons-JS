



export const addImage = imgSrc => {
    const p = new Promise ((resolveCb, rejectCb) => {

        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
    
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);
    
        
        const onImageLoaded = () => {
            const {width, height} = imgElem;
            resolveCb({width, height});
        }
        
        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
    })
    return p;
}



const imgSrc = 'http://tlap.com/wp-content/uloads/2015/02/Foreks-sovetnik-kalmar-skachat-besplatno-i-bez-registratsii.jpg';

const resultPromise = addImage(imgSrc);

resultPromise.catch(error => console.log(error));

console.log(resultPromise);



















/**Напишите функцию, которая добавит картинку на страницу и вернет размеры этой картинки

Основные требования:
Файл должен экспортировать функцию под именем addImage
Сигнатура: addImage('https://server.com/image.png', callback), где первый аргумент - адрес изображения, callback - функция обратного вызова
addImage должна добавить в элемент с классом page картинку с указанным адресом
Когда картинка подгрузиться, то ф-ция callback должна быть вызвана с аргументами (null, { width: 200, height: 100 }), где 200 х 100 - размеры загруженной картинки
Если произошла ошибка при загрузке картинки, то , то ф-ция callback должна быть вызвана с текстом 'Image load failed' в первом аргументе


Напишите функцию, которая добавит картинку на страницу и вернет размеры этой картинки

Основные требования:
Файл должен экспортировать функцию под именем addImage
Сигнатура: addImage('https://server.com/image.png'), где единственный аргумент - адрес изображения
addImage должна добавить в элемент с классом page картинку с указанным адресом
Ф-ция addImage должна вернуть Promise, который зарезолвит размеры картинки (объект { width: 200, height: 100 }, где 200 х 100 - размеры загруженной картинки) в случае успеха. Или зареджектит строку 'Image load failed', если произойдет ошибка при загрузке картинки*/
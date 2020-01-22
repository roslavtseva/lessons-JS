import { addImage } from './addImage.js';


function addImageV2 (imgSrc) {
    return new Promise((resolve, reject) => {
        addImage(imgSrc, (error, data) => {
        if(error){
            reject(error);
            return
        } else {
            resolve(data);
        }
    });

    });
};




addImageV2('http://tlap.com/wp-content/uploads/2015/02/Foreks-sovetnik-kalmar-skachat-besplatno-i-bez-registratsii.jpg')
.then(data => console.log(data))
.catch(error => console.log(error));

// const resultPromise = addImage(imgSrc);
// resultPromise.catch(error => console.log(error));
// console.log(resultPromise);




/** файла index.js экспортируйте функцию под именем addImageV2
addImageV2 должна промисифицировать ф-цию addImage. Это означает, что нужно создать обертку над addImage, которая будет возвращать промис и использовать в своей реализации ф-цию addImage, которая работает с коллбэками.
Сигнатура: addImageV2('https://server.com/image.png'), где единственный аргумент - адрес изображения
addImageV2 должна добавить в элемент с классом page картинку с указанным адресом
Ф-ция addImageV2 должна вернуть Promise, который зарезолвит размеры картинки (объект { width: 200, height: 100 }, где 200 х 100 - размеры загруженной картинки) в случае успеха. Или отклонит промис со строкой 'Image load failed', если произойдет ошибка при загрузке картинки
Пример работы
            addImageV2('https://server.com/image.png')
                .then(data => console.log(data)); // { width: 200, height: 100 }
                .catch(error => console.log(error)); // 'Image load failed' */




export const addImage = imgSrc => {
    return new Promise ((resolveCb, rejectCb) => {

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
        imgElem.addEventListener('error', () => rejectCb('Image load failed'));
    })

}
























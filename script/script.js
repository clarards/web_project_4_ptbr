const edit = document.querySelector('.edit__button');
const userInfo = document.querySelector('.popup__container');

const closeButton = document.querySelector('.input__close__icon');

edit.addEventListener('click', () => {
    userInfo.setAttribute ('style' , 'display:block')
});

closeButton.addEventListener('click', () => {
    userInfo.setAttribute ('style', 'display:none');
});

function saveProfile() {
    let name = document.querySelector('.#input-name').value;
    let description = document.querySelector('.#input-description').value;

    
    
    
}
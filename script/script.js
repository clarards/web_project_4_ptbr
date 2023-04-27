const edit = document.querySelector('.edit__button');
const userInfo = document.querySelector('.popup__container');
const closeButton = document.querySelector('.input__close__button');
const saveButton = document.querySelector('.input__save__button');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

edit.addEventListener('click', () => {
    userInfo.setAttribute ('style' , 'display:block')
});

closeButton.addEventListener('click', () => {
    userInfo.setAttribute ('style', 'display:none');
});


function handleProfileFormSubmit(evt){
    evt.preventDefault();

    userName.textContent = inputName.value;
    userAbout.textContent = inputAbout.value;

}

saveButton.addEventListener('click', handleProfileFormSubmit);

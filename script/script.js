const edit = document.querySelector('.edit__button');
const userInfo = document.querySelector('.popup__container');
const closeButton = document.querySelector('.input__close__button');
const saveButton = document.querySelector('.input__save__button');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

function openPopup(){
    userInfo.classList.add('popup__container-active');
}

function closePopup(){
    userInfo.classList.remove('popup__container-active')
}

edit.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function saveUserInfo(evt){
    evt.preventDefault();

    userName.textContent = inputName.value;
    userAbout.textContent = inputAbout.value;

    closePopup();

}

saveButton.addEventListener('click', saveUserInfo);




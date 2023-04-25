const edit = document.querySelector('.edit__button');
const userInfo = document.querySelector('.popup__container');

const closeButton = document.querySelector('.input__close__icon');
const saveButton = document.querySelector('.input__save__button');

const profileName = document.querySelector('#input-name');
const profileAbout = document.querySelector('#input-about');
const inputName = document.querySelector('.input__name_text');
const inputAbout = document.querySelector('.input__about_text');

edit.addEventListener('click', () => {
    userInfo.setAttribute ('style' , 'display:block')
});

closeButton.addEventListener('click', () => {
    userInfo.setAttribute ('style', 'display:none');
});

saveButton.addEventListener('click', saveInputValues)
function saveInputValues(event) {
    event.preventDefault();
    if (inputName.value != ' '){
    profileName.textContent = inputName.value
    inputName.value = ''
    }
    if (inputAbout.value != ' '){
    profileAbout.textContent = inputAbout.value
    inputAbout.value = ''
    }

    closeButton();
}
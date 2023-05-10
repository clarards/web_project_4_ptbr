const edit = document.querySelector('.edit__button');
const userInfo = document.querySelector('.popup__container');
const closeButton = document.querySelector('.input__close__button');
const saveButton = document.querySelector('.input__save__button');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const add = document.querySelector('.add__button')
const likeButton = document.querySelectorAll(".like__button");

const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];




function openPopup(){
    userInfo.classList.add('popup__container-active');

}

function closePopup(){
    userInfo.classList.remove('popup__container-active');
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


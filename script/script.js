//buttons
const editButton = document.querySelector('.edit__button');
const closeButton = document.querySelector('.input__close-button');
const closeButtonCard = document.querySelector('.input__close-button-card')
const addButton = document.querySelector('.add__button');
const deleteCardButton = document.querySelector('.trash__icon');
const saveButton = document.querySelector('.input__save-button');
const createButton = document.querySelector('.input__save__button-card')

//popups
const userInfo = document.querySelector('.popup__container');
const addCardPopup = document.querySelector('.popup__container-card');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const inputTitle = document.querySelector('#title-name');
const inputLink = document.querySelector('#url-link');

//cards
const cardTemplate = document.querySelector('#cards').content;
const initialCardsContainer = document.querySelector('.initial-cards');
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

initialCards.forEach(function(item) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__place');
  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.like__button');


  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  initialCardsContainer.appendChild(card);

});

initialCardsContainer.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('trash__icon')) {
    const card = evt.target.closest('.card');
    if (card) {
      card.remove();
    }
  }
});

initialCardsContainer.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('like__button')) {
    const likeButton = evt.target;
    likeButton.classList.toggle('like__button-active');
  }
});


function openPopup(){
    userInfo.classList.add('popup__container-active');
}
function closePopup(){
    userInfo.classList.remove('popup__container-active');
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function saveUserInfo(evt){
    evt.preventDefault();

    userName.textContent = inputName.value;
    userAbout.textContent = inputAbout.value;

    closePopup();
}
saveButton.addEventListener('click', saveUserInfo);


function openCardPopup() {
  addCardPopup.classList.add('popup__container-card-active');
}
function closeCardPopup() {
  addCardPopup.classList.remove('popup__container-card-active');
}
addButton.addEventListener('click', openCardPopup);
closeButtonCard.addEventListener('click', closeCardPopup);

function addNewCard (evt){


  closeCardPopup();
}
createButton.addEventListener('click', addNewCard);

function openImagePopup() {
  const imageContainer = document.querySelector('.popup__container-photo').content;
  const imageOpen = imageContainer.querySelector('.popup__photo-open').cloneNode(true);
  const imageOnScreen = document.querySelector('.opened__image-popup');
  const popupImageBig = imageOpen.querySelector('.popup__photo-big');
  const imageTitle = imageOpen.querySelector('.popup__photo-title');

  imageOnScreen.classList.add('popup__container-photo-opened');
  imageOnScreen.appendChild(imageOpen);

}
cardImage.addEventListener('click', openImagePopup);
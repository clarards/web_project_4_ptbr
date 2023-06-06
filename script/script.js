// Buttons
const editButton = document.querySelector('.edit-button');
const closeButton = document.querySelector('.close-button');
const closeButtonCard = document.querySelector('.close-button-card');
const addButton = document.querySelector('.add-button');
const deleteCardButton = document.querySelector('.trash__icon');
const saveButton = document.querySelector('.save-button');
const createButton = document.querySelector('.save-button-card');
const popupOverlay = document.querySelector('.popup__overlay');

// Popups
const popupUserInfo = document.querySelector('.info');
const userInfo = document.querySelector('.popup__container');
const addCardPopup = document.querySelector('.popup__container-card');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const inputTitle = document.querySelector('.input-name-title');
const inputLink = document.querySelector('.input-text-link');

// Cards
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
    name: "Parque Nacional da Vanoise",
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

function openPopup() {
  userInfo.classList.add('popup__container-active');
}

function closePopup() {
  userInfo.classList.remove('popup__container-active');
}

function closePopupThroughOverlay() {
  userInfo.classList.remove('popup__container-card-active');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopupThroughOverlay);


function saveUserInfo(evt) {
  evt.preventDefault();

  const userInfoForm = document.forms[0];
  if (!userInfoForm.checkValidity()) {
    userInfoForm.reportValidity();
    return;
  }

  const newName = inputName.value;
  const newAbout = inputAbout.value;

  userName.textContent = newName;
  userAbout.textContent = newAbout;

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


  // Cr

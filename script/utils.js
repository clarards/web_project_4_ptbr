const popupUserInfo = document.querySelector('.info');
const userInfo = document.querySelector('.popup__container');
const addCardPopup = document.querySelector('.popup__container-card');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const inputTitle = document.querySelector('.input-name-title');
const inputLink = document.querySelector('.input-text-link');

const editButton = document.querySelector('.edit-button');
const closeButton = document.querySelector('.close-button');
const closeButtonCard = document.querySelector('.close-button-card');
const addButton = document.querySelector('.add-button');
const deleteCardButton = document.querySelector('.trash__icon');
const saveButton = document.querySelector('.save-button');
const createButton = document.querySelector('.save-button-card');
const popupOverlay = document.querySelector('.popup__overlay');

function openPopup() {
    userInfo.classList.add('popup__container-active');
  }
  
  function closePopup() {
    userInfo.classList.remove('popup__container-active');
  }
  
  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      closePopup(); 
    }
  });
  
  function closePopupThroughOverlay() {
    userInfo.classList.remove('popup__container-card-active');
  }
  
  editButton.addEventListener('click', openPopup);
  closeButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopupThroughOverlay);
  
  
  saveButton.addEventListener('click', function(evt) {
    evt.preventDefault(); 
  
    const newName = inputName.value;
    const newAbout = inputAbout.value;
  
    userName.textContent = newName;
    userAbout.textContent = newAbout;
  
  closePopup()
  });
  
  function openCardPopup() {
    addCardPopup.classList.add('popup__container-card-active');
  }
  
  function closeCardPopup() {
    addCardPopup.classList.remove('popup__container-card-active');
    createButton.setAttribute("disabled", true);
    createButton.classList.add("save-button-disabled");
  }
  
  
  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      closeCardPopup(); 
    }
  });
  
  
  function createCard(title, url) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = card.querySelector('.card__place');
    const cardImage = card.querySelector('.card__image');
    const deleteButton = card.querySelector('.trash__icon');
    const likeButton = card.querySelector('.like__button');
  
    cardTitle.textContent = title;
    cardImage.src = url;
    cardImage.alt = "Imagem do local";
    deleteButton.addEventListener('click', function() {
      card.remove();
    });
  
    likeButton.addEventListener('click', function() {
      likeButton.classList.toggle('like__button-active');
    });
  
    initialCardsContainer.prepend(card);
  }
  
  createButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    const title = inputTitle.value;
    const url = inputLink.value;
  
    createCard(title, url);
  
    inputTitle.value = "";
    inputLink.value = "";
  
    closeCardPopup();
  
  });
  
  
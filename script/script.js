//buttons
const editButton = document.querySelector('.edit-button');
const closeButton = document.querySelector('.close-button');
const closeButtonCard = document.querySelector('.close-button-card')
const addButton = document.querySelector('.add-button');
const deleteCardButton = document.querySelector('.trash__icon');
const saveButton = document.querySelector('.save-button');
const createButton = document.querySelector('.save-button-card');
const popupOverlay = document.querySelector('.popup__overlay');

//popups
const popupUserInfo = document.querySelector('.info')
const userInfo = document.querySelector('.popup__container');
const addCardPopup = document.querySelector('.popup__container-card');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const inputTitle = document.querySelector('.input-name-title');
const inputLink = document.querySelector('.input-text-link');
const linkError = document.getElementById('link-error');

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
function closePopupThroughOverlay(){
  userInfo.classList.remove('popup__container-active');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopupThroughOverlay);


function saveUserInfo(evt) {
  evt.preventDefault();

  if (!validateFields()) {
    return;
  }

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

function addNewCard(evt) {
  evt.preventDefault();

  const title = inputTitle.value;
  const url = inputLink.value;

  const newCard = {name: title, link: url
  };

  initialCards.push(newCard);

  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__place');
  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.like__button');
  const deleteButton = card.querySelector('.trash__icon');

  cardTitle.textContent = newCard.name;
  cardImage.src = newCard.link;
  cardImage.alt = newCard.name;

  deleteButton.addEventListener('click', function() {
    card.remove();
  });

  likeButton.addEventListener('click', function(evt) {
    likeButton.classList.toggle('like__button-active');
  });

  initialCardsContainer.prepend(card);

  closeCardPopup();
}
createButton.addEventListener('click', addNewCard);

const closeButtonImg = document.querySelector('.close-button-img');

function openImage() {
  const imageSrc = this.parentElement.querySelector('.card__image').src;
  const title = this.parentElement.querySelector('.card__place').textContent;

  const expandedImage = document.querySelector('.expanded-image');
  const imageTitle = document.querySelector('.card-place-expanded');

  expandedImage.src = imageSrc;
  imageTitle.textContent = title;

  const imageModal = document.getElementById('imageModal');
  imageModal.style.display = 'block';
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const imageElement = card.querySelector('.card__image');
  imageElement.addEventListener('click', openImage);
});

closeButtonImg.addEventListener('click', () => {
  const imageModal = document.getElementById('imageModal');
  imageModal.style.display = 'none';
});

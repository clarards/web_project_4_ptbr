const editButton = document.querySelector('.edit-button');
const closeButton = document.querySelector('.close-button');
const closeButtonCard = document.querySelector('.close-button-card');
const addButton = document.querySelector('.add-button');
const deleteCardButton = document.querySelector('.trash__icon');
const saveButton = document.querySelector('.save-button');
const createButton = document.querySelector('.save-button-card');
const popupOverlay = document.querySelector('.popup__overlay');

const popupUserInfo = document.querySelector('.info');
const userInfo = document.querySelector('.popup__container');
const addCardPopup = document.querySelector('.popup__container-card');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const inputTitle = document.querySelector('.input-name-title');
const inputLink = document.querySelector('.input-text-link');

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

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  cardImage.addEventListener('click', () => {
    openModal(item);
  });

  initialCardsContainer.appendChild(card);
});

const openModal = (item) => {
  const modal = document.getElementById('imageModal');
  const expandedImage = modal.querySelector('.expanded-image');
  const cardPlaceExpanded = modal.querySelector('.card-place-expanded');

  expandedImage.src = item.link;
  expandedImage.alt = item.name;
  cardPlaceExpanded.textContent = item.name;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close-button-img');
  closeButton.addEventListener('click', () => {
    closeModal();
  });
};

const closeModal = () => {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
};

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closeModal(); 
  }
});

const trashIcons = initialCardsContainer.querySelectorAll('.trash__icon');

trashIcons.forEach(function(trashIcon) {
  trashIcon.addEventListener('click', function(evt) {
    const card = evt.target.closest('.card');
    if (card) {
      card.remove();
    }
  });
});

const likeButtons = initialCardsContainer.querySelectorAll('.like__button');

likeButtons.forEach(function(likeButton) {
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('like__button-active');
  });
});

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

addButton.addEventListener('click', openCardPopup);
closeButtonCard.addEventListener('click', closeCardPopup);

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

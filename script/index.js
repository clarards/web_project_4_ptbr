import { FormValidator } from "./FormValidator.js";
const userForm = document.querySelector("form[name='userForm']");
const userInputs = userForm.querySelectorAll(".popup__input");
const userSubmitButton = userForm.querySelector(".save-button-user");

const cardForm = document.querySelector("form[name='cardForm']");
const cardInputs = cardForm.querySelectorAll(".popup__input");
const cardSubmitButton = cardForm.querySelector(".save-button-card");

new FormValidator(
  userForm,
  userInputs,
  userSubmitButton,
  "save-button-disabled",
  "input-error"
);

new FormValidator(
  cardForm,
  cardInputs,
  cardSubmitButton,
  "save-button-disabled",
  "input-error"
);



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


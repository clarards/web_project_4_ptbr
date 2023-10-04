class Card {
    constructor(text, imageUrl, templateSelector) {
      this._text = text;
      this._imageUrl = imageUrl;
      this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
      const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card');
      const cardElement = cardTemplate.cloneNode(true);
      return cardElement;
    }
  
    _setEventListeners(cardElement) {
      cardElement.querySelector('.trash__icon').addEventListener('click', () => this._handleDelete());
      cardElement.querySelector('.like__button').addEventListener('click', () => this._handleLike());
    }
  
    _handleLike() {
        const likeButtons = initialCardsContainer.querySelectorAll('.like__button');

        likeButtons.forEach(function(likeButton) {
          likeButton.addEventListener('click', function() {
            likeButton.classList.toggle('like__button-active');
          });
        });    }
  
    _handleDelete() {
        const trashIcons = initialCardsContainer.querySelectorAll('.trash__icon');

        trashIcons.forEach(function(trashIcon) {
          trashIcon.addEventListener('click', function(evt) {
            const card = evt.target.closest('.card');
            if (card) {
              card.remove();
            }
          });
        });    }
  
    generateCard() {
      const cardElement = this._getTemplate();
  
      cardElement.querySelector('.card__image').src = this._imageUrl;
      cardElement.querySelector('.card__place').textContent = this._text;
  
      this._setEventListeners(cardElement);
  
      return cardElement;
    }
  }
  

  
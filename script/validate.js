const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListener(
      formElement,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    );
  });
};

function hideErrorMessage(inputElement) {
  inputElement.classList.remove('error-message'); 
}

function showErrorMessage(inputElement) {
  inputElement.classList.add('error-message'); 
};

const inputName = document.getElementById('inputName');

inputName.addEventListener('input', function(evt) {
  const inputElement = evt.target;
  const errorMessage = document.querySelector('.error-message');

  if (inputElement.validity.valid) {
    hideErrorMessage(inputElement);
  } else {
    showErrorMessage(inputElement);
  }
});

/*
const showErrorMessage = (inputElement, formElement) => {
  const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessage.textContent = inputElement.validationMessage;
  errorMessage.classList.add("show");
  inputElement.classList.add("error");
};

const hideErrorMessage = (inputElement, formElement) => {
  const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove("show");
  inputElement.classList.remove("error"); 
};  */

const CheckInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showErrorMessage(inputElement, formElement);
  } else {
    hideErrorMessage(inputElement, formElement);
  }
};

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const saveButton = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      CheckInputValidity(formElement, inputElement);
      updateButtonState(inputList, saveButton);
    });
  });
};


const updateButtonState = (inputList, buttonElement) => {
  if (ifInputInvalid(inputList)) {
    buttonElement.classList.add("save-button-disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("save-button-disabled");
    buttonElement.disabled = false;
  }
};

const ifInputInvalid = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


enableValidation({
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".save-button",
  inactiveButtonClass: "save-button-disabled",
  inputErrorClass:"input-error" ,
  errorClass: "error-message"
});

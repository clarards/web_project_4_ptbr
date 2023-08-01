const enableValidation = ({
  form,
  inputs,
  submitButton,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  const validateField = (input) => {
    const errorMessage = input.nextElementSibling;

    input.addEventListener("input", function () {
      if (!input.validity.valid) {
        input.classList.add(inputErrorClass);
        errorMessage.textContent = input.validationMessage;
        disableButtons();
      } else {
        input.classList.remove(inputErrorClass);
        errorMessage.textContent = "";
        if (isValidForm()) {
          enableButtons();
        } else {
          disableButtons();
        }
      }
    });
  };

  const disableButtons = () => {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add(inactiveButtonClass);
  };

  const enableButtons = () => {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove(inactiveButtonClass);
  };

  const isValidForm = () => {
    return form.checkValidity();
  };

  disableButtons();

  inputs.forEach((input) => {
    validateField(input);
    input.addEventListener("input", function () {
      if (isValidForm()) {
        enableButtons();
      } else {
        disableButtons();
      }
    });
  });
};

const form = document.querySelector(".popup__container");
const inputs = form.querySelectorAll(".popup__input");
const submitButton = document.querySelector(".save-button");

enableValidation({
  form,
  inputs,
  submitButton,
  inactiveButtonClass: "save-button-disabled",
  inputErrorClass: "input-error",
  errorClass: "error-message-visible",
});




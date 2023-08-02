const enableValidation = ({
  form,
  inputs,
  submitButton,
  inactiveButtonClass,
  inputErrorClass,
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

const userForm = document.querySelector("form[name='userForm']");
const userInputs = userForm.querySelectorAll(".popup__input");
const userSubmitButton = userForm.querySelector(".save-button-user");

enableValidation({
  form: userForm,
  inputs: userInputs,
  submitButton: userSubmitButton,
  inactiveButtonClass: "save-button-disabled",
  inputErrorClass: "input-error",
});

const cardForm = document.querySelector("form[name='cardForm']");
const cardInputs = cardForm.querySelectorAll(".popup__input");
const cardSubmitButton = cardForm.querySelector(".save-button-card");

enableValidation({
  form: cardForm,
  inputs: cardInputs,
  submitButton: cardSubmitButton,
  inactiveButtonClass: "save-button-disabled",
  inputErrorClass: "input-error",
});
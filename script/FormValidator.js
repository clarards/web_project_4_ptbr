class FormValidator {
  constructor(form, inputs, submitButton, inactiveButtonClass, inputErrorClass) {
    this.form = form;
    this.inputs = inputs;
    this.submitButton = submitButton;
    this.inactiveButtonClass = inactiveButtonClass;
    this.inputErrorClass = inputErrorClass;
    this.enableValidation();
  }

  validateField(input) {
    const errorMessage = input.nextElementSibling;

    input.addEventListener("input", () => {
      if (!input.validity.valid) {
        input.classList.add(this.inputErrorClass);
        errorMessage.textContent = input.validationMessage;
        this.disableButtons();
      } else {
        input.classList.remove(this.inputErrorClass);
        errorMessage.textContent = "";
        if (this.isValidForm()) {
          this.enableButtons();
        } else {
          this.disableButtons();
        }
      }
    });
  }

  disableButtons() {
    this.submitButton.setAttribute("disabled", true);
    this.submitButton.classList.add(this.inactiveButtonClass);
  }

  enableButtons() {
    this.submitButton.removeAttribute("disabled");
    this.submitButton.classList.remove(this.inactiveButtonClass);
  }

  isValidForm() {
    return this.form.checkValidity();
  }

  enableValidation() {
    this.disableButtons();

    this.inputs.forEach((input) => {
      this.validateField(input);
      input.addEventListener("input", () => {
        if (this.isValidForm()) {
          this.enableButtons();
        } else {
          this.disableButtons();
        }
      });
    });
  }
}

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

export default FormValidator;
const enableValidation = ({
  inputError,
  saveButtonUser,
  saveButtonCard,
  saveButtonUserDisabled,
  saveButtonCardDisabled,
}) => {
  const inputFieldsValidation = (input) => {
    input.addEventListener("input", function (evt) {
      const element = evt.target;
      const ErrorMessage = document.querySelector(`[data-error-message="${element.name}"]`);
      if (!element.validity.valid) {
        input.classList.add(inputError);
        if (element.type === 'url' && element.value.trim() != '') {
          ErrorMessage.textContent = 'Insira um endereço web.';
        } else {
          ErrorMessage.textContent = element.validationMessage;
        }
        disableButtons();
      } else {
        input.classList.remove(inputError);
        ErrorMessage.textContent = "";
        if (isValidForm()) {
          enableButtons();
        }
      }
    });
  };

  const disableButtons = () => {
    const saveButtonEdit = document.querySelector(saveButtonUser);
    const saveButtonInclude = document.querySelector(saveButtonCard);
    saveButtonEdit.setAttribute("disabled", true);
    saveButtonInclude.setAttribute("disabled", true);
    saveButtonEdit.classList.add(saveButtonUserDisabled);
    saveButtonInclude.classList.add(saveButtonCardDisabled);
  };

  const enableButtons = () => {
    const saveButtonEdit = document.querySelector(saveButtonUser);
    const saveButtonInclude = document.querySelector(saveButtonCard);
    saveButtonEdit.removeAttribute("disabled");
    saveButtonInclude.removeAttribute("disabled");
    saveButtonEdit.classList.remove(saveButtonUserDisabled);
    saveButtonInclude.classList.remove(saveButtonCardDisabled);
  };

  const allForms = Array.from(document.forms);
  for (const form of allForms) {
    const inputs = Array.from(form.elements);
    const isValidForm = () => inputs.every((input) => input.validity.valid);

    inputs.forEach((element) => {
      inputFieldsValidation(element);
      element.addEventListener("input", function (evt) {
        if (isValidForm()) {
          enableButtons();
        } else {
          disableButtons();
        }
      });
    });
  }
};

enableValidation({
  inputError: "input-error",
  saveButtonUser: ".save-button",
  saveButtonCard: ".save-button-card",
  saveButtonUserDisabled: "save-button-disabled",
  saveButtonCardDisabled: "save-button-card-disabled",
});
const enableValidation = () => {
  const validateField = (input) => {
    const errorMessage = input.nextElementSibling;
    
    input.addEventListener("input", function (evt) {
      if (!input.validity.valid) {
        input.classList.add('input-error');
        errorMessage.textContent = input.validationMessage;
        disableButtons();
      } else {
        input.classList.remove('input-error');
        errorMessage.textContent = "";
        if (isValidForm()) {
          enableButtons();
        }
      }
    });
  };

  const disableButtons = () => {
    const saveButton = document.querySelector('.save-button');
    const saveButtonInclude = document.querySelector('.save-button-card');
    saveButton.setAttribute("disabled", true);
    saveButtonInclude.setAttribute("disabled", true);
    saveButton.classList.add('save-button-disabled');
    saveButtonInclude.classList.add('save-button-card-disabled');
  };

  const enableButtons = () => {
    const saveButton = document.querySelector('.save-button');
    const saveButtonInclude = document.querySelector('.save-button-card');
    saveButton.removeAttribute("disabled");
    saveButtonInclude.removeAttribute("disabled");
    saveButton.classList.remove('save-button-disabled');
    saveButtonInclude.classList.remove('save-button-card-disabled');
  };

  const isValidForm = () => {
    const form = document.querySelector('form[name="form"]');
    return form.checkValidity();
  };

  const forms = document.querySelectorAll('form[name="form"]');
  forms.forEach((form) => {
    const inputs = form.querySelectorAll('.required');
    inputs.forEach((input) => {
      validateField(input);
      input.addEventListener("input", function (evt) {
        if (isValidForm()) {
          enableButtons();
        } else {
          disableButtons();
        }
      });
    });
  });
};

enableValidation();

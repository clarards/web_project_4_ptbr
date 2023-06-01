const enableValidation = () => {
  const showErrorMessage = (input) => {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = input.validationMessage;
    errorMessage.style.display = 'block';
  };

  const hideErrorMessage = (input) => {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  };

  const checkValidity = (input) => {
    if (!input.validity.valid) {
      showErrorMessage(input);
      return false;
    } else {
      hideErrorMessage(input);
      return true;
    }
  };

  const validateFields = (form) => {
    let isValid = true;
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      if (!checkValidity(input)) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleInput = (evt) => {
    const input = evt.target;
    checkValidity(input);

    const form = input.closest('form');

    if (validateFields(form)) {
      saveButton.removeAttribute('disabled');
      createButton.removeAttribute('disabled');
      saveButton.classList.remove('save-button-disabled');
      createButton.classList.remove('save-button-card-disabled');
    } else {
      saveButton.setAttribute('disabled', true);
      createButton.setAttribute('disabled', true);
      saveButton.classList.add('save-button-disabled');
      createButton.classList.add('save-button-card-disabled');
    }
  };

  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('input', handleInput);
    });
  });
};

enableValidation();

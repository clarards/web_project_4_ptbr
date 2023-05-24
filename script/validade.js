// validação do EDITAR PERFIL
function validateFields() {
    const name = inputName.value;
    const description = inputAbout.value;
  
    let nameError = '';
    let descriptionError = '';
  
    if (name === '') {
      nameError = 'Por favor, preencha seu nome.';
    } else if (name.length < 2 || name.length > 40) {
      nameError = 'O nome deve ter entre 2 e 40 caracteres.';
    }
  
    if (description === '') {
      descriptionError = 'Por favor, preencha a descrição.';
    } else if (description.length < 2 || description.length > 200) {
      descriptionError = 'A descrição deve ter entre 2 e 200 caracteres.';
    }
  
    const nameErrorElement = document.getElementById('name-error');
    const descriptionErrorElement = document.getElementById('description-error');
  
    nameErrorElement.textContent = nameError;
    descriptionErrorElement.textContent = descriptionError;
  
    nameErrorElement.style.display = nameError ? 'block' : 'none';
    descriptionErrorElement.style.display = descriptionError ? 'block' : 'none';
  
    return nameError === '' && descriptionError === '';
  }
  
  function validateNameInput() {
    validateFields();
  }
  
  function validateDescriptionInput() {
    validateFields();
  }
  
  inputName.addEventListener('input', validateNameInput);
  inputAbout.addEventListener('input', validateDescriptionInput);


  //validação do CRIAR LOCAL

  

  //VALIDAÇÃO DO BOTÃO DE SALVAR

  function updateSaveButtonState() {
    const isValid = validateFields();
  
    if (isValid) {
      saveButton.classList.remove('save-button-disabled');
      saveButton.style.cursor = 'pointer';
    } else {
      saveButton.classList.add('save-button-disabled');
      saveButton.style.cursor = 'default';
    }
  }
  
  inputName.addEventListener('input', updateSaveButtonState);
  inputAbout.addEventListener('input', updateSaveButtonState);
  
  updateSaveButtonState();


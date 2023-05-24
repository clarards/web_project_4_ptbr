// validação do EDITAR PERFIL
function validateFields() {
    const name = inputName.value;
    const description = inputAbout.value;
  
    let nameError = '';
    let descriptionError = '';
  
    if (name === '') {
      nameError = 'Preencha este campo.';
    } else if (name.length < 2 || name.length > 40) {
      nameError = 'O nome deve ter entre 2 e 40 caracteres.';
    }
  
    if (description === '') {
      descriptionError = 'Preencha este campo.';
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
  
  
  // validação do CRIAR LOCAL
 
function validateCreateFields() {
    const title = inputTitle.value;
    const link = inputLink.value;
  
    let titleError = '';
    let linkError = '';
  
    if (title === '') {
      titleError = 'Preencha este campo.';
    } else if (title.length < 2 || title.length > 30) {
      titleError = 'O título deve ter entre 2 e 30 caracteres.';
    }
  
    if (link === '') {
      linkError = 'Por favor, insira um endereço web.';
    } else if (!isValidUrl(link)) {
      linkError = 'Por favor, insira um link válido.';
    }
  
    const titleErrorElement = document.getElementById('title-error');
    const linkErrorElement = document.getElementById('link-error');
  
    titleErrorElement.textContent = titleError;
    linkErrorElement.textContent = linkError;
  
    titleErrorElement.style.display = titleError ? 'block' : 'none';
    linkErrorElement.style.display = linkError ? 'block' : 'none';
  
    return titleError === '' && linkError === '';
  }
  
  function isValidUrl(url) {

    return true;
  }
  
  function handleTitleInput() {
    const isValid = validateCreateFields();
    const titleErrorElement = document.getElementById('title-error');
  
    if (isValid) {
      titleErrorElement.textContent = '';
      titleErrorElement.style.display = 'none';
    }
  }
  
  function handleLinkInput() {
    const isValid = validateCreateFields();
    const linkErrorElement = document.getElementById('link-error');
  
    if (isValid) {
      linkErrorElement.textContent = '';
      linkErrorElement.style.display = 'none';
    }
  }
  
  inputTitle.addEventListener('input', handleTitleInput);
  inputLink.addEventListener('input', handleLinkInput);
  

  // VALIDAÇÃO DO BOTÃO DE SALVAR
  
  function updateSaveButtonState() {
    const isValid = validateFields();
  
    if (isValid) {
      saveButton.classList.remove('save-button-disabled');
    } else {
      saveButton.classList.add('save-button-disabled');
    }
  }
  
  inputName.addEventListener('input', updateSaveButtonState);
  inputAbout.addEventListener('input', updateSaveButtonState);
  
  updateSaveButtonState();
  

  function updateCreateButtonState() {
    const isValid = validateCreateFields();
  
    if (isValid) {
      createButton.classList.remove('save-button-card-disabled');
    } else {
      createButton.classList.add('save-button-card-disabled');
    }
  }
  
  inputTitle.addEventListener('input', updateCreateButtonState);
  inputLink.addEventListener('input', updateCreateButtonState);
  
  updateCreateButtonState();
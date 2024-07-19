function removeModalWrapper() {
    modalWindowWrapper.remove();
  }
  
  function modalWindowLogic(alertMessage, modalWindowElements) {
    modalWindowContainer.innerHTML = null;
    alertMessageText.innerText = alertMessage;
    document.body.prepend(modalWindowWrapper);
    modalWindowWrapper.append(modalWindowContainer);
    modalWindowContainer.append(...modalWindowElements);
  }
  
  function openModalWindow() {
      const alertext = 'No todos, please type something!'
      modalWindowLogic(alertext, [ alertMessageText, agreeBtn])
  }
  
  agreeBtn.addEventListener('click', closeModalHandler)
  
  function closeModalHandler(event) {
      if (event.target.className === 'agreeBtn') {
          modalWindowWrapper.remove()
      }
  }
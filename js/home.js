//Representing the required element by JS objects
const emailInput = document.getElementById('email');
const subscribeButton = document.getElementById('subscribe');
const errorMessageElement = document.querySelector('.js-errror-message');

emailInput.addEventListener('input', () => {
  const value = emailInput.value.trim();
  localStorage.setItem("user-email", value);
  
  if(value !== "") {
    if(value.includes('@') && value.includes('.')) {
      removeErrorMessage();
    }
    subscribeButton.classList.add('active');
  }
  else {
    removeErrorMessage();
    subscribeButton.classList.remove('active');
  }
})

subscribeButton.addEventListener('click', (e) => {
  e.preventDefault();
  const value = emailInput.value.trim();

  if(value.includes('@') && value.includes('.')) {
    window.location.href = "success.html";
  } else {
    errorMessageElement.classList.add('is-active');
    errorMessageElement.innerHTML = "Valid email required";
  }
})

function removeErrorMessage() {
  errorMessageElement.classList.remove('is-active');
  errorMessageElement.innerHTML = "";
}

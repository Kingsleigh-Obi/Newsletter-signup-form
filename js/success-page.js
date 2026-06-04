const dismissMsgBtn = document.querySelector('.js-dismiss');
const email = localStorage.getItem('user-email');

document.querySelector('.js-user-email').innerHTML = email;

dismissMsgBtn.addEventListener('mouseover', () => {
  dismissMsgBtn.classList.add('active');
})

dismissMsgBtn.addEventListener('mouseleave', () => {
  dismissMsgBtn.classList.remove('active');
});
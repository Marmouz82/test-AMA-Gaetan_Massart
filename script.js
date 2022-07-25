const eye = document.querySelector('#eye');
const eyeOff = document.querySelector('#eye-off');
const passwordField = document.querySelector('#password');

eye.addEventListener('click', () => {
  eye.style.display = 'none';
  eyeOff.style.display = 'block';
  passwordField.type = 'text'
})

eyeOff.addEventListener('click', () => {
  eyeOff.style.display = 'none';
  eye.style.display = 'block';
  passwordField.type = 'password'
})


const eye2 = document.querySelector('#eye-confirm');
const eyeOff2 = document.querySelector('#eye-off-confirm');
const passwordField2 = document.querySelector('#password-confirm');

eye2.addEventListener('click', () => {
  eye2.style.display = 'none';
  eyeOff2.style.display = 'block';
  passwordField2.type = 'text'
})

eyeOff2.addEventListener('click', () => {
  eyeOff2.style.display = 'none';
  eye2.style.display = 'block';
  passwordField2.type = 'password'
})


const resetBtn = document.querySelector('button[type="reset"]')

resetBtn.addEventListener('click', () => {
  eye.style.display = 'block';
  eyeOff.style.display = 'none';
  eye2.style.display = 'block';
  eyeOff2.style.display = 'none';
})
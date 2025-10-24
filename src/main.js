import './style.css'


const saveButton = document.querySelector('.button--save');
const loadButton = document.querySelector('.button--load');

saveButton.addEventListener('click', () => {
  const text = document.querySelector('.app__textarea').value;
  localStorage.setItem('savedText', text);
});

loadButton.addEventListener('click', () => {
  const savedText = localStorage.getItem('savedText');
  if (savedText) {
    document.querySelector('.app__textarea').value = savedText;
  }
});

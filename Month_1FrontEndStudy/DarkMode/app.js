const darkButton = document.getElementById('darkButton');
const lightButton = document.getElementById('lightButton');
const body = document.body;

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
};
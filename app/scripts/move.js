const moveRight = document.getElementById('moveRight');
const moveLeft = document.getElementById('moveLeft');
const overlay = document.getElementById('overlay');
const name = document.getElementById('radioName');

moveRight.addEventListener('click', () => {
  const left = parseInt(overlay.style.left);
  if(+name.innerHTML < 91) {
    overlay.style.left = left + 27 + 'px';
    name.innerHTML= +name.innerHTML + 0.5;
  }
});

moveLeft.addEventListener('click', () => {
  const left = parseInt(overlay.style.left);
  if(+name.innerHTML > 70) {
    overlay.style.left = left - 27 + 'px';
    name.innerHTML= +name.innerHTML - 0.5;
  }
});
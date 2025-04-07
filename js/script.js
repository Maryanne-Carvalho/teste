const toggleBtn = document.getElementById('toggleMode');
const body = document.body;
const logo = document.getElementById('logo');
const toggleIcon = document.getElementById('toggleIcon');

toggleBtn.addEventListener('click', () => {
  const isDay = body.classList.contains('day');
  
  body.classList.toggle('day');
  body.classList.toggle('night');

  // Corrigido: Caminhos relativos para o GitHub Pages
  logo.src = isDay ? 'img/logo-night2.png' : 'img/logo-day.png';
  toggleIcon.src = isDay ? 'img/status.svg' : 'img/sun.svg';
});

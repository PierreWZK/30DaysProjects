// Page vitrine : palettes d'exemple générées en direct avec palette.js

// Remplit un conteneur avec des bandes de couleur
function fillStrip(container, colors) {
  if (container.children.length !== colors.length) {
    container.innerHTML = colors.map(() => '<span></span>').join('');
  }
  colors.forEach((color, i) => {
    container.children[i].style.background = hslToHex(color);
  });
}

// Palette du hero : change toute seule et passe d'un mode à l'autre
const heroPalette = document.getElementById('hero-palette');
const heroMode = document.getElementById('hero-mode');
const modeKeys = Object.keys(MODES);
let heroIndex = 0;

function updateHero() {
  const key = modeKeys[heroIndex % modeKeys.length];
  fillStrip(heroPalette, sortByHue(buildPalette(key)));
  heroMode.textContent = MODES[key].label;
  heroIndex++;
}

let heroTimer = setInterval(updateHero, 3000);
heroPalette.addEventListener('click', () => {
  clearInterval(heroTimer);
  updateHero();
  heroTimer = setInterval(updateHero, 3000);
});
updateHero();

// Cartes des modes, chacune avec un aperçu et un lien vers le générateur
const cardsEl = document.getElementById('mode-cards');

Object.entries(MODES).forEach(([key, { label, description }]) => {
  const card = document.createElement('a');
  card.className = 'mode-card';
  card.href = 'generator.html?mode=' + key;
  card.innerHTML = `
    <div class="mode-card-strip"></div>
    <h3>${label}</h3>
    <p>${description}</p>
    <span class="mode-card-link">Essayer →</span>
  `;
  fillStrip(card.querySelector('.mode-card-strip'), sortByHue(buildPalette(key)));
  cardsEl.appendChild(card);
});

// Bande de couleurs au-dessus du call to action final
fillStrip(document.getElementById('cta-band'), sortByHue(buildPalette('analogous')));

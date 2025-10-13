// --- Customer message ---
const visitMessage = document.querySelector('#visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
  const diffTime = now - parseInt(lastVisit);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 1) {
    visitMessage.textContent = 'Back so soon! Awesome!';
  } else {
    visitMessage.textContent = `You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
  }
}

localStorage.setItem('lastVisit', now);


// --- Load json data ---
async function loadDiscoverData() {
  try {
    const response = await fetch('data/discover.json');
    if (!response.ok) throw new Error('Error loading JSON file');
    const places = await response.json();
    displayPlaces(places);
  } catch (error) {
    console.error('Failed to load discover data:', error);
  }
}

function displayPlaces(places) {
  const grid = document.querySelector('.discover-grid');
  grid.innerHTML = ''; 

  places.forEach((place, index) => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure>
        <img src="${place.image}" 
             alt="${place.name}" 
             loading="lazy">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button class="learn-more">Learn More</button>
    `;

    grid.appendChild(card);
  });
}

loadDiscoverData();


// --- Effect over images ---
function enableHoverEffect() {
  const images = document.querySelectorAll('.discover-grid img');

  // Solo activar en pantallas anchas
  if (window.innerWidth >= 1025) {
    images.forEach(img => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.filter = 'brightness(1.1)';
        img.style.transition = 'all 0.3s ease-in-out';
      });
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.filter = 'brightness(1)';
      });
    });
  }
}

window.addEventListener('load', enableHoverEffect);
window.addEventListener('resize', enableHoverEffect);

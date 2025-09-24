document.addEventListener('DOMContentLoaded', () => {
  const dataUrl = 'data/members.json';   // <-- ruta correcta

  // Selectors for the cards
  const allSection   = document.querySelector('#all-members .cards');
  const goldSection  = document.querySelector('#gold-members .cards');
  const silverSection= document.querySelector('#silver-members .cards');
  const bronzeSection= document.querySelector('#bronze-members .cards');

  // Filter selector
  const filterSelect = document.getElementById('member-filter');

  // Helper functions
  function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';

    // The card displays
    card.innerHTML = `
      <img src="${member.image}" alt="Logo de ${member.name}" />
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <button onclick="window.open('${member.website}', '_blank')" class="button-website-card">
          Website
      </button>
    `;
    return card;
  }

  function populateCards(members) {
    // Clear before inserting
    [allSection, goldSection, silverSection, bronzeSection].forEach(sec => sec.innerHTML = '');

    members.forEach(member => {
      const card = createMemberCard(member);

      // Add to the "all" list
      allSection.appendChild(card.cloneNode(true));

      // Add to the corresponding level
      switch (member.membership.toLowerCase()) {
        case 'gold':
          goldSection.appendChild(card.cloneNode(true));
          break;
        case 'silver':
          silverSection.appendChild(card.cloneNode(true));
          break;
        case 'bronze':
          bronzeSection.appendChild(card.cloneNode(true));
          break;
        default:
          break;
      }
    });
  }

  function showOnly(sectionId) {
    sectionId = sectionId.toLowerCase();   // normalizer

    // Hide all sections
    document.querySelectorAll('.directory-container section')
      .forEach(sec => sec.style.display = 'none');

    if (sectionId === 'all') {
      document.getElementById('all-members').style.display = '';
    } else {
      const targetSection = document.getElementById(`${sectionId}-members`);
      if (targetSection) targetSection.style.display = '';
    }
  }


  // Load data and render
  fetch(dataUrl)
    .then(resp => resp.json())
    .then(json => {
      const members = json.members;
      populateCards(members);
      showOnly('all'); // show "all"
    })
    .catch(err => console.error('Error loading members:', err));

  // Listener for the filter
  filterSelect.addEventListener('change', () => {
    showOnly(filterSelect.value);   
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("scenario-cards");

  fetch("data/scenarios.json")
    .then(response => response.json())
    .then(data => {
      data.scenarios.forEach(scenario => {
        const card = document.createElement("div");
        card.classList.add("scenario-card");

        card.innerHTML = `
          <img src="${scenario.image}" alt="${scenario.name}" class="scenario-image">
          <div class="scenario-content">
            <h3>${scenario.name}</h3>
            <p class="quote">"${scenario.quote_en}"</p>
            <p>${scenario.description_en}</p>
            <span class="scenario-section">${scenario.section}</span>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading scenarios:", err);
      container.innerHTML = "<p>Unable to load scenarios at this time.</p>";
    });
});

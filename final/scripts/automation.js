// scripts/automation.js
fetch("data/automation.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const servicesContainer = document.querySelector("#services-container");
    const sectorsContainer = document.querySelector("#sectors");

    // ✅ Render services (without creating <section>)
    if (servicesContainer && data.services) {
      data.services.forEach((service, index) => {
        // Alternar layout
        const layoutColor = index % 2 === 0 ? "right-color" : "left-color";
        const layout = index % 2 === 0 ? "right" : "left";

        // Crear bloque principal
        const block = document.createElement("div");
        block.classList.add("service-content", layoutColor);

        const blockcontent = document.createElement("div");
        blockcontent.classList.add("service-block", layout);
        block.appendChild(blockcontent);

        blockcontent.innerHTML = `
          <div class="service-text">
            <h2>${service.title}</h2>
            <ul>
              ${service.details.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="service-image">
            <img src="images/${service.image}" alt="${service.alt}">
          </div>
        `;

        servicesContainer.appendChild(block);
      });
    }

    // ✅ Render sectors (only if container exists)
    if (sectorsContainer && data.applicationSectors) {
      const { title, sectors } = data.applicationSectors;
      sectorsContainer.innerHTML = `
        <h2>${title}</h2>
        <ul class="sector-list">
          ${sectors.map(sector => `<li>${sector}</li>`).join('')}
        </ul>
      `;
    }
  })
  .catch(error => {
    console.error("Error loading automation.json:", error);
  });

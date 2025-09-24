
document.addEventListener("DOMContentLoaded", () => {
  const dataUrl = "data/members.json";
  const spotlightContainer = document.getElementById("spotlightContainer");

  function createMemberCard(member) {
    const card = document.createElement("div");
    card.className = "member-card";

    card.innerHTML = `
      <img src="${member.image}" alt="Logo de ${member.name}">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <button onclick="window.open('${member.website}', '_blank')" class="button-website-card">
        Website
      </button>
    `;

    return card;
  }

 
  function getRandomMembers(members, count) {
    const shuffled = [...members].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  fetch(dataUrl)
    .then((resp) => resp.json())
    .then((json) => {
      const members = json.members;


      const goldSilver = members.filter((m) =>
        ["gold", "silver"].includes(m.membership.toLowerCase())
      );


      const selected = getRandomMembers(goldSilver, 3);


      spotlightContainer.innerHTML = "";
      selected.forEach((member) => {
        const card = createMemberCard(member);
        spotlightContainer.appendChild(card);
      });
    })
    .catch((err) => console.error("Error loading spotlight members:", err));
});

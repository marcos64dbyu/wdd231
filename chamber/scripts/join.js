// Set timestamp value when page loads
  document.getElementById("timestamp").value = new Date().toLocaleString();

  // Modal open/close logic
  const infoButtons = document.querySelectorAll(".info-button");
  const modals = document.querySelectorAll("dialog");
  const closeButtons = document.querySelectorAll(".close-button");

  infoButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modal);
      if (modal) modal.showModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest("dialog").close();
    });
  });

  // Simple animation for cards
  window.addEventListener("load", () => {
    document.querySelectorAll(".card").forEach((card, i) => {
      card.style.opacity = 0;
      setTimeout(() => {
        card.style.transition = "opacity 1s ease, transform 1s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, 300 * i);
    });
  });
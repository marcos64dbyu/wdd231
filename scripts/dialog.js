const modal      = document.getElementById('myModal');
const closeBtn   = document.querySelector('.close-button'); 
const openBtn    = document.querySelector(".course-title-check"); 

openBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});
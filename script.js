// Typing text
const text = "CRAFTING LUXURY DIGITAL EXPERIENCES";
let i = 0;
const speed = 100;
const typingElement = document.querySelector(".typing-text");

function typeWriter() {
  if(i < text.length){
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      i = 0;
      typeWriter();
    }, 2000); // loop typing effect
  }
}
window.onload = typeWriter;

// Parallax effect for hero layers
const layers = document.querySelectorAll(".hero-images .layer");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth/2 - e.pageX) / 50;
  const y = (window.innerHeight/2 - e.pageY) / 50;

  layers.forEach((layer, index) => {
    const factor = (index + 1) * 5;
    layer.style.transform = `translate3d(${x/factor}px, ${y/factor}px, 0) scale(1.05)`;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      modal.classList.add('show');
    });
  });



  modal.addEventListener('click', e => {
    if(e.target === modal) {modal.classList.remove('show');
  }
  });
});

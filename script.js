// Scroll suave para links de navegação
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Aparecer efeito de fade nas seções ao rolar a página
function revealSections() {
  document.querySelectorAll("section").forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealSections);
revealSections();

// Botão voltar ao topo
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Botão de seta no header para rolar para "Sobre"
document.querySelector("header .btn-down").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });

  // Ajusta nav ativo
  document
    .querySelectorAll("nav a")
    .forEach((a) => a.classList.remove("active"));
  document.querySelector('nav a[href="#about"]').classList.add("active");
});

// PARTICLES CANVAS HEADER
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");
let width, height;
let particlesArray = [];

function initCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
    this.color = "rgba(175, 143, 255, 0.7)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 8;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createParticles() {
  particlesArray = [];
  const count = Math.floor(width / 15);
  for (let i = 0; i < count; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particlesArray.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  initCanvas();
  createParticles();
});

initCanvas();
createParticles();
animate();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

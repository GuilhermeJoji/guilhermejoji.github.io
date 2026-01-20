document.addEventListener("DOMContentLoaded", () => {
  // MENU MOBILE
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("menu-overlay");

  window.toggleMenu = () => {
    if (!menu || !overlay) return;
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // TYPED.JS
  if (window.Typed) {
    new Typed("#typing", {
      strings: [
        "Engenheiro de Produção",
        "Lean Six Sigma Black Belt",
        "Consultor em Melhoria Contínua",
        "Excelência Operacional",
        "Transformação Digital & IA"
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    });
  }

  // PARTICLES.JS
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#1e90ff" },
        shape: { type: "circle" },
        opacity: { value: 0.55 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, opacity: 0.35, width: 1 },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 120 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
});

// WhatsApp (evita recarregar a página ao enviar)
function enviarWhatsApp(event) {
  if (event) event.preventDefault();

  const nome = document.getElementById("nome")?.value?.trim() || "";
  const email = document.getElementById("email")?.value?.trim() || "";
  const mensagem = document.getElementById("mensagem")?.value?.trim() || "";

  const texto = `Olá! Meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
  const numero = "5511999999999"; // TROQUE pelo seu número (DDI+DDD+numero)

  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript carregado!");

  // MENU MOBILE
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("menu-overlay");

  window.toggleMenu = () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // TYPED.JS - texto que digita sozinho
  new Typed("#typing", {
    strings: ["Engenheiro de Produção", "Lean six sigma Black Belt"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
});

// HeaderEffects.js
// Script pour ajouter des effets extravagants au header et un bouton de retour en haut

// Fonction pour initialiser les effets du header
function initHeaderEffects() {
  // Sélectionner tous les liens du header
  const headerLinks = document.querySelectorAll("header nav a");

  // Supprimer les spans de soulignement existants
  document.querySelectorAll("header nav a span").forEach((span) => {
    if (span.classList.contains("absolute")) {
      span.remove();
    }
  });

  // Ajouter l'effet circulaire à chaque lien
  headerLinks.forEach((link) => {
    // Créer un conteneur pour l'effet
    link.style.position = "relative";
    link.style.overflow = "hidden";

    // Gestionnaire d'événement pour l'effet circulaire
    link.addEventListener("mouseenter", function (e) {
      // Supprimer tout cercle existant
      const existingCircles = this.querySelectorAll(".circle-effect");
      existingCircles.forEach((circle) => circle.remove());

      // Créer un nouvel élément pour l'effet circulaire
      const circle = document.createElement("span");
      circle.classList.add("circle-effect");

      // Positionner le cercle à l'endroit où la souris entre dans le lien
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Appliquer les styles au cercle
      circle.style.position = "absolute";
      circle.style.top = `${y}px`;
      circle.style.left = `${x}px`;
      circle.style.width = "0";
      circle.style.height = "0";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = "rgba(0, 119, 255, 0.2)";
      circle.style.transform = "translate(-50%, -50%)";
      circle.style.zIndex = "-1";

      // Ajouter le cercle au lien
      this.appendChild(circle);

      // Animer le cercle
      setTimeout(() => {
        circle.style.transition = "all 0.5s ease-out";
        circle.style.width = `${Math.max(rect.width, rect.height) * 2.5}px`;
        circle.style.height = `${Math.max(rect.width, rect.height) * 2.5}px`;
      }, 10);
    });

    // Supprimer l'effet lorsque la souris quitte le lien
    link.addEventListener("mouseleave", function () {
      const circles = this.querySelectorAll(".circle-effect");
      circles.forEach((circle) => {
        circle.style.opacity = "0";
        setTimeout(() => {
          if (circle.parentNode === this) {
            circle.remove();
          }
        }, 500);
      });
    });
  });

  // Ajouter le comportement de masquage/affichage du header au scroll
  let lastScrollTop = 0;
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Déterminer la direction du scroll
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      // Scroll vers le bas - masquer le header
      header.style.transform = "translateY(-100%)";
      header.style.transition = "transform 0.3s ease-in-out";
    } else {
      // Scroll vers le haut - afficher le header
      header.style.transform = "translateY(0)";
      header.style.transition = "transform 0.3s ease-in-out";
    }

    lastScrollTop = scrollTop;
  });

  // Créer le bouton de retour en haut de page
  createBackToTopButton();
}

// Fonction pour créer le bouton de retour en haut de page
function createBackToTopButton() {
  // Vérifier si le bouton existe déjà
  if (document.querySelector(".back-to-top")) return;

  // Créer le bouton
  const backToTopBtn = document.createElement("button");
  backToTopBtn.classList.add("back-to-top");
  backToTopBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;

  // Appliquer les styles au bouton
  backToTopBtn.style.position = "fixed";
  backToTopBtn.style.bottom = "20px";
  backToTopBtn.style.right = "20px";
  backToTopBtn.style.zIndex = "99";
  backToTopBtn.style.width = "50px";
  backToTopBtn.style.height = "50px";
  backToTopBtn.style.borderRadius = "50%";
  backToTopBtn.style.backgroundColor = "rgba(0, 119, 255, 0.8)";
  backToTopBtn.style.color = "white";
  backToTopBtn.style.border = "none";
  backToTopBtn.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  backToTopBtn.style.cursor = "pointer";
  backToTopBtn.style.display = "flex";
  backToTopBtn.style.alignItems = "center";
  backToTopBtn.style.justifyContent = "center";
  backToTopBtn.style.opacity = "0";
  backToTopBtn.style.transition = "opacity 0.3s, transform 0.3s";
  backToTopBtn.style.transform = "scale(0.8)";

  // Ajouter le bouton au body
  document.body.appendChild(backToTopBtn);

  // Ajouter l'événement de clic pour remonter en haut
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Afficher/masquer le bouton en fonction du scroll
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.transform = "scale(1)";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.transform = "scale(0.8)";
    }
  });
}

// Initialiser les effets lorsque le DOM est chargé
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeaderEffects);
  } else {
    initHeaderEffects();
  }
}

export { initHeaderEffects };

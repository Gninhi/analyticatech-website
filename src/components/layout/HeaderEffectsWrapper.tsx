"use client";

import { useEffect } from "react";
import { initHeaderEffects } from "./HeaderEffects";
import "./HeaderEffects.css";

/**
 * Composant wrapper pour initialiser les effets du header
 * Ce composant est client-side uniquement et initialise les effets
 * du header et le bouton de retour en haut de page
 */
export default function HeaderEffectsWrapper() {
  useEffect(() => {
    // Initialiser les effets du header
    initHeaderEffects();

    // Nettoyage lors du démontage du composant
    return () => {
      // Supprimer le bouton de retour en haut si nécessaire
      const backToTopBtn = document.querySelector(".back-to-top");
      if (backToTopBtn && backToTopBtn.parentNode) {
        backToTopBtn.parentNode.removeChild(backToTopBtn);
      }
    };
  }, []);

  // Ce composant ne rend rien visuellement
  return null;
}

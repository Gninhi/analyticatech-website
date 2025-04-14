# Composants Réutilisables

Ce dossier contient tous les composants réutilisables du projet Analyticatech, organisés selon leur fonction.

## Structure

- `ui/` : Composants d'interface utilisateur de base (boutons, cartes, modales, etc.)
- `layout/` : Composants de mise en page (header, footer, navigation, etc.)
- `forms/` : Composants de formulaires (champs, validations, etc.)
- `sections/` : Sections de page réutilisables (héros, témoignages, etc.)

## Bonnes Pratiques

1. Chaque composant doit être dans son propre fichier
2. Utiliser des types TypeScript pour les props
3. Documenter l'utilisation du composant avec des commentaires
4. Maintenir la cohérence de style avec les autres composants
5. Éviter les dépendances externes inutiles

## Exemple d'Utilisation

```tsx
import { Button } from "@/components/ui/Button";

export default function MaPage() {
  return (
    <div>
      <Button variant="primary">Cliquez ici</Button>
    </div>
  );
}
```

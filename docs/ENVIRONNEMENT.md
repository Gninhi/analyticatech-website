# Guide d'environnement virtuel pour Analyticatech

Ce document explique comment configurer et utiliser l'environnement virtuel pour le projet Analyticatech.

## Pourquoi un environnement virtuel?

Un environnement virtuel permet d'isoler les dépendances Python spécifiques à ce projet, évitant ainsi les conflits avec d'autres projets ou avec le système global. Pour ce projet Next.js, l'environnement virtuel est principalement utilisé pour:

1. Isoler les dépendances Python si nécessaire
2. Fournir un environnement propre pour exécuter des scripts d'automatisation
3. Faciliter la gestion des versions de Node.js et npm

## Configuration automatique

Un script de configuration a été créé pour simplifier la mise en place de l'environnement:

```bash
# Rendre le script exécutable
chmod +x setup_env.sh

# Exécuter le script
./setup_env.sh
```

Ce script va:

1. Créer un environnement virtuel Python nommé `venv`
2. L'activer automatiquement
3. Installer les dépendances Python de base
4. Vérifier l'installation de Node.js
5. Installer les dépendances Node.js du projet

## Activation manuelle

Pour activer manuellement l'environnement virtuel:

```bash
source venv/bin/activate
```

Vous saurez que l'environnement est activé lorsque `(venv)` apparaît au début de votre ligne de commande.

## Désactivation

Pour désactiver l'environnement virtuel:

```bash
deactivate
```

## Démarrer le projet

Une fois l'environnement activé, vous pouvez démarrer le serveur de développement:

```bash
npm run dev
```

## Dépendances du projet

Les principales dépendances du projet sont:

- Next.js 15.3.0
- React 19.0.0
- TypeScript 5
- Tailwind CSS 4

Consultez le fichier `package.json` pour la liste complète des dépendances.

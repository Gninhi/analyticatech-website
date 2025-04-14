#!/bin/bash

# Script pour configurer l'environnement virtuel et installer les dépendances
# pour le projet Analyticatech

# Définir les couleurs pour une meilleure lisibilité
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

echo -e "${BLUE}=== Configuration de l'environnement pour Analyticatech ===${NC}\n"

# Vérifier si Python est installé
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Python 3 n'est pas installé. Veuillez l'installer avant de continuer.${NC}"
    exit 1
fi

# Créer l'environnement virtuel
ENV_NAME="venv"
ENV_PATH="./${ENV_NAME}"

echo -e "${YELLOW}Création de l'environnement virtuel Python...${NC}"
if [ -d "$ENV_PATH" ]; then
    echo -e "${YELLOW}L'environnement virtuel existe déjà.${NC}"
else
    python3 -m venv $ENV_PATH
    echo -e "${GREEN}Environnement virtuel créé avec succès!${NC}"
fi

# Activer l'environnement virtuel
echo -e "\n${YELLOW}Activation de l'environnement virtuel...${NC}"
source $ENV_PATH/bin/activate
echo -e "${GREEN}Environnement virtuel activé!${NC}"

# Installer les dépendances Python si nécessaire
echo -e "\n${YELLOW}Installation des dépendances Python de base...${NC}"
pip install --upgrade pip
pip install wheel setuptools
echo -e "${GREEN}Dépendances Python de base installées!${NC}"

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js n'est pas installé. Veuillez l'installer avant de continuer.${NC}"
    echo -e "${YELLOW}Vous pouvez l'installer via: https://nodejs.org/en/download/${NC}"
else
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}Node.js est installé (version: $NODE_VERSION)${NC}"
    
    # Installer les dépendances Node.js
    echo -e "\n${YELLOW}Installation des dépendances Node.js...${NC}"
    npm install
    echo -e "${GREEN}Dépendances Node.js installées!${NC}"
fi

# Afficher les instructions pour démarrer le projet
echo -e "\n${BLUE}=== Configuration terminée! ===${NC}"
echo -e "\n${YELLOW}Pour activer manuellement l'environnement virtuel à l'avenir:${NC}"
echo -e "source $ENV_PATH/bin/activate"

echo -e "\n${YELLOW}Pour démarrer le serveur de développement:${NC}"
echo -e "npm run dev"

echo -e "\n${GREEN}Bon développement!${NC}\n"
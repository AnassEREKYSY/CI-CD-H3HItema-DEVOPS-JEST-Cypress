# Utilisation de l'image officielle Node.js
FROM node:latest

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie du fichier package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Exposition du port sur lequel le serveur Node.js écoute
EXPOSE 3000

# Commande pour démarrer l'application lorsque le conteneur démarre
CMD ["node", "server.js"]

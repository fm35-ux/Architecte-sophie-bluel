# Sophie Bluel — Portfolio d'architecte d'intérieur

Page web dynamique développée en JavaScript pour le site portfolio d'une architecte d'intérieur, avec communication via une API.

## Contexte du Projet

Ce projet s'inscrit dans le cadre du parcours **Testeur Logiciel** d'OpenClassrooms. Il consiste à développer la partie Front-End du site portfolio de Sophie Bluel, architecte d'intérieur, pour le compte de l'agence fictive **ArchiWebos**.

Le travail part d'une version statique du site (HTML/CSS fourni) qu'il faut rendre dynamique en JavaScript. Trois fonctionnalités principales sont à développer :

- La **page de présentation** des travaux de l'architecte (galerie générée dynamiquement à partir des données de l'API)
- La **page de connexion** de l'administrateur du site (à créer de zéro)
- La **modale d'upload** permettant d'ajouter et de supprimer des médias (à créer de zéro)

Le projet introduit pour la première fois la communication avec un back-end, afin de faire persister les données et de tester les fonctionnalités en conditions réelles.

## Mon rôle et missions

J'interviens en tant que **développeuse front-end** envoyée en renfort sur l'équipe en charge du site.

Mes missions principales :

- Développer la page de présentation des travaux à partir du HTML fourni
- Gérer les événements utilisateurs en JavaScript (filtres de la galerie, ouverture/fermeture de la modale)
- Manipuler les éléments du DOM pour générer dynamiquement le contenu de la galerie
- Récupérer les données utilisateurs via des formulaires (connexion, ajout de média)
- Communiquer avec l'API back-end (récupération des travaux, authentification, ajout et suppression de médias)
- Versionner le projet avec Git et GitHub (clonage du repo, branche de développement dédiée, commits réguliers)

## Stack Technique

- **HTML5** / **CSS3** — structure et mise en forme (fournis au départ)
- **JavaScript (ES6)** — manipulation du DOM, gestion des événements, logique applicative
- **Fetch API** — communication avec l'API back-end (requêtes GET, POST, DELETE)
- **API REST** — back-end fourni pour la persistance des données et l'authentification (token JWT)
- **Node.js** / **npm** — exécution du serveur back-end en local
- **Figma** — consultation des maquettes du design
- **Git** / **GitHub** — versionnement du code
- **Visual Studio Code** — environnement de développement

## Impact pour mon profil de testeuse logiciel

Ce projet renforce plusieurs compétences directement transférables au métier de testeuse logiciel :

- **Compréhension des interfaces web dynamiques** : savoir comment une page se construit et réagit côté client permet de cibler plus finement les zones à tester (rendu DOM, états de l'UI).
- **Interaction avec une API** : comprendre les échanges client/serveur (codes de réponse HTTP, structure des requêtes et réponses, gestion du token d'authentification) est essentiel pour tester les couches d'intégration et l'API elle-même.
- **Gestion des événements utilisateurs** : maîtriser le comportement de l'application face aux actions de l'utilisateur facilite la conception de scénarios de test fonctionnels et de tests d'interaction.
- **Validation des formulaires** : identifier les points de saisie utilisateur (login, upload) est une base directe pour les tests de validation, de cas limites et de sécurité.
- **Versionnement avec Git/GitHub** : indispensable pour travailler en équipe, suivre les modifications et collaborer avec les développeurs sur la remontée et le suivi des anomalies.

## Installation du projet

### Prérequis

- [Node.js](https://nodejs.org/) installé sur votre machine
- [Git](https://git-scm.com/) installé sur votre machine

### 1. Cloner le dépôt

```bash
git clone <url-du-repo>
cd <nom-du-repo>
```

### 2. Lancer le back-end

Le back-end se trouve dans le dossier dédié (par exemple `Backend/`).

```bash
cd Backend
npm install
npm start
```

### 3. Lancer le front-end

Le front-end est constitué de fichiers statiques (HTML/CSS/JS). Ouvrez le dossier `FrontEnd/` puis :

- soit ouvrez directement le fichier `index.html` dans votre navigateur ;
- soit utilisez une extension type **Live Server** (VS Code) pour servir les fichiers en local et éviter les problèmes de cache.

### 4. Identifiants de connexion (administrateur)

Utilisez les identifiants : sophie.bluel@test.tld  // S0phie

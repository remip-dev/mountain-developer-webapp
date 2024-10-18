# Portfolio - Rémi Policet | Développeur Full Stack TypeScript

Bienvenue sur le repository de mon site portfolio personnel, conçu pour présenter mes compétences et projets en tant que développeur full stack TypeScript, avec un branding centré sur la montagne. Ce portfolio vise à montrer la valeur que je peux apporter aux clients, tout en reflétant mon approche de développement orientée sur le clean code et la maintenabilité.

## Technologies utilisées

Ce portfolio est développé avec les technologies suivantes :

- **Vue.js 3** : framework JavaScript pour le développement d'interfaces utilisateur réactives.
- **TypeScript** : surcouche de JavaScript pour assurer une meilleure maintenabilité et robustesse du code.

## Structure du projet

Voici la structure principale du projet :

```
src/
│
├── assets/                # Contient les ressources (images, icônes, etc.)
├── components/            # Contient les composants Vue.js réutilisables
│   ├── __tests__/         # Tests unitaires des composants
│   ├── header/            # Composants relatifs à l'en-tête du site
│   ├── mySkills/          # Composants relatifs à la section "Mes compétences"
│   ├── projects/          # Composants relatifs à la section "Mes projets"
│   │   ├── ResponsiveImage.vue
│   │   ├── SimpleButton.vue
│   │   ├── SimpleFooter.vue
│   │   └── StepMethod.vue  # Composant décrivant ma méthode de travail
│
├── enum/                  # Définitions d'énumérations TypeScript
├── interfaces/            # Interfaces TypeScript pour typage strict
├── router/                # Configuration du routeur Vue.js
├── stores/                # Gestion des états globaux avec Pinia (ou Vuex)
├── utils/                 # Fonctions utilitaires
├── views/                 # Pages du site
├── App.vue                # Composant racine Vue.js
└── main.ts                # Point d'entrée principal de l'application
```

## CI/CD

Le site est automatiquement déployé via **GitHub Actions** sur **GitHub Pages** après chaque modification sur la branche principale. Voici un aperçu des deux workflows utilisés :

- **Build Workflow** : assure que chaque push est testé et construit correctement avant tout déploiement.
- **Deploy Workflow** : déploie automatiquement le site sur GitHub Pages si les tests et la construction réussissent.

Ci-dessous, les deux fichiers workflows utilisés :

- [`pipeline-build.yml`](./.github/pipeline-build.yml) : Configuration pour la construction du projet.
- [`pipeline-deploy.yml`](./.github/pipeline-deploy.yml) : Configuration pour le déploiement du site.

## Hébergement

Le site est hébergé directement sur **GitHub Pages**, avec une publication automatique grâce à l'intégration de GitHub Actions. Vous pouvez visiter le site live à l’adresse suivante : [https://remipolicet.com](https://remipolicet.com).

## Contributions

Ce projet est un portfolio personnel et n’accepte pas les contributions externes.

## Auteur

Rémi Policet - **Développeur Full Stack TypeScript**

Si vous souhaitez collaborer ou en savoir plus sur mon approche de développement, vous pouvez me contacter via [LinkedIn](https://www.linkedin.com/in/remi-policet) ou par [email](mailto:contact@remipolicet.com).

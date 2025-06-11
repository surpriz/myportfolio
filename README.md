# MyPortfolio

Ce projet est un portfolio personnel moderne conçu pour présenter des projets dans les domaines de l'ingénierie des données, de la science des données, de l'apprentissage automatique et du DevOps. Il est construit en suivant les meilleures pratiques de développement web pour 2025, en mettant l'accent sur la performance, l'expérience développeur et un design épuré.

## Tech Stack

Le socle technologique de ce projet est basé sur des outils modernes, performants et reconnus dans l'industrie :

- **Framework:** [Next.js 15](https://nextjs.org/) (React)
- **Langage:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Composants UI:** [Shadcn/UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Déploiement:** [Vercel](https://vercel.com/)

## Architecture

L'application suit une architecture découplée et modulaire, favorisant la maintenabilité et l'évolutivité.

- **Frontend:** Construit avec Next.js App Router, utilisant majoritairement des Server Components pour des performances optimales (SSR/SSG).
- **Styling:** Une approche hybride combinant la rapidité de Tailwind CSS pour le prototypage et la structure, avec des modules [Stylus](https://stylus-lang.com/) pour les styles complexes et spécifiques aux composants.
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) pour la gestion d'état global côté client.

## Getting Started

Pour lancer le projet en local, suivez ces étapes :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/surpriz/myportfolio.git
    cd myportfolio
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Déploiement

Le déploiement est simplifié grâce à l'intégration continue avec Vercel. Chaque `push` sur la branche `main` déclenchera automatiquement un nouveau déploiement. 
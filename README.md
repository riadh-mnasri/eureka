# Eureka

Application web ludique et bilingue qui entraîne les enfants aux olympiades de mathématiques : logique, calcul astucieux, géométrie et combinatoire, avec des indices progressifs, une bibliothèque de stratégies de résolution et une progression par ceintures, sans jamais utiliser de récompenses réelles comme mécanique de motivation.

Copyright (c) 2026 Riadh MNASRI. Tous droits réservés.

## Fonctionnalités

- **3 profils enfant** adaptés par tranche d'âge, chacun avec sa propre banque de problèmes :
  - **Éclaireur (6 ans)** : logique visuelle, suites, dénombrement simple, formes
  - **Chercheur (8 ans)** : déductions, calcul astucieux, périmètres et aires simples
  - **Champion (11 ans)** : combinatoire, théorie des nombres de base, géométrie, problèmes à plusieurs étapes
- **Défi du jour** : 6 problèmes tirés au sort dans tous les domaines du profil.
- **Parcours par compétence** : entraînement ciblé sur un seul domaine (logique, calcul, géométrie ou combinatoire).
- **Indice à la demande** : un indice de stratégie disponible avant de répondre, jamais la réponse offerte directement.
- **Stratégie de résolution** révélée après chaque réponse (dessiner un schéma, tester un petit cas, travailler à rebours, chercher un motif, essayer de façon organisée, compter sans rien oublier).
- **Radar de maîtrise** : visualisation de la progression dans les 4 domaines.
- **Progression par ceintures** (blanche à noire) plutôt qu'un simple niveau numérique, pour un esprit compétition.
- **Espace parents** : vue d'ensemble en lecture seule des 3 profils, sans suivi intrusif.
- **Bilingue** : interface complète en français et en anglais.

## Choix de conception : pas de récompenses réelles

Toute la motivation repose sur la progression virtuelle (ceintures, badges, maîtrise par domaine) et non sur de l'argent ou des récompenses matérielles automatisées, pour éviter l'effet de sur-justification et garder le plaisir d'apprendre intact.

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [next-intl](https://next-intl.dev) pour l'interface bilingue français/anglais
- Persistance locale via `localStorage` (aucune base de données, aucune donnée envoyée à un serveur)

## Démarrage local

```bash
npm install
npm run dev
```

L'application est servie sur [http://localhost:3141](http://localhost:3141).

Aucune variable d'environnement n'est nécessaire : toutes les données (profils, progression, badges) sont stockées localement dans le navigateur.

## Scripts disponibles

| Commande         | Description                                     |
| ---------------- | ------------------------------------------------ |
| `npm run dev`     | Serveur de développement (Turbopack, port 3141)  |
| `npm run build`   | Build de production                              |
| `npm start`       | Lance le build de production                     |
| `npm run lint`    | Vérifie le code avec ESLint                      |

## Tests

Aucune suite de tests automatisés pour le moment : le contenu pédagogique et la logique de jeu (ceintures, maîtrise, badges) sont simples et vérifiés manuellement en navigateur. Le build (`npm run build`) fait office de garde-fou de type (TypeScript strict) avant chaque déploiement.

## Architecture

```
src/
  app/
    [locale]/
      layout.tsx                       en-tête, pied de page, fournisseur i18n
      page.tsx                         accueil : choix du profil enfant
      profil/[profileId]/
        page.tsx                        tableau de bord (radar de maîtrise, ceinture, série)
        defi/page.tsx                    défi du jour (problèmes mélangés)
        competence/[domain]/page.tsx     entraînement cible sur un domaine
        badges/page.tsx                  grille complète des badges
      parents/page.tsx                 espace parents (lecture seule)
  components/                          UI réutilisable (Dashboard, ChallengeFlow, MasteryRadar, RobotMascot, ...)
  i18n/                                 configuration next-intl (routing, navigation, requête)
  lib/
    profiles.ts                         définition des 3 profils enfant et de leurs tranches d'âge
    domains.ts                          les 4 domaines de compétence (logique, calcul, géométrie, combinatoire)
    strategies.ts                       bibliothèque des stratégies de résolution
    content/problems.ts                 banque de problèmes bilingues, par tranche d'âge et domaine
    gamification.ts                     ceintures, maîtrise par domaine, série de jours
    badges.ts                           définition des badges
    storage.ts                          lecture/écriture de la progression dans localStorage
  proxy.ts                              routage des locales (fr/en)
messages/
  fr.json, en.json                     textes d'interface (hors contenu pédagogique)
```

## Déploiement

Prévu sur Vercel, lié au repo GitHub `riadh-mnasri/eureka` (déploiement automatique à chaque push sur `main` une fois lié).

## État d'avancement

- [x] 3 profils enfant avec banque de problèmes adaptée par âge et domaine
- [x] Défi du jour et parcours par compétence
- [x] Indices progressifs et bibliothèque de stratégies de résolution
- [x] Radar de maîtrise par domaine, progression par ceintures, badges
- [x] Espace parents (lecture seule, sans surveillance intrusive)
- [x] Interface bilingue français / anglais
- [ ] Déploiement production sur Vercel
- [ ] Favicon et icône d'application personnalisés
- [ ] Contenu pédagogique additionnel (plus de problèmes par tranche d'âge et domaine)

## Licence

Projet personnel non destiné à la redistribution. Tous droits réservés, Riadh MNASRI.

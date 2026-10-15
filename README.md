# 30 Days, 30 Projects · Site vitrine

🌐 **[30daysprojects.netlify.app](https://30daysprojects.netlify.app/)**

La page d'accueil du défi **30 jours, 30 projets** : un outil ou un site codé chaque jour en 2 à 3 heures, avec l'aide de Claude.

Elle présente la progression du défi (calendrier des 30 jours) et une carte par projet, avec sa capture d'écran, ses technos et son lien.

[![Aperçu du site vitrine](docs/preview.png)](https://30daysprojects.netlify.app/)

## Les 30 projets

| Jour | Projet | Techno | Statut | Lien |
|:---:|---|---|:---:|:---:|
| 01 | **Nuance** · Générateur de palettes avancé | JavaScript · CSS | ✅ | [🔗](https://30daysprojects.netlify.app/day-01-palette-generator/) |
| 02 | **Écho** · Jeux de mémoire musicaux | React · Vite · Web Audio | ✅ | [🔗](https://30daysprojects.netlify.app/day-02-memory-game/) |
| 03 | **RiverLog** · Suivi de bankroll poker | Laravel · Blade · Chart.js | 🚧 | [🔗](https://github.com/PierreWZK/30DaysProjects/tree/master/day-03-poker-bankroll) |
| 04 | Inspecteur de JSON | JavaScript | ⏳ | — |
| 05 | Watchlist films et séries | Symfony | ⏳ | — |
| 06 | Jeu de réflexes | JavaScript · CSS | ⏳ | — |
| 07 | Dashboard de dépenses | React · Recharts | ⏳ | — |
| 08 | Raccourcisseur d'URL avec statistiques | Laravel | ⏳ | — |
| 09 | Comparateur de voitures | Symfony | ⏳ | — |
| 10 | Calculateur de pot odds et d'outs poker | JavaScript | ⏳ | — |
| 11 | API REST de collection de jeux | Symfony · API Platform | ⏳ | — |
| 12 | Compresseur d'images côté navigateur | JavaScript | ⏳ | — |
| 13 | Analyseur de fichiers CSV | React | ⏳ | — |
| 14 | Générateur de factures PDF | Laravel · DomPDF | ⏳ | — |
| 15 | Mini-jeu de course infinie | JavaScript · Canvas | ⏳ | — |
| 16 | Agrégateur d'actualités dev et gaming | Next.js | ⏳ | — |
| 17 | Gestionnaire de tournois de poker | Symfony | ⏳ | — |
| 18 | Kanban avec glisser-déposer | React · dnd-kit | ⏳ | — |
| 19 | Tracker de succès gaming | Laravel · Livewire | ⏳ | — |
| 20 | Catalogue de jeux vidéo | Angular | ⏳ | — |
| 21 | Visualiseur de données automobiles | JavaScript · Chart.js | ⏳ | — |
| 22 | Réservation de créneaux | Symfony · EasyAdmin | ⏳ | — |
| 23 | Comparaison de fichiers texte | JavaScript | ⏳ | — |
| 24 | API de statistiques de jeux vidéo | Java · Spring Boot | ⏳ | — |
| 25 | Puissance 4 avec IA | JavaScript · Canvas | ⏳ | — |
| 26 | Gestion de garage | Laravel · Filament | ⏳ | — |
| 27 | Recherche plein texte de films | Symfony · Meilisearch | ⏳ | — |
| 28 | Statistiques GitHub | Next.js | ⏳ | — |
| 29 | Chat en temps réel | Laravel · Reverb | ⏳ | — |
| 30 | Portfolio des 30 projets | Next.js | ⏳ | — |

Légende : ⏳ à venir · 🚧 en cours · ✅ terminé

Ce tableau reprend `projects.js` : pense à le mettre à jour en même temps que ce fichier.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page (HTML et JavaScript) |
| `style.css` | Les styles |
| `projects.js` | **La liste des 30 projets** : c'est le seul fichier à modifier au quotidien |
| `preview-days-images/` | Les captures d'écran des projets |
| `docs/preview.png` | La capture du site vitrine, affichée dans ce README |
| `netlify.toml` | La configuration Netlify (site statique, sans construction) |

## Ajouter ou mettre à jour un projet

Dans `projects.js`, chaque projet a cette forme :

```js
{
  day: 2,
  folder: 'day-02-memory-game',
  name: 'Écho',                          // nom du projet
  title: 'Jeux de mémoire musicaux',     // ce qu'il fait
  stack: ['React', 'Vite'],              // la 1re techno donne la couleur et le filtre
  status: 'done',                        // 'todo', 'progress' ou 'done'
  image: 'preview-days-images/day2_echo.png',
  url: 'https://…',                      // adresse du projet en ligne
  description: '…',
},
```

Le calendrier, le compteur, les filtres et les cartes se mettent à jour tout seuls. Les projets `progress` et `done` sont cliquables.

## Lancer en local

Aucune installation : ouvrir `index.html` dans le navigateur, ou servir le dossier (par exemple `npx serve .`).

## Mise en ligne

Site statique : Netlify publie le dossier tel quel (`publish = "."` dans `netlify.toml`).

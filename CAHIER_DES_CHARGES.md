# Site vitrine — 30 jours, 30 projets

> Stack : **HTML, CSS et JavaScript**, sans étape de construction · hébergement **Coolify** (site statique), domaine `projectp.fr`.
> Rédigé après la livraison, à partir du code : ce document décrit ce qui a été construit et sert de référence pour les évolutions.

## 1. L'idée

La page d'accueil du défi **30 jours, 30 projets** : un outil ou un site codé chaque jour en 2 à 3 heures. Elle montre où en est le défi et donne accès à chaque projet, avec sa capture, ses technos et son lien.

## 2. MVP — ce qui doit fonctionner

1. Un **calendrier des 30 jours** et un compteur de projets livrés.
2. Une **carte par projet** : nom, ce qu'il fait, technos, capture, lien vers le site.
3. Des **filtres** par techno.
4. Le **statut de chaque jour calculé tout seul** d'après la date.
5. Une seule source de vérité : `projects.js`.

### Périmètre volontairement limité

- Pas de serveur ni de base : la liste des projets est un fichier JavaScript.
- Le code de chaque projet vit dans **son propre dépôt** ; la vitrine ne fait que pointer vers eux.

## 3. Cahier des charges fonctionnel

### A. Les projets

Chaque entrée de `projects.js` a la forme `{ day, folder, name, title, stack, status, image, url, repo, description }`. La première techno donne la couleur de la carte et le filtre.

### B. Statut automatique

À partir de `CHALLENGE_START` (jour 1) :

| Situation | Statut affiché |
| --- | --- |
| `status: 'done'` | Terminé |
| C'est le jour du projet | En cours de développement |
| Le jour est passé, projet pas `done` | En retard |
| Le jour n'est pas arrivé | À venir |

Une page restée ouverte se recharge à minuit.

### C. Cartes

- Une carte est **cliquable** dès qu'elle a une `url` et que son jour est arrivé.
- Les projets à venir montrent leur titre et leurs technos prévues.

## 4. Cahier des charges technique

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page et son script |
| `style.css` | Les styles |
| `projects.js` | La liste des 30 projets, seul fichier à modifier au quotidien |
| `preview-days-images/` | Les captures des projets (1600 × 900) |
| `docs/preview.png`, `docs/og.png` | Capture du site (README) et image d'aperçu du lien |

Le tableau du README reprend `projects.js` : les deux se mettent à jour ensemble.

### Mise en ligne

Le dossier est publié tel quel par Coolify à chaque push sur `master`.

## 5. Critères de réussite

- [x] Ajouter un projet ne demande de modifier que `projects.js` (et le README).
- [x] Le statut de chaque jour est juste sans intervention, y compris « En retard ».
- [x] Chaque projet terminé renvoie vers son site et son dépôt.

## 6. Définition du « terminé » d'un jour

Le projet du jour est en ligne, son entrée de `projects.js` passe à `status: 'done'` avec `name`, `url`, `repo`, `image` et `description`, sa capture est dans `preview-days-images/`, et le tableau du README est à jour.

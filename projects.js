// Liste des 30 projets affichés sur la page vitrine.
// Pour mettre à jour un projet : passer `status` à 'done', ajouter `name`, `description` et `image`.
//   status : 'done' quand le projet est terminé. Sinon, le statut se calcule tout seul d'après la date :
//            jour en cours → « En cours de développement », jour passé → « En retard », jour futur → « À venir »
//   image  : capture placée dans preview-days-images/
//   url    : adresse du projet en ligne. Sans url, la carte n'est pas cliquable.
//   repo   : dépôt GitHub du projet (chaque projet a son propre dépôt), affiché dans le README

// Jour 1 du défi (date locale, AAAA-MM-JJ)
const CHALLENGE_START = '2026-10-14';

const PROJECTS = [
  {
    day: 1,
    folder: 'day-01-palette-generator',
    name: 'Nuance',
    title: 'Générateur de palettes avancé',
    stack: ['JavaScript', 'CSS'],
    status: 'done',
    image: 'preview-days-images/day1_nuance.png',
    url: 'https://nuancecolor.netlify.app/',
    repo: 'https://github.com/PierreWZK/Nuance',
    description: '5 modes d\'harmonie, couleurs triées par teinte, verrouillage, noms modifiables, glisser-déposer. Export CSS ou PNG et partage par lien.',
  },
  {
    day: 2,
    folder: 'day-02-memory-game',
    name: 'Écho',
    title: 'Jeux de mémoire musicaux',
    stack: ['React', 'Vite', 'Web Audio'],
    status: 'done',
    image: 'preview-days-images/day2_echo.png',
    url: 'https://memory-echo.netlify.app/',
    repo: 'https://github.com/PierreWZK/Echo',
    description: 'Un memory où chaque paire a une forme, une couleur et une note. Mode Écoute, défi du jour à partager, duel contre l\'ordinateur et séquences à rejouer.',
  },
  {
    day: 3,
    folder: 'day-03-poker-bankroll',
    name: 'RiverLog',
    title: 'Suivi de bankroll poker',
    stack: ['Laravel', 'MySQL', 'Chart.js'],
    status: 'done',
    image: 'preview-days-images/day3_riverlog.png',
    url: 'https://riverlog.alwaysdata.net/',
    repo: 'https://github.com/PierreWZK/RiverLog',
    description: 'Bankroll poker en chiffres : profit, taux horaire, filtres. Import des historiques Betclic, ROI et stats de tournois, défis du jour. Comptes privés, démo, CI/CD.',
  },
  {
    day: 4,
    folder: 'day-04-geek-hub',
    name: '3logy',
    title: 'Hub geek (dev + jeux + ciné)',
    stack: ['JavaScript', 'API RAWG', 'API TMDB'],
    status: 'done',
    image: 'preview-days-images/day4_3logy.png',
    url: 'https://3logy.netlify.app/',
    repo: 'https://github.com/PierreWZK/3logy',
    description: 'Dev Daily, le jeu du jour (RAWG) et le film du jour (TMDB) en trois colonnes. Défi du jour qui alterne entre les trois thèmes, recherche de jeux, films, articles et astuces.',
  },
  { day: 5, folder: 'day-05-booking', title: 'Réservation de créneaux', stack: ['Symfony', 'EasyAdmin'] },
  { day: 6, folder: 'day-06-reflex-game', title: 'Jeu de réflexes', stack: ['JavaScript', 'CSS'] },
  { day: 7, folder: 'day-07-expense-dashboard', title: 'Dashboard de dépenses', stack: ['React', 'Recharts'] },
  { day: 8, folder: 'day-08-url-shortener', title: 'Raccourcisseur d\'URL avec statistiques', stack: ['Laravel'] },
  { day: 9, folder: 'day-09-car-comparator', title: 'Comparateur de voitures', stack: ['Symfony'] },
  { day: 10, folder: 'day-10-poker-odds', title: 'Calculateur de pot odds et d\'outs poker', stack: ['JavaScript'] },
  { day: 11, folder: 'day-11-game-collection-api', title: 'API REST de collection de jeux', stack: ['Symfony', 'API Platform'] },
  { day: 12, folder: 'day-12-image-compressor', title: 'Compresseur d\'images côté navigateur', stack: ['JavaScript'] },
  { day: 13, folder: 'day-13-csv-analyzer', title: 'Analyseur de fichiers CSV', stack: ['React'] },
  { day: 14, folder: 'day-14-invoice-generator', title: 'Générateur de factures PDF', stack: ['Laravel', 'DomPDF'] },
  { day: 15, folder: 'day-15-endless-runner', title: 'Mini-jeu de course infinie', stack: ['JavaScript', 'Canvas'] },
  { day: 16, folder: 'day-16-news-aggregator', title: 'Agrégateur d\'actualités dev et gaming', stack: ['Next.js'] },
  { day: 17, folder: 'day-17-poker-tournaments', title: 'Gestionnaire de tournois de poker', stack: ['Symfony'] },
  { day: 18, folder: 'day-18-kanban', title: 'Kanban avec glisser-déposer', stack: ['React', 'dnd-kit'] },
  { day: 19, folder: 'day-19-achievement-tracker', title: 'Tracker de succès gaming', stack: ['Laravel', 'Livewire'] },
  { day: 20, folder: 'day-20-game-catalog', title: 'Catalogue de jeux vidéo', stack: ['Angular'] },
  { day: 21, folder: 'day-21-car-data-viz', title: 'Visualiseur de données automobiles', stack: ['JavaScript', 'Chart.js'] },
  { day: 22, folder: 'day-22-watchlist', title: 'Watchlist films et séries', stack: ['Symfony'] },
  { day: 23, folder: 'day-23-text-diff', title: 'Comparaison de fichiers texte', stack: ['JavaScript'] },
  { day: 24, folder: 'day-24-game-stats-api', title: 'API de statistiques de jeux vidéo', stack: ['Java', 'Spring Boot'] },
  { day: 25, folder: 'day-25-connect-four', title: 'Puissance 4 avec IA', stack: ['JavaScript', 'Canvas'] },
  { day: 26, folder: 'day-26-garage-manager', title: 'Gestion de garage', stack: ['Laravel', 'Filament'] },
  { day: 27, folder: 'day-27-movie-search', title: 'Recherche plein texte de films', stack: ['Symfony', 'Meilisearch'] },
  { day: 28, folder: 'day-28-github-stats', title: 'Statistiques GitHub', stack: ['Next.js'] },
  { day: 29, folder: 'day-29-realtime-chat', title: 'Chat en temps réel', stack: ['Laravel', 'Reverb'] },
  { day: 30, folder: 'day-30-portfolio', title: 'Portfolio des 30 projets', stack: ['Next.js'] },
];

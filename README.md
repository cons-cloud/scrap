# Post Scanner Extension

Cette extension Chrome permet de scraper les posts Facebook et LinkedIn visibles sur la page et de les exporter au format CSV.

## Fonctionnalités
- Scraping des posts Facebook et LinkedIn (auteur, photo, contenu du message)
- Affichage des résultats dans la popup
- Export CSV des posts visibles

## Installation locale (pour test)
1. Ouvre Chrome et va sur `chrome://extensions/`
2. Active le **Mode développeur** (coin supérieur droit)
3. Clique sur **Charger l'extension non empaquetée**
4. Sélectionne le dossier `scrap/`
5. L'icône de l'extension apparaît dans la barre Chrome

## Utilisation
1. Va sur Facebook ou LinkedIn et charge des posts (scrolle pour en charger plus si besoin)
2. Clique sur l'icône de l'extension
3. Clique sur **Scanner les Posts** pour voir les résultats dans la popup
4. Clique sur **Télécharger en CSV** pour exporter les posts visibles

## Publication sur le Chrome Web Store
1. Prépare un zip du dossier `scrap/` (manifest, scripts, icônes)
2. Va sur [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Crée un compte développeur (5$ une fois)
4. Ajoute un nouvel élément, téléverse le zip, remplis les infos et publie

## Permissions utilisées
- `activeTab` : pour accéder à la page active
- `scripting` : pour injecter le script de scraping

## Confidentialité
Aucune donnée n'est collectée ni transmise à un serveur externe. Tout se passe localement dans le navigateur.

---

**Besoin d'aide ?**
Contacte le développeur ou ouvre une issue sur le dépôt associé. 
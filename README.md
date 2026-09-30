# editeur-legal

L'identité de l'éditeur Fial Labs (raison sociale, forme juridique, adresse, SIRET),
dans un seul fichier, lue par toutes les pages de politique de confidentialité du
studio via `editeur-legal.js`.

Dépôt public, séparé de `FialLabs/shared` (privé) parce que `raw.githubusercontent.com`
et jsDelivr ne peuvent servir que des dépôts publics. Aucun secret ici : quatre champs
d'identité publique, vides tant que l'entité n'existe pas.

## À quoi il sert, à quoi il ne sert pas

**Sert** : les pages publiées — HTML statique hébergé (GitHub Pages), qui peut appeler
un serveur distant et où un champ silencieux quand il est vide ne bloque rien. C'est le
cas d'une politique de confidentialité.

**Ne sert pas** : un écran d'application. Un écran doit s'afficher hors ligne (`fetch()`
vers jsDelivr échoue sans réseau) et le silence sur un champ vide ne convient pas à un
produit avec comptes, où l'absence d'identité éditeur doit se voir, pas se taire.

Calé a ce second besoin et a écrit son propre module, distinct de celui-ci — pages ET
écrans, hors ligne, refuse de publier si un champ est vide. Deux besoins différents, pas
un doublon. Un projet d'application tenté d'importer ce fichier-ci pour un écran a
besoin du module de Calé, pas de celui-ci.

## Utilisation, depuis n'importe quelle page de politique de confidentialité

```html
<div id="editeur-legal"></div>
<script src="https://cdn.jsdelivr.net/gh/FialLabs/editeur-legal@main/editeur-legal.js"></script>
```

Tant que `editeur-legal.json` est vide, la section ne s'affiche pas — jamais de mention
"à venir". Le jour où l'entité existe : remplir les quatre champs de ce fichier, pousser,
et toutes les pages qui l'incluent se mettent à jour sans être rouvertes.

## `courriel/` — et pourquoi ce dépôt a GitHub Pages

Depuis le 30/09/2026, ce dépôt porte aussi la pastille de la signature de
courriel du studio, et GitHub Pages y est activé pour la servir. Lire
`courriel/LISEZ-MOI.md` avant de toucher à ce dossier : son adresse est lue
par chaque mail déjà envoyé.

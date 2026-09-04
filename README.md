# editeur-legal

L'identité de l'éditeur Fial Labs (raison sociale, forme juridique, adresse, SIRET),
dans un seul fichier, lue par toutes les pages de politique de confidentialité du
studio via `editeur-legal.js`.

Dépôt public, séparé de `FialLabs/shared` (privé) parce que `raw.githubusercontent.com`
et jsDelivr ne peuvent servir que des dépôts publics. Aucun secret ici : quatre champs
d'identité publique, vides tant que l'entité n'existe pas.

## Utilisation, depuis n'importe quelle page de politique de confidentialité

```html
<div id="editeur-legal"></div>
<script src="https://cdn.jsdelivr.net/gh/FialLabs/editeur-legal@main/editeur-legal.js"></script>
```

Tant que `editeur-legal.json` est vide, la section ne s'affiche pas — jamais de mention
"à venir". Le jour où l'entité existe : remplir les quatre champs de ce fichier, pousser,
et toutes les pages qui l'incluent se mettent à jour sans être rouvertes.

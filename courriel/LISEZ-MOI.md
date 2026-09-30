# courriel/ — la pastille de la signature de courriel

`fiallabs-pastille-96.png` est l'image de la signature Gmail de fiallabs@gmail.com.
Elle est ici parce que Gmail n'accepte, pour une image de signature, qu'une
adresse web publique ou Google Drive — et ce dépôt est le seul du studio à être
public et servi par jsDelivr.

**CE N'EST PAS UNE SOURCE, C'EST UN TIRAGE.** Il est produit par
`fiallabs-assets/Diffusion/outils/courriel/produire.mjs` depuis `shared`.
On ne le retouche jamais ici : on relance le générateur, puis on recopie.

Empreinte (sha256, 12 premiers caractères) : `16ae2ed238d5` — la même que dans
`fiallabs-assets/Diffusion/courriel/PRODUCTION.md`.

**La signature Gmail pointe sur un commit précis**, pas sur `@main` :
jsDelivr garde `@main` en cache, un commit épinglé ne change jamais. Remplacer
ce fichier ne change donc PAS la signature : il faut aussi changer l'adresse
dans Gmail (Paramètres → Général → Signature).

**Ne pas supprimer ni renommer ce fichier** : chaque mail déjà envoyé l'affiche
depuis cette adresse.

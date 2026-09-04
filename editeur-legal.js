// L'IDENTITÉ DE L'ÉDITEUR — écrite une fois, lue par toutes les pages de politique de
// confidentialité du studio (un jeu, une application, un projet client sous licence Fial Labs).
//
//   <div id="editeur-legal"></div>
//   <script src="https://cdn.jsdelivr.net/gh/FialLabs/editeur-legal@main/editeur-legal.js"></script>
//
// Dépôt public séparé, délibérément : ni raw.githubusercontent.com ni jsDelivr ne peuvent
// servir un dépôt privé (vérifié en essayant depuis shared/, qui est privé — les deux
// renvoyaient 404, silencieusement, même en forçant le SHA exact d'un commit qui existait bel
// et bien côté API authentifiée). Rien ici ne justifie une exception : aucun secret, quatre
// champs d'identité publique une fois l'entité créée.
//
// ════ POURQUOI UN FICHIER À PART ════
//
// Cette identité (raison sociale, forme juridique, adresse, SIRET) n'existe pas encore : le
// fondateur reste salarié ailleurs, et créer l'entité avant la fin de son contrat lui ferait
// perdre un financement France Travail. Le jour où elle existe, il y a QUATRE champs à remplir,
// dans UN fichier — pas sept pages de politique de confidentialité à rouvrir une par une.
//
// ════ SILENCIEUX TANT QUE C'EST VIDE ════
//
// Un champ absent ne devient jamais une phrase à trous ni une mention "à venir" : la section
// entière ne s'affiche pas tant qu'aucun champ n'est renseigné. Une page de politique de
// confidentialité reste valide sans elle — le contact (l'adresse email du studio) est
// toujours écrit en dur dans la page elle-même, jamais ici.

(async function () {
  const hote = document.getElementById('editeur-legal')
  if (!hote) return

  let editeur
  try {
    const reponse = await fetch('https://cdn.jsdelivr.net/gh/FialLabs/editeur-legal@main/editeur-legal.json')
    editeur = await reponse.json()
  } catch (e) {
    return // hors ligne, ou jsDelivr indisponible : la page reste valide sans cette section
  }

  const champs = [
    ['Raison sociale', editeur.raisonSociale],
    ['Forme juridique', editeur.formeJuridique],
    ['Adresse', editeur.adresse],
    ['SIRET', editeur.siret],
  ].filter(([, valeur]) => valeur)

  if (champs.length === 0) return // rien de renseigné : pas de section à moitié vide

  const titre = document.createElement('h2')
  titre.textContent = 'Éditeur'
  hote.append(titre)

  const liste = document.createElement('p')
  liste.innerHTML = champs.map(([nom, valeur]) => `${nom} : ${valeur}`).join('<br>')
  hote.append(liste)
})()

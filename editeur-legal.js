// L'IDENTITÉ DE L'ÉDITEUR — écrite une fois, lue par toutes les pages de politique de
// confidentialité du studio (un jeu, une application, un projet client sous licence Fial Labs).
//
//   <div id="editeur-legal"></div>
//   <script src="https://cdn.jsdelivr.net/gh/FialLabs/editeur-legal@main/editeur-legal.js"></script>
//
// ════ À QUOI IL SERT, À QUOI IL NE SERT PAS ════ (lu ici avant d'être adopté ailleurs)
//
// CE MODULE SERT LES PAGES PUBLIÉES — des pages HTML statiques, hébergées en ligne (GitHub
// Pages), qui peuvent se permettre d'appeler un serveur distant (jsDelivr) et où un champ
// silencieux quand il est vide ne bloque rien : la page reste lisible et honnête sans lui.
// C'est le cas d'une politique de confidentialité.
//
// IL NE SERT PAS UN ÉCRAN D'APPLICATION, et ce n'est pas un oubli, c'est une limite de
// conception à ne pas contourner en l'important là où il ne va pas :
//   - un écran d'application doit s'afficher hors ligne — un `fetch()` vers jsDelivr comme
//     seule source échoue sans réseau, ce qu'une page web statique peut tolérer et qu'un écran
//     ne peut pas ;
//   - le silence quand un champ est vide (voir plus bas) convient à une page qu'on complète
//     un jour ; il ne convient PAS à un produit avec comptes, où l'absence d'identité éditeur
//     est une question de conformité qui doit être vue, pas masquée.
//
// Calé a ce second besoin — pages ET écrans, hors ligne, refuse de publier si un champ est
// vide plutôt que de se taire — et a donc écrit son propre module, distinct de celui-ci. Ce
// n'est pas un doublon : deux besoins différents, deux modules. Si un projet d'application
// est tenté d'importer CE fichier-ci pour un écran, c'est le signe qu'il lui faut le module de
// Calé, pas celui-ci.
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

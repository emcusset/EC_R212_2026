const mesProjets = [
  { titre: "Site Himalaya", cat: "Web", desc: "Un site vitrine en HTML/CSS." },
  { titre: "Logo MMI", cat: "Design", desc: "Création d'une identité visuelle." },
  { titre: "Site peluche ", cat: "figma", desc: "réalisation d'une maquete de site ." }
];

const grille = document.querySelector('#port-grille');

// 1. Affichage
function rendu(liste) {
  grille.innerHTML = liste.map(p => `
    <article class="card" tabindex="0">
      <h3>${p.titre}</h3>
      <p>Catégorie : <strong>${p.cat}</strong></p>
      <button class="view-btn">Détails</button>
    </article>
  `).join('');
}

// 2. Interaction 1 : Filtrage
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag;
    const filtres = tag === 'all' ? mesProjets : mesProjets.filter(p => p.cat === tag);
    rendu(filtres);
  });
});

// 3. Interaction 2 : Modale (simplifiée)
const modal = document.querySelector('#modal');
grille.addEventListener('click', (e) => {
  if(e.target.classList.contains('view-btn')) {
    modal.setAttribute('aria-hidden', 'false');
    document.querySelector('#modal-details').innerHTML = "Détails du projet...";
  }
});

document.querySelector('#close-modal').addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
});

// Lancer au démarrage
rendu(mesProjets);
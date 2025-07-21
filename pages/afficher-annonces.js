document.addEventListener('DOMContentLoaded', () => {
  const conteneur = document.getElementById('liste-annonces');
  const annonces = JSON.parse(localStorage.getItem('annonces')) || [];
const chatterieElement = document.createElement("p");
chatterieElement.textContent = `Nom de la chatterie : ${annonce.chatterie}`;
div.appendChild(chatterieElement);


  annonces.forEach(annonce => {
    const carte = document.createElement('div');
    carte.className = 'carte';

    carte.innerHTML = `
      <h3>${annonce.nom}</h3>
      <p><strong>Espèce :</strong> ${annonce.espece}</p>
      <p><strong>Race :</strong> ${annonce.race}</p>
      <p><strong>Âge :</strong> ${annonce.age} mois</p>
      <p><strong>Prix :</strong> ${annonce.prix} €</p>
      <p><strong>Description :</strong> ${annonce.description}</p>
      ${annonce.photo ? `<img src="${annonce.photo}" alt="Photo de l'animal" width="200">` : ''}
      ${annonce.loof ? `<p><a href="${annonce.loof}" target="_blank">Voir certificat</a></p>` : ''}
    `;

    conteneur.appendChild(carte);
  });
});

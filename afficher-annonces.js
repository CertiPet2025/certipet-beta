document.addEventListener("DOMContentLoaded", () => {
  const annonces = JSON.parse(localStorage.getItem("annonces")) || [];
  const container = document.getElementById("annonces-container");

  annonces.forEach((annonce) => {
    const carte = document.createElement("div");
    carte.className = "carte";

    carte.innerHTML = `
      <h2>${annonce.nom}</h2>
      <p><strong>Race :</strong> ${annonce.race}</p>
      <p><strong>Âge :</strong> ${annonce.age} mois</p>
      <p><strong>Prix :</strong> ${annonce.prix} €</p>
      <p><strong>Description :</strong> ${annonce.description}</p>
      <p><strong>Chatterie :</strong> ${annonce.chatterie || 'Non renseigné'}</p>
      <p><strong>SIRET :</strong> ${annonce.siret || 'Non renseigné'}</p>
      <img src="${annonce.fichierPhoto}" alt="Photo de l'animal" />
      <br>
      <a href="${annonce.fichierCertificat}" target="_blank">Voir certificat</a>
    `;

    container.appendChild(carte);
  });
});

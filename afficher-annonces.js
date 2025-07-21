// Récupération des données stockées dans le localStorage
const annonces = JSON.parse(localStorage.getItem("annonces")) || [];

// Fonction pour créer une carte d'annonce
function creerCarte(annonce) {
  const carte = document.createElement("div");
  carte.className = "carte";

  const nom = document.createElement("h3");
  nom.textContent = annonce.nom;

  const race = document.createElement("p");
  race.textContent = `Race : ${annonce.race}`;

  const age = document.createElement("p");
  age.textContent = `Âge : ${annonce.age} mois`;

  const prix = document.createElement("p");
  prix.textContent = `Prix : ${annonce.prix} €`;

  const description = document.createElement("p");
  description.textContent = `Description : ${annonce.description}`;

  const chatterie = document.createElement("p");
  chatterie.textContent = `Chatterie : ${annonce.chatterie}`;

  const siret = document.createElement("p");
  siret.textContent = `SIRET : ${annonce.siret}`;

  const image = document.createElement("img");
  image.src = annonce.fichierPhoto;
  image.alt = "Photo de l'animal";

  const fichierPhoto = reader.result; // quand le FileReader lit l’image

  const certificat = document.createElement("a");
  certificat.href = annonce.fichierCertificat;
  certificat.textContent = "Voir certificat";
  certificat.target = "_blank";

  // Ajout des éléments à la carte
  carte.appendChild(nom);
  carte.appendChild(race);
  carte.appendChild(age);
  carte.appendChild(prix);
  carte.appendChild(description);
  carte.appendChild(chatterie);
  carte.appendChild(siret);
  carte.appendChild(image);
  carte.appendChild(certificat);

  return carte;
}

// Affichage des annonces dans la page
const liste = document.getElementById("liste-annonces");

annonces.forEach(annonce => {
  const carte = creerCarte(annonce);
  liste.appendChild(carte);
});


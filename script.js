// Récupération des données stockées
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
  age.textContent = `Âge : ${annonce.age}`;

  const email = document.createElement("p");
  email.textContent = `Email : ${annonce.email}`;

  const image = document.createElement("img");
  image.src = annonce.image;
  image.alt = "Photo du chat";

  const certificat = document.createElement("a");
  certificat.href = annonce.certificat;
  certificat.textContent = "Voir le certificat";
  certificat.target = "_blank";

  carte.appendChild(nom);
  carte.appendChild(race);
  carte.appendChild(age);
  carte.appendChild(email);
  carte.appendChild(image);
  carte.appendChild(certificat);

  return carte;
}

// Affichage des annonces
const conteneur = document.getElementById("conteneur-annonces");
annonces.forEach(annonce => {
  const carte = creerCarte(annonce);
  conteneur.appendChild(carte);
});

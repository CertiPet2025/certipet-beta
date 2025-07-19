document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulaire-eleveur');

  // 👉 Si on est sur la page éleveurs : formulaire actif
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      // Fonction pour convertir un fichier en Base64
      const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // Création de l'objet annonce
      const annonce = {
        espece: formData.get('animal'),
        race: formData.get('race'),
        nom: formData.get('nom'),
        age: formData.get('age'),
        prix: formData.get('prix'),
        description: formData.get('description'),
        photo: null,
        loof: null
      };

      const photoFile = formData.get('photo');
      const loofFile = formData.get('loof');

      if (photoFile && photoFile.size > 0) {
        annonce.photo = await toBase64(photoFile);
      }

      if (loofFile && loofFile.size > 0) {
        annonce.loof = await toBase64(loofFile);
      }

      // Sauvegarde dans le localStorage
      const annonces = JSON.parse(localStorage.getItem('annonces') || '[]');
      annonces.push(annonce);
      localStorage.setItem('annonces', JSON.stringify(annonces));

      alert("Annonce enregistrée !");
      form.reset();
    });
  }

  // 👉 Si on est sur la page annonces : affichage
  const annoncesContainer = document.getElementById('liste-annonces');
  if (annoncesContainer) {
    const annonces = JSON.parse(localStorage.getItem('annonces') || '[]');

    if (annonces.length === 0) {
      annoncesContainer.innerHTML = "<p>Aucune annonce pour l'instant.</p>";
      return;
    }

    annonces.forEach(annonce => {
      const div = document.createElement('div');
      div.className = 'annonce';

      div.innerHTML = `
        <h3>${annonce.nom} (${annonce.espece})</h3>
        <p><strong>Race :</strong> ${annonce.race}</p>
        <p><strong>Âge :</strong> ${annonce.age} mois</p>
        <p><strong>Prix :</strong> ${annonce.prix} €</p>
        <p><strong>Description :</strong> ${annonce.description}</p>
        ${annonce.photo ? `<img src="${annonce.photo}" alt="Photo de ${annonce.nom}" width="200" />` : ''}
        ${annonce.loof ? `<p><a href="${annonce.loof}" target="_blank">Voir le certificat LOOF</a></p>` : ''}
        <hr/>
      `;
      annoncesContainer.appendChild(div);
    });
  }
});



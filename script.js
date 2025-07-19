document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulaire-eleveur');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

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

      // Récupère les annonces existantes
      const annonces = JSON.parse(localStorage.getItem('annonces') || '[]');
      annonces.push(annonce);

      // Sauvegarde dans localStorage
      localStorage.setItem('annonces', JSON.stringify(annonces));

      alert("Annonce enregistrée !");
      form.reset();
    });
  }
});


<script>
  import Header  from "$lib/components/header.svelte";

  let selectedImage = null;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Valider le type de fichier (image uniquement)
    if (file && file.type.startsWith("image/")) {
      selectedImage = file;
    } else {
      alert("Veuillez sélectionner un fichier image valide.");
    }
  };

  const uploadImage = async () => {
  if (selectedImage) {
    const imagePayload = { url: selectedImage.name };

    try {
      const response = await fetch("http://localhost:8080/api/images", {
        method: "POST",
        body: JSON.stringify(imagePayload),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        alert("Image envoyée avec succès !");
      } else {
        const data = await response.json();
        if (data.error) {
          alert(`Erreur API: ${data.error}`);
        } else {
          alert("Une erreur s'est produite lors de l'envoi de l'image.");
        }
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
      alert("Une erreur s'est produite lors de la requête API.");
    }
  } else {
    alert("Veuillez sélectionner une image à envoyer.");
  }
};

</script>

<style>
  /* Vous pouvez ajouter du CSS pour personnaliser votre page ici */
</style>

<Header />
<main>
  <h1>Envoi d'image vers API</h1>
  <input type="file" accept="image/*" on:change={handleImageChange} />
  <button on:click={uploadImage}>Envoyer</button>
</main>
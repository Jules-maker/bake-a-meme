<script>
    let name = '';
    let email = '';
    let message = '';
  
    async function handleSubmit() {
  const response = await fetch('http://192.168.1.12:8080/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    console.log('Message envoyé avec succès !');
  } else {
    console.error('Erreur lors de l\'envoi du message');
  }
}

  </script>
  
  <form on:submit={handleSubmit} class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
      <input type="text" id="name" bind:value={name} class="border border-gray-300 rounded-lg p-2 w-full" />
    </div>
  
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email :</label>
      <input type="email" id="email" bind:value={email} class="border border-gray-300 rounded-lg p-2 w-full" />
    </div>
  
    <div class="mb-4">
      <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message :</label>
      <textarea id="message" bind:value={message} class="border border-gray-300 rounded-lg p-2 w-full" rows="4"></textarea>
    </div>
  
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Envoyer</button>
  </form>
  
  
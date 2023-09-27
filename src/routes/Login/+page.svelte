<script>
  import { username, login } from '../../lib/auth';
  import { goto } from '$app/navigation';

  let user = '';
  let pass = '';

  async function submitForm() {
    const loggedIn = await login(user, pass);

    if (loggedIn) {
      
      goto('/Tester');
    } else {
      console.error('Échec de la connexion');
    }
  }
</script>

<main>
  <form on:submit={submitForm} class="flex flex-col justify-center items-center">
    <label for="username" class="text-xl mb-4">Nom d'utilisateur:</label>
    <input type="text" bind:value={user} class="border-2 border-gray-300 rounded-lg p-2 w-full" />

    <label for="password" class="text-xl  mt-4 mb-4">Mot de passe:</label>
    <input type="password" bind:value={pass} class="border-2 border-gray-300 rounded-lg p-2 w-full" />

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Connexion</button>
  </form>

  <!-- <a href="/Register" class="text-blue-500 hover:text-blue-700 mt-4">Vous n'avez pas de compte? Créez un compte!</a> -->
</main>

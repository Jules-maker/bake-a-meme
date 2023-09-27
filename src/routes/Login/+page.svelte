<script>
    import { goto } from "$app/navigation";
    
        let username = '';
        let password = '';
    let isLogedIn = false;
    
        async function login() {
          const response = await fetch('http://192.168.1.12:8080/api/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            //mode: 'no-cors',//juste pour tester
          });
    
          if (response.ok) {
            console.log('Connexion réussie');
            isLogedIn = true;
            goto('/Tester')
          } else {
            console.error(error);
          }
        }
      </script>
    
    
<main>
  <form on:submit={login} class="flex flex-col justify-center items-center">
    <label for="username" class="text-xl mb-4">Nom d'utilisateur:</label>
    <input type="text" bind:value={username} class="border-2 border-gray-300 rounded-lg p-2 w-full" />

    <label for="password" class="text-xl  mt-4 mb-4">Mot de passe:</label>
    <input type="password" bind:value={password} class="border-2 border-gray-300 rounded-lg p-2 w-full" />

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Connexion</button>
  </form>

  <!-- <a href="/Register" class="text-blue-500 hover:text-blue-700 mt-4">Vous n'avez pas de compte? Créez un compte!</a> -->
</main>

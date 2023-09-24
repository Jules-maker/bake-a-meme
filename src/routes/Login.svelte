<script>
        import {  navigate } from "svelte-routing";

    let username = '';
    let password = '';


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
        // Le login a réussi, vous pouvez rediriger l'utilisateur ou effectuer d'autres actions ici
        console.log('Connexion réussie');
        navigate('/tester')
      } else {
        // Le login a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
        console.error(error);
      }
    }
  </script>



  <form on:submit={login}>
    <label>
      Nom d'utilisateur:
      <input type="text" bind:value={username} />
    </label>
    <label>
      Mot de passe:
      <input type="password" bind:value={password} />
    </label>
    <button type="submit">Connexion</button>
  </form>
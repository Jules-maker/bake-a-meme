<script>
    import { navigate } from "svelte-routing";
  
    let login = "";
    let password = "";
    let email = "";
    let registrationSuccess = false;
  
    async function register() {
      const response = await fetch("http://192.168.1.12:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password, email }),
      });
  
      if (response.ok) {
        // L'inscription a réussi, vous pouvez rediriger l'utilisateur vers la page de connexion
        console.log("Inscription réussie");
        registrationSuccess = true;
        navigate("/Tester"); // Utilisez navigate pour rediriger vers la page de connexion
      } else {
        // L'inscription a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
        console.error("Échec de l'inscription");
      }
    }
  </script>
  
  {#if registrationSuccess}
  <p>Inscription réussie ! Redirection vers la page de connexion...</p>
  {/if}
    
  <form on:submit={register}>
    <label>
      Nom d'utilisateur:
      <input type="text" bind:value={login} />
    </label>
    <label>
      Mot de passe:
      <input type="password" bind:value={password} />
    </label>
    <label>
      Email:
      <input type="email" bind:value={email} />
    </label>
    <button type="submit">Inscription</button>
  </form>
  
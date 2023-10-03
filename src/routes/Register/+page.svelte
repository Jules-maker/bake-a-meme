<script>
    import { navigate } from "svelte-routing";
    import { goto } from '$app/navigation';
  import { Toast } from "flowbite-svelte";

    let login = "";
    let password = "";
    let email = "";
  
    async function register() {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password, email }),
      });
  
      if (response.ok) {
        console.log("Inscription réussie");
        goto('/')
      } else {
        console.error("Échec de l'inscription");
      }
    }
  </script>
  
  
   <main>
    <form on:submit={register} class="flex flex-col justify-center items-center">
    <label for="login" class="text-xl  mb-4">Nom d'utilisateur:</label>
    <input type="text" bind:value={login} class="border-2 border-gray-300 rounded-lg p-2 w-full" />
  
    <label for="password" class="text-xl  mt-4 mb-4">Mot de passe:</label>
    <input type="password" bind:value={password} class="border-2 border-gray-300 rounded-lg p-2 w-full" />
  
    <label for="email" class="text-xl  mt-4 mb-4">Email:</label>
    <input type="email" bind:value={email} class="border-2 border-gray-300 rounded-lg p-2 w-full" />
  
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Inscription</button>
  </form>
  <!-- <a href="/Login" class="text-blue-500 hover:text-blue-700 mt-4">Vous avez pas un compte? connectez vous!</a> -->
  
   </main> 

<script>
  import Login from "./Login/+page.svelte";
  import HeaderNav from "./HeaderNav/+page.svelte";
  import Cookies from "./Cookies/+page.svelte"
  import { isAuthenticated, username, logout } from '$lib/auth';


  </script>
  
  <main>
    <HeaderNav />
      {#if $isAuthenticated}
    <p>Bienvenue, {$username} !</p>
    <button on:click={logout}>Se déconnecter</button>
  {:else}
    <p>Vous n'êtes pas connecté, visiteur</p>
  {/if}
<Cookies />
  </main>
  
  <style>
  </style>

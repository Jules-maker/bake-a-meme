<script>
    import { isAuthenticated, username, authToken,logout } from '$lib/auth';
  import { globalHistory } from 'svelte-routing/src/history';
    import HeaderNav from "../HeaderNav/+page.svelte";
  
 
  </script>
  
  <HeaderNav />
  
  {#if $isAuthenticated}
    <p>Bienvenue, {$username} !</p>
    <button on:click={logout}>Se déconnecter</button>
  {:else}
    <p>Vous n'êtes pas connecté.</p>
  {/if}
  
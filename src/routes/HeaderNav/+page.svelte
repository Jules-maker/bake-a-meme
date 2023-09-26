<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Modal } from 'flowbite-svelte';
  import Login from '../Login/+page.svelte';
  import Register from '../Register/+page.svelte';

  let formModal = false;
  let showLogin = true; // Utilisé pour afficher le formulaire de connexion par défaut

  function toggleForm() {
    formModal = true;
  }

  function toggleLogin() {
    showLogin = true;
  }

  function toggleRegister() {
    showLogin = false;
  }
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BAKE A MEME</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button on:click={toggleForm}>Form modal</Button>
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden} class="order-1">
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<!-- Affichez le modal en fonction de la variable formModal -->
{#if formModal}
  <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    {#if showLogin}
      <Login />
      <button on:click={toggleRegister}>Vous n'avez pas de compte? Inscrivez vous !</button>
    {:else}
      <Register />
      <button on:click={toggleLogin}>Vous avez un compte ? Connectez vous !</button>
    {/if}
  </Modal>
{/if}

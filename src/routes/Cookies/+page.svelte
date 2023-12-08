<script>
  import { onMount } from 'svelte';
  import Cookies from 'js-cookie';

  let showCookieMessage = !Cookies.get('cookieConsent');

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    showCookieMessage = false;
  };

  const declineCookies = () => {
    Cookies.remove('cookieConsent');
    Cookies.set('cookieConsent', 'rejected');
    showCookieMessage = false;
  };

  onMount(() => {
    // Mise à jour de showCookieMessage lorsque le cookie change
    $: showCookieMessage = !Cookies.get('cookieConsent');
  });
</script>

{#if showCookieMessage}
  <div class="cookie-consent fixed bottom-1 left-1 p-2 bg-gray-300 w-80 border border-white rounded-md z-50">
    <p>🍪 Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous l'utilisation des cookies ?</p>
    <div class="w-full text-right">
      <button on:click={acceptCookies} class="mr-1 bg-green-500 rounded-md p-2 text-white">Accepter</button>
      <button on:click={declineCookies} class="mr-1 bg-red-500 rounded-md p-2 text-white">Refuser</button>
    </div>
  </div>
{/if}

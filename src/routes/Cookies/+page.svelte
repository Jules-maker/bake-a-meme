<script>
    import Cookies from 'js-cookie';
  
    let showCookieMessage = !Cookies.get('cookieConsent'); // Vérifie si le cookie de consentement n'existe pas
  
    function acceptCookies() {
      Cookies.set('cookieConsent', 'accepted', { expires: 365 }); 
      showCookieMessage = false; // Cacher le message après avoir accepté
    }
  
    function declineCookies() {
      Cookies.remove('cookieConsent'); // Supprimer le cookie de consentement
      Cookies.set('cookieConsent', 'declined'); 

      showCookieMessage = false; // Cacher le message après avoir refusé
    }
  </script>
  
  {#if showCookieMessage}
    <div class="cookie-consent fixed bottom-1 left-1  p-2 bg-gray-300  w-80 border border-black rounded-md">
      <p>🍪 Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous l'utilisation des cookies ?</p>

      <div class="w-full text-right ">
         <button on:click={acceptCookies} class="mr-1 bg-green-500 rounded-md p-2 text-white">Accepter</button>
      <button on:click={declineCookies} class="mr-1 bg-red-500 rounded-md p-2 text-white">Refuser</button> 
      </div>
    
    </div>
  {/if}
  

  
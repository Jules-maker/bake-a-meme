// __layout.svelte

<script>
  import { onMount } from 'svelte';
  import { lightTheme, darkTheme } from './theme';

  let currentTheme = lightTheme;

  onMount(() => {
    // Vérifiez le thème stocké dans le stockage local ou utilisez une préférence système
    // pour déterminer le thème initial
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      currentTheme = savedTheme === 'dark' ? darkTheme : lightTheme;
    }
  });

  function toggleTheme() {
    currentTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
    // Enregistrez le thème dans le stockage local pour le persistant
    localStorage.setItem('theme', currentTheme === lightTheme ? 'light' : 'dark');
  }
</script>

<div style="background-color: {currentTheme.backgroundColor}; color: {currentTheme.textColor}">
  <!-- Le reste de votre application -->
  <button on:click={toggleTheme}>Toggle Theme</button>
  
</div>

<script>
  // register.svelte in front/bake-a-meme/src/routes/register.svelte
    // import { navigate } from 'svelte-routing';
    // import { auth } from '../stores.js';
    // import { signIn } from '../api.js';
    // import { setCookie } from '../utils.js';
    // import { goto } from '$app/navigation';
    import { get } from 'svelte/store';
    // import { user } from '../stores.js';
    import { setContext } from 'svelte';
    import { set } from 'svelte/store';
    import { onMount } from 'svelte';
    /** Logic for fetching the API **/

    let username = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let error = null;


  </script>
  
  <h1>Register</h1>

<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" />

  <label for="confirmPassword">Confirm Password:</label>
  <input type="password" id="confirmPassword" name="confirmPassword" />

  <button type="submit">Register</button>
</form>
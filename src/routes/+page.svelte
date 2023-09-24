<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<script>
    import Login from './Login.svelte';
  import Register from './Register.svelte';
  import { Router, Route } from 'svelte-routing';
  import Tester from './Tester.svelte';
  </script>
  
  <main>
    <h1>Formulaire de Connexion</h1>
    <Login />
    <Register/>
  </main>
  
  <style>
  </style>
  <Router>
    <!-- Autres routes -->
  
    <!-- Route pour "/Tester" -->
    <Route path="/tester" component={Tester} />
  
  </Router>
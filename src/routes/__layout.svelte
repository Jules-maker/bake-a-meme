<script>
  import { Route,Router } from "svelte-routing";
  import Tester from "./Tester.svelte";
</script>

<main>
  <Router>
    <!-- Autres routes -->
  
    <!-- Route pour "/Tester" -->
    <Route path="/Tester" component={Tester} />
  
  </Router>
</main>

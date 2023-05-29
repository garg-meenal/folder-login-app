<!-- router.svelte -->
<script>
    import { Router, Route } from 'svelte-routing';
    import Login from './lib/Login.svelte';
    import Folder from './lib/Folder.svelte';
   // import NotFound from './components/NotFound.svelte';
  </script>
  
  <Router>
    <Route path="/" component={Login} />
    <Route path="/folder" component={Folder} />
  </Router>
  
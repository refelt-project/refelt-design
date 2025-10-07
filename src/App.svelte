<script>
  import Router from 'svelte-spa-router';
  import { Navbar } from './rich';
  import Home from './pages/Home.svelte';
  import GetStarted from './pages/GetStarted.svelte';
  import './lib/styles.css';

  const routes = {
    '/': Home,
    '/get-started': GetStarted
  };
</script>

<Navbar />

<main>
  <Router {routes} />
</main>

<style>
  main {
    padding: 48px 0;
  }
</style>
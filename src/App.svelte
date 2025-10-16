<script>
  import Router from "svelte-spa-router";
  import { Navbar, Footer } from "./layout";
  import { createRoutes } from "@/lib/router";
  import "@/lib/uikit/styles.css";
  const routes = createRoutes();
  if (import.meta.env.DEV) {
    console.log("📍 Auto-generated routes:", routes);
  }
</script>

<Navbar />

<main>
  <Router {routes} />
</main>
<Footer />

<style>
  main {
   
    flex-grow: 1;
  }
</style>

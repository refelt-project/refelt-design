<script>
    import Router from "svelte-spa-router";
    import { Navbar, Footer } from './rich';
    import { createRoutes } from '@/lib/router';
    import "@/lib/styles.css";
  
    // Auto-generated routes from pages/ folder
    const routes = createRoutes();
  
    // Optional: Log routes in development
    if (import.meta.env.DEV) {
      console.log('📍 Auto-generated routes:', routes);
    }
  </script>
  
  <Navbar />
  
  <main>
    <Router {routes} />
  </main>
  <Footer />
  
  <style>
    main {
      padding: 48px 0;
    }
  </style>
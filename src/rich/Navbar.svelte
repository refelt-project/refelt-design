<script>
  import { link, location } from 'svelte-spa-router';
  import ThemeToggle from './ThemeToggle.svelte';
  import Logo from './Logo.svelte';
  
  $: currentPath = $location;
</script>

<nav class="navbar">
  <div class="nav-content">
    <Logo size="medium" />
    
    <div class="nav-links">
      <a 
        href="/" 
        use:link 
        class:active={currentPath === '/'}
      >
        Home
      </a>
      <a 
        href="/get-started" 
        use:link
        class:active={currentPath === '/get-started'}
      >
        Get Started
      </a>
    </div>
    
    <div class="nav-right">
      <ThemeToggle />
    </div>
  </div>
</nav>

<style>
  .navbar {
    border-bottom: 1px solid var(--border);
    background: var(--bg);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .nav-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    display: flex;
    gap: 32px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
    position: relative;
  }
  
  .nav-links a:hover {
    color: var(--text);
  }
  
  .nav-links a.active {
    color: var(--text);
  }
  
  .nav-links a.active::after {
    content: '';
    position: absolute;
    bottom: -17px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent);
  }
  
  .nav-right {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      position: static;
      transform: none;
    }
    
    .nav-content {
      flex-wrap: wrap;
      gap: 16px;
    }
  }
</style>
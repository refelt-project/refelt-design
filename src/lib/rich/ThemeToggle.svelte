<script>
    import { onMount } from 'svelte';
    
    let theme = 'dark';
    
    onMount(() => {
      // Load saved theme or default to dark
      const savedTheme = localStorage.getItem('theme') || 'dark';
      theme = savedTheme;
      applyTheme(savedTheme);
    });
    
    function applyTheme(newTheme) {
      if (newTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    }
    
    function toggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      theme = newTheme;
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    }
  </script>
  
  <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
    {#if theme === 'dark'}
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    {/if}
  </button>
  
  <style>
    .theme-toggle {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: transparent;
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      color: var(--text);
    }
    
    .theme-toggle:hover {
      background: var(--bg-elevated);
      border-color: var(--border-strong);
    }
    
    .theme-toggle:active {
      transform: scale(0.95);
    }
  </style>
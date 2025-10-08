<script>
    import { link } from 'svelte-spa-router';
    
    export let size = 'medium'; // 'small', 'medium', 'large'
    
    const sizes = {
      small: { svg: 20, text: 16 },
      medium: { svg: 24, text: 18 },
      large: { svg: 28, text: 20 }
    };
  </script>
  
  <a href="/" use:link class="logo logo-{size}">
    <svg 
      width={sizes[size].svg} 
      height={sizes[size].svg} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="2"/>
      <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Refelt</span>
  </a>
  
  <style>
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: var(--text);
      text-decoration: none;
      transition: opacity 0.2s;
      width: fit-content;
    }
    
    .logo:hover {
      opacity: 0.8;
    }
    
    .logo-small span {
      font-size: 16px;
    }
    
    .logo-medium span {
      font-size: 18px;
    }
    
    .logo-large span {
      font-size: 20px;
    }
  </style>
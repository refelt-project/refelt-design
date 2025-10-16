<script>
    import { Container, Stack, Text } from "@/lib/uikit";
    import { ThemeToggle } from "@/lib/rich";
    import { push } from "svelte-spa-router";
    import { 
      LayoutGrid, 
      Type, 
      SquareMousePointer, 
      Table2, 
      CreditCard,
      Sparkles,
      Home
    } from "lucide-svelte";
    
    export let title = "";
    export let description = "";
    
    const navigation = [
      { 
        label: "Overview", 
        href: "/showcase", 
        icon: Home 
      },
      { 
        label: "Buttons", 
        href: "/showcase/buttons", 
        icon: SquareMousePointer 
      },
      { 
        label: "Forms", 
        href: "/showcase/forms", 
        icon: Table2 
      },
      { 
        label: "Cards", 
        href: "/showcase/cards", 
        icon: CreditCard 
      },
      { 
        label: "Layout", 
        href: "/showcase/layout", 
        icon: LayoutGrid 
      },
      { 
        label: "Typography", 
        href: "/showcase/typography", 
        icon: Type 
      },
      { 
        label: "Advanced", 
        href: "/showcase/advanced", 
        icon: Sparkles 
      }
    ];
    
    $: currentPath = window.location.hash.replace('#', '');
    
    function isActive(href) {
      return currentPath === href;
    }
    
    function navigate(href) {
      push(href);
    }
  </script>
  
  <div class="showcase-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
     
      
      <nav class="sidebar-nav">
        {#each navigation as item}
          <button 
            class="nav-item" 
            class:active={isActive(item.href)}
            on:click={() => navigate(item.href)}
          >
            <svelte:component this={item.icon} size={18} strokeWidth={2} />
            <span>{item.label}</span>
          </button>
        {/each}
      </nav>
    </aside>
    
    <!-- Main Content -->
    <main class="content">
      <Container>
        <Stack class="stack--gap-xl">
          {#if title}
            <Stack class="stack--gap-md page-header">
              <Text as="h1" class="text--xxl">{title}</Text>
              {#if description}
                <Text class="text--lg text--muted">{description}</Text>
              {/if}
            </Stack>
          {/if}
          
          <div class="page-content">
            <slot />
          </div>
        </Stack>
      </Container>
    </main>
  </div>
  
  <style>
    .showcase-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 100vh;
      gap: 0;
    }
    
    /* Sidebar */
    .sidebar {
      background: var(--bg-card);
      border-right: 1px solid var(--border);
      padding: var(--space-lg);
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
    }
    
    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-xl);
      padding-bottom: var(--space-lg);
      border-bottom: 1px solid var(--border);
    }
    
    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: var(--radius-md);
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all var(--transition-base);
      width: 100%;
      text-align: left;
    }
    
    .nav-item:hover {
      background: var(--bg-elevated);
      color: var(--text);
    }
    
    .nav-item.active {
      background: var(--accent);
      color: var(--accent-fg);
    }
    
    /* Content */
    .content {
      padding: var(--space-xl) 0;
      overflow-x: hidden;
    }
    
    .page-header {
      padding-bottom: var(--space-lg);
      border-bottom: 1px solid var(--border);
    }
    
    .page-content {
      padding-top: var(--space-lg);
    }
    
    /* Mobile Responsive */
    @media (max-width: 1024px) {
      .showcase-layout {
        grid-template-columns: 1fr;
      }
      
      .sidebar {
        position: fixed;
        top: 0;
        left: -280px;
        z-index: 100;
        transition: left var(--transition-base);
        box-shadow: var(--shadow-lg);
      }
      
      .sidebar.open {
        left: 0;
      }
    }
    
    /* Scrollbar */
    .sidebar::-webkit-scrollbar {
      width: 6px;
    }
    
    .sidebar::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .sidebar::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 3px;
    }
  </style>
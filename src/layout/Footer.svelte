<script>
    import { link } from 'svelte-spa-router';
    import Logo from './Logo.svelte';
    
    const currentYear = new Date().getFullYear();
    
    // ✅ CRITICAL FIX: Zmieniono nazwę z 'link' na 'footerLink'
    // Kolizja: zmienna 'link' vs funkcja 'link' z svelte-spa-router
    const footerLinks = {
      product: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Changelog', href: '/changelog' },
        { label: 'Roadmap', href: '/roadmap' }
      ],
      resources: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Guides', href: '/guides' },
        { label: 'Community', href: '/community' }
      ],
      company: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' }
      ],
      legal: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Security', href: '/security' }
      ]
    };
    
    const socialLinks = [
      { 
        name: 'GitHub', 
        href: 'https://github.com',
        icon: `<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>`
      },
      { 
        name: 'Twitter', 
        href: 'https://twitter.com',
        icon: `<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>`
      },
      { 
        name: 'Discord', 
        href: 'https://discord.com',
        icon: `<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line>`
      }
    ];
  </script>
  
  <footer class="footer">
    <div class="footer-content">
      
      <!-- Top Section: Logo + Links -->
      <div class="footer-top">
        
        <!-- Brand Section -->
        <div class="footer-brand">
          <Logo size="large" />
          <p class="footer-tagline">Building the future of interactive film experiences.</p>
          
          <!-- Social Links -->
          <div class="social-links">
            {#each socialLinks as social}
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
                class="social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {@html social.icon}
                </svg>
              </a>
            {/each}
          </div>
        </div>
        
        <!-- Links Grid -->
        <div class="footer-links-grid">
          
          <div class="footer-links-column">
            <h3 class="footer-links-title">Product</h3>
            <ul class="footer-links-list">
              {#each footerLinks.product as footerLink}
                <li>
                  <a href={footerLink.href} use:link>{footerLink.label}</a>
                </li>
              {/each}
            </ul>
          </div>
          
          <div class="footer-links-column">
            <h3 class="footer-links-title">Resources</h3>
            <ul class="footer-links-list">
              {#each footerLinks.resources as footerLink}
                <li>
                  <a href={footerLink.href} use:link>{footerLink.label}</a>
                </li>
              {/each}
            </ul>
          </div>
          
          <div class="footer-links-column">
            <h3 class="footer-links-title">Company</h3>
            <ul class="footer-links-list">
              {#each footerLinks.company as footerLink}
                <li>
                  <a href={footerLink.href} use:link>{footerLink.label}</a>
                </li>
              {/each}
            </ul>
          </div>
          
          <div class="footer-links-column">
            <h3 class="footer-links-title">Legal</h3>
            <ul class="footer-links-list">
              {#each footerLinks.legal as footerLink}
                <li>
                  <a href={footerLink.href} use:link>{footerLink.label}</a>
                </li>
              {/each}
            </ul>
          </div>
          
        </div>
      </div>
      
      <!-- Bottom Section: Copyright -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          © {currentYear} Refelt. All rights reserved.
        </p>
        <p class="footer-made-with">
          Made with 
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="heart-icon">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          in Poland
        </p>
      </div>
      
    </div>
  </footer>
  
  <style>
    .footer {
      border-top: 1px solid var(--border);
      background: var(--bg);
      margin-top: auto;
    }
    
    .footer-content {
      max-width: 1440px;
      margin: 0 auto;
      padding: 64px 24px 32px;
    }
    
    /* ============================================
       TOP SECTION
       ============================================ */
    .footer-top {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 64px;
      padding-bottom: 48px;
    }
    
    /* Brand Section */
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .footer-tagline {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.6;
      margin: 0;
      max-width: 320px;
    }
    
    /* Social Links */
    .social-links {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-muted);
      transition: all 0.2s;
    }
    
    .social-link:hover {
      background: var(--bg-elevated);
      border-color: var(--border-strong);
      color: var(--text);
    }
    
    /* Links Grid */
    .footer-links-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    }
    
    .footer-links-column {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .footer-links-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--text);
      margin: 0;
    }
    
    .footer-links-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .footer-links-list a {
      font-size: 14px;
      color: var(--text-muted);
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .footer-links-list a:hover {
      color: var(--text);
    }
    
    /* ============================================
       BOTTOM SECTION
       ============================================ */
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 32px;
      border-top: 1px solid var(--border);
    }
    
    .footer-copyright,
    .footer-made-with {
      font-size: 13px;
      color: var(--text-muted);
      margin: 0;
    }
    
    .footer-made-with {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .heart-icon {
      color: #ef4444;
      animation: heartbeat 1.5s ease-in-out infinite;
    }
    
    @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      10% {
        transform: scale(1.1);
      }
      20% {
        transform: scale(1);
      }
    }
    
    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 1024px) {
      .footer-top {
        grid-template-columns: 1fr;
        gap: 48px;
      }
      
      .footer-links-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 640px) {
      .footer-content {
        padding: 48px 24px 24px;
      }
      
      .footer-links-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .footer-bottom {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
      }
    }
  </style>
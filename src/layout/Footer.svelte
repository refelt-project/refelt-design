<script>
  import { link } from "svelte-spa-router";
  import { Container, Stack, Grid, Text, Separator } from "@/lib/uikit";
  import Logo from "./Logo.svelte";

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Roadmap", href: "/roadmap" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: `<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>`,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: `<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>`,
    },
    {
      name: "Discord",
      href: "https://discord.com",
      icon: `<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line>`,
    },
  ];
</script>

<footer style="padding: var(--space-lg) 0; background: var(--bg-elevated);">
  <Container>
    <Separator class="separator--space separator--spacing-xl" />
    <!-- Top Section: Brand + 3 Link Columns -->
    <Grid columns={2} class="grid--gap-xxl grid--lg-1">
      <!-- Brand Section -->
      <Stack class="stack--gap-md">
        <Logo size="large" />
        <div class="footer-tagline-wrapper">
          <Text class="text--sm text--muted">
            Building the future of interactive film experiences.
          </Text>
        </div>

        <!-- Social Links -->
        <Stack class="stack--horizontal stack--gap-sm footer-social">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              class="social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {@html social.icon}
              </svg>
            </a>
          {/each}
        </Stack>
      </Stack>

      <!-- 3 Link Columns -->
      <Grid columns={3} class="grid--gap-lg grid--sm-1">
        <!-- Column 1: Product -->
        <Stack class="stack--gap-md">
          <Text class="text--sm text--bold">Product</Text>
          <Stack class="stack--gap-sm">
            {#each footerLinks.product as footerLink}
              <a href={footerLink.href} use:link class="footer-link">
                <Text class="text--sm text--muted">{footerLink.label}</Text>
              </a>
            {/each}
          </Stack>
        </Stack>

        <!-- Column 2: Company -->
        <Stack class="stack--gap-md">
          <Text class="text--sm text--bold">Company</Text>
          <Stack class="stack--gap-sm">
            {#each footerLinks.company as footerLink}
              <a href={footerLink.href} use:link class="footer-link">
                <Text class="text--sm text--muted">{footerLink.label}</Text>
              </a>
            {/each}
          </Stack>
        </Stack>

        <!-- Column 3: Legal -->
        <Stack class="stack--gap-md">
          <Text class="text--sm text--bold">Legal</Text>
          <Stack class="stack--gap-sm">
            {#each footerLinks.legal as footerLink}
              <a href={footerLink.href} use:link class="footer-link">
                <Text class="text--sm text--muted">{footerLink.label}</Text>
              </a>
            {/each}
          </Stack>
        </Stack>
      </Grid>
    </Grid>

    <!-- Separator -->
    <Separator class="separator--spacing-lg" />

    <!-- Bottom Section: Copyright -->
    <Stack class="stack--horizontal">
      <Text class="text--sm text--muted">
        © {currentYear} Refelt. All rights reserved.
      </Text>
      <Stack class="stack--horizontal stack--gap-sm stack--align-center">
        <Text class="text--sm text--muted">Made with</Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          class="heart-icon"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
        </svg>
        <Text class="text--sm text--muted">in Poland</Text>
      </Stack>
    </Stack>
  </Container>
</footer>

<style>
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: var(--radius-md);
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-muted);
    transition: all var(--transition-base);
  }

  .social-link:hover {
    background: var(--bg-elevated);
    border-color: var(--border-strong);
    color: var(--text);
  }

  .footer-link {
    text-decoration: none;
    transition: color var(--transition-base);
  }

  .footer-link:hover :global(.text) {
    color: var(--text);
  }

  .heart-icon {
    color: #ef4444;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(1);
    }
  }
</style>

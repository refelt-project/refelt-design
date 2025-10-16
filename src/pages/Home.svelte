<!-- MPM UIKit - Landing Page -->
<script>
  import {
    Text,
    Button,
    Badge,
    Card,
    Container,
    Stack,
    Grid,
    Separator,
  } from "@/lib/uikit";
  import PaymentForm from "../parts/PaymentForm.svelte";
  import {
    Code2,
    Palette,
    Zap,
    Package,
    Globe,
    Smartphone,
    ArrowRight,
    Github,
    Download,
  } from "lucide-svelte";
</script>

<Stack class="stack--gap-xxl">
  <Separator class="separator--space separator--spacing-xxl" decorative />

  <!-- HERO SECTION -->
  <Container>
    <Grid columns={2} class="grid--gap-xxl grid--lg-1">
      <!-- LEFT: Content -->
      <Stack class="stack--gap-xl">
        <Text
          class="text--xs text--muted"
          style="letter-spacing: 0.15em; text-transform: uppercase;"
        >
          MPM UI KIT
        </Text>

        <Text
          as="h1"
          class="text--bold"
          style="font-size: clamp(48px, 7vw, 72px); line-height: 0.95; letter-spacing: -0.03em;"
        >
          Build Beautiful<br />Interfaces Fast
        </Text>

        <Text class="text--lg text--muted" style="max-width: 480px;">
          A complete Svelte component library built with the component--modifier
          pattern. Semantic props, flexible styling, and production-ready code.
        </Text>

        <Stack class="stack--horizontal stack--gap-lg">
          <Button variant="accent" class="btn--lg">
            Get Started
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" class="btn--lg">
            <Github size={18} />
            View on GitHub
          </Button>
        </Stack>
      </Stack>

      <!-- RIGHT: Features -->
      <Stack class="stack--gap-lg">
        <div style="margin-top:-200px; rotate: 2deg;">
          <Card><PaymentForm /></Card>
        </div>
      </Stack>
    </Grid>
  </Container>

  

  <Separator class="separator--space" decorative />
</Stack>

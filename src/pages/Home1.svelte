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
  } from '@/lib/uikit';
  import { Sparkles, Film, Zap, Users, Award, ChevronRight } from 'lucide-svelte';
</script>

<div class="landing">
  <!-- ANNOUNCEMENT BAR -->
  <div class="announcement">
    <Container>
      <Stack class="stack--horizontal stack--gap-md stack--align-center" style="justify-content: center;">
        <Badge variant="info" class="badge--sm">NEW</Badge>
        <Text class="text--sm">
          We've launched 30+ new interactive templates! Explore them now
        </Text>
      </Stack>
    </Container>
  </div>

  <!-- HERO SECTION -->
  <section class="hero">
    <Container>
      <Grid columns={2} class="grid--gap-xxl grid--lg-1">
        <!-- LEFT: Hero Content -->
        <Stack class="stack--gap-lg">
          <Badge variant="info" class="badge--md" style="width: fit-content; display: flex; align-items: center; gap: var(--space-sm);">
            <Sparkles size={14} />
            Interactive Film Builder
          </Badge>

          <Text as="h1" class="text--xxl text--bold" style="font-size: 56px; line-height: 1.1; letter-spacing: -0.02em;">
            Your Complete Platform for Interactive Films and Branching Stories
          </Text>

          <Text class="text--lg text--muted" style="max-width: 540px;">
            With our premium builder, React Flow integration, and powerful features,
            you'll be able to create interactive experiences ranging from small-scale
            to enterprise-level in no time.
          </Text>

          <Stack class="stack--horizontal stack--gap-md" style="flex-wrap: wrap;">
            <Button variant="accent" class="btn--lg">
              Start Building Free
              <ChevronRight size={18} />
            </Button>
            <Button variant="outline" class="btn--lg">
              View Demo Projects
            </Button>
          </Stack>

          <!-- STATS ROW -->
          <Stack class="stack--horizontal stack--gap-lg" style="flex-wrap: wrap;">
            <Stack class="stack--gap-sm">
              <Text class="text--xl text--bold">5,000+</Text>
              <Text class="text--sm text--muted">Active Creators</Text>
            </Stack>
            <Separator orientation="vertical" style="height: 40px;" />
            <Stack class="stack--gap-sm">
              <Text class="text--xl text--bold">10,000+</Text>
              <Text class="text--sm text--muted">Films Created</Text>
            </Stack>
            <Separator orientation="vertical" style="height: 40px;" />
            <Stack class="stack--gap-sm">
              <Text class="text--xl text--bold">150+</Text>
              <Text class="text--sm text--muted">Templates</Text>
            </Stack>
          </Stack>
        </Stack>

        <!-- RIGHT: Floating UI Elements -->
        <div class="floating-container">
          <Card class="floating-card card-main">
            <Stack class="stack--gap-md stack--align-center" style="text-align: center;">
              <div class="icon-box">
                <Film size={24} />
              </div>
              <Text class="text--base text--bold">Scene Editor</Text>
              <Text class="text--sm text--muted">
                Drag-and-drop interface with React Flow
              </Text>
              <Badge variant="success" class="badge--sm">Live</Badge>
            </Stack>
          </Card>

          <Card class="floating-card card-analytics">
            <Stack class="stack--gap-sm">
              <Text class="text--sm text--bold">Viewer Analytics</Text>
              <div class="chart">
                <div style="flex: 1; height: 40%; background: var(--accent); border-radius: 4px; opacity: 0.8;"></div>
                <div style="flex: 1; height: 70%; background: var(--accent); border-radius: 4px; opacity: 0.8;"></div>
                <div style="flex: 1; height: 55%; background: var(--accent); border-radius: 4px; opacity: 0.8;"></div>
                <div style="flex: 1; height: 90%; background: var(--accent); border-radius: 4px; opacity: 0.8;"></div>
                <div style="flex: 1; height: 65%; background: var(--accent); border-radius: 4px; opacity: 0.8;"></div>
              </div>
              <Text class="text--xs text--muted">+125% engagement this month</Text>
            </Stack>
          </Card>

          <Card class="floating-card card-stats">
            <Stack class="stack--horizontal stack--gap-md stack--align-center">
              <div class="icon-box-sm">
                <Users size={16} />
              </div>
              <Stack class="stack--gap-sm">
                <Text class="text--sm text--bold">2,450</Text>
                <Text class="text--xs text--muted">Active viewers</Text>
              </Stack>
            </Stack>
          </Card>

          <div class="icon-float icon-1">
            <Zap size={20} color="var(--accent)" />
          </div>
          <div class="icon-float icon-2">
            <Award size={20} color="var(--status-success)" />
          </div>
          <div class="icon-float icon-3">
            <Sparkles size={20} color="var(--status-warning)" />
          </div>
        </div>
      </Grid>
    </Container>
  </section>

  <!-- FEATURES SECTION -->
  <section class="section">
    <Container>
      <Stack class="stack--gap-xxl">
        <Stack class="stack--gap-md stack--align-center" style="text-align: center;">
          <Badge variant="info" class="badge--md">Features</Badge>
          <Text as="h2" class="text--xxl text--bold" style="max-width: 700px;">
            Everything you need to create engaging interactive films
          </Text>
          <Text class="text--lg text--muted" style="max-width: 600px;">
            Powerful tools designed for filmmakers, game designers, and storytellers
          </Text>
        </Stack>

        <Grid class="grid--gap-lg grid--md-2 grid--sm-1">
          <Card class="card--p-lg feature-card">
            <Stack class="stack--gap-md">
              <div class="icon-box">
                <Film size={28} />
              </div>
              <Text class="text--lg text--bold">Visual Flow Editor</Text>
              <Text class="text--sm text--muted">
                Built on React Flow for seamless scene management. Create complex
                branching narratives with an intuitive drag-and-drop interface.
              </Text>
            </Stack>
          </Card>

          <Card class="card--p-lg feature-card">
            <Stack class="stack--gap-md">
              <div class="icon-box">
                <Zap size={28} />
              </div>
              <Text class="text--lg text--bold">Real-time Collaboration</Text>
              <Text class="text--sm text--muted">
                Work with your team in real-time. Multiple editors can work on
                different scenes simultaneously with instant sync.
              </Text>
            </Stack>
          </Card>

          <Card class="card--p-lg feature-card">
            <Stack class="stack--gap-md">
              <div class="icon-box">
                <Users size={28} />
              </div>
              <Text class="text--lg text--bold">Viewer Analytics</Text>
              <Text class="text--sm text--muted">
                Track how viewers interact with your content. See which paths are
                most popular and optimize your narrative accordingly.
              </Text>
            </Stack>
          </Card>

          <Card class="card--p-lg feature-card">
            <Stack class="stack--gap-md">
              <div class="icon-box">
                <Award size={28} />
              </div>
              <Text class="text--lg text--bold">Premium Templates</Text>
              <Text class="text--sm text--muted">
                Start with professional templates. From educational content to
                interactive marketing campaigns, we've got you covered.
              </Text>
            </Stack>
          </Card>
        </Grid>
      </Stack>
    </Container>
  </section>

  <!-- TYPOGRAPHY SHOWCASE -->
  <section class="section">
    <Container>
      <Stack class="stack--gap-xxl">
        <Stack class="stack--gap-md stack--align-center" style="text-align: center;">
          <Text as="h2" class="text--xxl text--bold">Beautiful Typography</Text>
          <Text class="text--lg text--muted">
            Every detail matters in creating engaging stories
          </Text>
        </Stack>

        <Card class="card--p-lg">
          <Stack class="stack--gap-xl">
            <Stack class="stack--gap-sm">
              <Text class="text--xs text--muted">EXTRA SMALL</Text>
              <Text class="text--xs">
                The quick brown fox jumps over the lazy dog
              </Text>
            </Stack>

            <Stack class="stack--gap-sm">
              <Text class="text--xs text--muted">SMALL</Text>
              <Text class="text--sm">
                The quick brown fox jumps over the lazy dog
              </Text>
            </Stack>

            <Stack class="stack--gap-sm">
              <Text class="text--xs text--muted">BASE</Text>
              <Text class="text--base">
                The quick brown fox jumps over the lazy dog
              </Text>
            </Stack>

            <Stack class="stack--gap-sm">
              <Text class="text--xs text--muted">LARGE</Text>
              <Text class="text--lg">
                The quick brown fox jumps over the lazy dog
              </Text>
            </Stack>

            <Stack class="stack--gap-sm">
              <Text class="text--xs text--muted">EXTRA LARGE</Text>
              <Text class="text--xl">
                The quick brown fox jumps over the lazy dog
              </Text>
            </Stack>

            <Stack class="stack--gap-sm">
              <Text class="text--xs text--muted">2X LARGE</Text>
              <Text class="text--xxl">
                The quick brown fox jumps
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  </section>

  <!-- TESTIMONIAL SECTION -->
  <section class="section testimonials">
    <Container>
      <Stack class="stack--gap-xxl">
        <Stack class="stack--gap-md stack--align-center" style="text-align: center;">
          <Badge variant="success" class="badge--md">Testimonials</Badge>
          <Text as="h2" class="text--xxl text--bold">
            Loved by creators worldwide
          </Text>
        </Stack>

        <Grid class="grid--gap-lg grid--lg-2 grid--sm-1">
          <Card class="card--p-lg">
            <Stack class="stack--gap-md">
              <div style="font-size: 20px;">⭐⭐⭐⭐⭐</div>
              <Text class="text--base">
                "Choosewise completely transformed how we create interactive training
                content. The React Flow integration makes complex scenarios incredibly
                easy to manage."
              </Text>
              <Stack class="stack--horizontal stack--gap-md stack--align-center">
                <div class="avatar">JD</div>
                <Stack class="stack--gap-sm">
                  <Text class="text--sm text--bold">John Doe</Text>
                  <Text class="text--xs text--muted">Creative Director at TechCorp</Text>
                </Stack>
              </Stack>
            </Stack>
          </Card>

          <Card class="card--p-lg">
            <Stack class="stack--gap-md">
              <div style="font-size: 20px;">⭐⭐⭐⭐⭐</div>
              <Text class="text--base">
                "As a filmmaker, I was skeptical about digital interactive tools. But
                Choosewise proved me wrong. It's intuitive, powerful, and actually fun
                to use."
              </Text>
              <Stack class="stack--horizontal stack--gap-md stack--align-center">
                <div class="avatar">SM</div>
                <Stack class="stack--gap-sm">
                  <Text class="text--sm text--bold">Sarah Miller</Text>
                  <Text class="text--xs text--muted">Independent Filmmaker</Text>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Stack>
    </Container>
  </section>

  <!-- CTA SECTION -->
  <section class="section">
    <Container>
      <Card class="card--p-lg cta-card">
        <Stack class="stack--gap-lg stack--align-center" style="text-align: center;">
          <Badge variant="accent" class="badge--md">Get Started Today</Badge>
          <Text as="h2" class="text--xxl text--bold" style="max-width: 600px;">
            Ready to create your first interactive film?
          </Text>
          <Text class="text--lg text--muted" style="max-width: 500px;">
            Join thousands of creators already building amazing interactive experiences
          </Text>
          <Stack class="stack--horizontal stack--gap-md" style="flex-wrap: wrap; justify-content: center;">
            <Button variant="accent" class="btn--lg">
              Start Free Trial
              <ChevronRight size={18} />
            </Button>
            <Button variant="ghost" class="btn--lg">
              Schedule Demo
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Container>
  </section>

 
</div>

<style>
  .landing {
    min-height: 100vh;
    background: var(--bg);
  }

  .announcement {
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    padding: var(--space-md) 0;
  }

  .hero {
    padding: var(--space-xxl) 0;
  }

  .section {
    padding: var(--space-xxl) 0;
  }

  .testimonials {
    background: var(--bg-elevated);
  }

  .footer {
    border-top: 1px solid var(--border);
    padding: var(--space-xl) 0;
  }

  /* Floating cards - position absolute */
  .floating-container {
    position: relative;
    height: 600px;
  }

  .floating-card {
    position: absolute;
    animation: float 6s ease-in-out infinite;
    box-shadow: var(--shadow-lg);
  }

  .card-main {
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
  }

  .card-analytics {
    top: 280px;
    right: 20px;
    width: 200px;
    animation-delay: 1s;
  }

  .card-stats {
    top: 400px;
    left: 20px;
    animation-delay: 2s;
  }

  .icon-float {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    background: var(--bg-card);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md);
    animation: float 8s ease-in-out infinite;
  }

  .icon-1 {
    top: 100px;
    right: 80px;
    animation-delay: 0.5s;
  }

  .icon-2 {
    top: 180px;
    left: 40px;
    animation-delay: 1.5s;
  }

  .icon-3 {
    bottom: 150px;
    right: 150px;
    animation-delay: 2.5s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  /* Utility */
  .icon-box {
    width: 56px;
    height: 56px;
    border-radius: var(--radius-lg);
    background: var(--accent);
    color: var(--accent-fg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-box-sm {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--accent);
    color: var(--accent-fg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }

  .chart {
    display: flex;
    align-items: flex-end;
    gap: var(--space-sm);
    height: 80px;
  }

  .feature-card {
    transition: all var(--transition-slow);
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .cta-card {
    background: var(--bg-elevated);
  }
</style>
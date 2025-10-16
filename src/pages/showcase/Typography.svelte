<script>
  import { Text, Stack, Card, Separator } from "@/lib/uikit";
  import ShowcaseLayout from "../../parts/showcase/ShowcaseLayout.svelte";
  import ComponentPreview from "../../parts/showcase/ComponentPreview.svelte";
</script>

<ShowcaseLayout
  title="Typography"
  description="Text component with semantic sizing and style modifiers"
>
  <!-- Sizes Overview -->
  <ComponentPreview
    title="Size Scale"
    description="Six size variants creating clear typographic hierarchy"
    code={`<Text class="text--xxl">Display</Text>
<Text class="text--xl">Heading</Text>
<Text class="text--lg">Subheading</Text>
<Text class="text--base">Body</Text>
<Text class="text--sm">Caption</Text>
<Text class="text--xs">Label</Text>`}
  >
    <Stack class="stack--gap-xl" style="width: 100%;">
      <Stack class="stack--gap-sm">
        <Text class="text--xs text--muted">36PX / 700 / -0.03EM</Text>
        <Text class="text--xxl">Display Typography</Text>
      </Stack>

      <Stack class="stack--gap-sm">
        <Text class="text--xs text--muted">20PX / 600 / -0.02EM</Text>
        <Text class="text--xl">Heading Typography</Text>
      </Stack>

      <Stack class="stack--gap-sm">
        <Text class="text--xs text--muted">18PX / 500 / -0.01EM</Text>
        <Text class="text--lg">Subheading Typography</Text>
      </Stack>

      <Stack class="stack--gap-sm">
        <Text class="text--xs text--muted">16PX / 400 / NORMAL</Text>
        <Text class="text--base">Body Typography</Text>
      </Stack>

      <Stack class="stack--gap-sm">
        <Text class="text--xs text--muted">14PX / 400 / NORMAL</Text>
        <Text class="text--sm">Caption Typography</Text>
      </Stack>

      <Stack class="stack--gap-sm">
        <Text class="text--xs text--muted">12PX / 400 / NORMAL</Text>
        <Text class="text--xs">Label Typography</Text>
      </Stack>
    </Stack>
  </ComponentPreview>

  <!-- Color Hierarchy -->
  <ComponentPreview
    title="Color Hierarchy"
    description="Four levels of text emphasis"
    code={`<Text>Primary text (100%)</Text>
<Text class="text--muted">Secondary text (60%)</Text>
<Text class="text--subtle">Tertiary text (50%)</Text>
<Text class="text--error">Error state</Text>`}
  >
    <Stack class="stack--gap-md" style="width: 100%;">
      <Stack style="gap: 80px;">
        <Text style="width: 120px;" class="text--xs text--muted">PRIMARY</Text>
        <Text class="text--base"
          >The quick brown fox jumps over the lazy dog</Text
        >
      </Stack>

      <Stack style="gap: 80px;">
        <Text style="width: 120px;" class="text--xs text--muted">SECONDARY</Text
        >
        <Text class="text--base text--muted"
          >The quick brown fox jumps over the lazy dog</Text
        >
      </Stack>

      <Stack style="gap: 80px;">
        <Text style="width: 120px;" class="text--xs text--muted">TERTIARY</Text>
        <Text class="text--base text--subtle"
          >The quick brown fox jumps over the lazy dog</Text
        >
      </Stack>

      <Stack style="gap: 80px;">
        <Text style="width: 120px;" class="text--xs text--muted">ERROR</Text>
        <Text class="text--base text--error"
          >The quick brown fox jumps over the lazy dog</Text
        >
      </Stack>
    </Stack>
  </ComponentPreview>

  <!-- Semantic Elements -->
  <ComponentPreview
    title="Semantic HTML"
    description="Text renders as appropriate HTML elements"
    code={`<Text as="h1" class="text--xxl">h1 heading</Text>
<Text as="h2" class="text--xl">h2 heading</Text>
<Text as="h3" class="text--lg">h3 heading</Text>
<Text as="p" class="text--base">paragraph</Text>
<Text as="span" class="text--sm">inline span</Text>`}
  >
    <Stack class="stack--gap-lg" style="width: 100%;">
      <div>
        <Text class="text--xs text--muted" style="margin-bottom: 8px;"
          >H1 ELEMENT</Text
        >
        <Text as="h1" class="text--xxl">Page Heading</Text>
      </div>

      <div>
        <Text class="text--xs text--muted" style="margin-bottom: 8px;"
          >H2 ELEMENT</Text
        >
        <Text as="h2" class="text--xl">Section Heading</Text>
      </div>

      <div>
        <Text class="text--xs text--muted" style="margin-bottom: 8px;"
          >H3 ELEMENT</Text
        >
        <Text as="h3" class="text--lg">Subsection Heading</Text>
      </div>

      <div>
        <Text class="text--xs text--muted" style="margin-bottom: 8px;"
          >P ELEMENT</Text
        >
        <Text as="p" class="text--base"
          >This is a paragraph element for body text content.</Text
        >
      </div>

      <div>
        <Text class="text--xs text--muted" style="margin-bottom: 8px;"
          >SPAN ELEMENT</Text
        >
        <Text as="span" class="text--sm">This is an inline span element.</Text>
      </div>
    </Stack>
  </ComponentPreview>

  <!-- Weight Modifiers -->
  <ComponentPreview
    title="Weight Modifier"
    description="Bold emphasis available via modifier"
    code={`<Text class="text--base">Regular weight (400)</Text>
<Text class="text--base text--bold">Bold weight (600)</Text>`}
  >
    <Stack class="stack--gap-md" style="width: 100%;">
      <Text class="text--base"
        >The quick brown fox jumps over the lazy dog — Regular 400</Text
      >
      <Text class="text--base text--bold"
        >The quick brown fox jumps over the lazy dog — Bold 600</Text
      >
    </Stack>
  </ComponentPreview>

  <!-- Real Content Example -->
  <ComponentPreview
    title="Content Example"
    description="Typography system in real-world usage"
  >
    <Card style="max-width: 700px;">
      <Stack class="stack--gap-xl">
        <!-- Article Header -->
        <Stack class="stack--gap-lg">
          <Stack class="stack--gap-md">
            <Text
              class="text--xs text--muted"
              style="text-transform: uppercase; letter-spacing: 0.08em;"
            >
              DESIGN SYSTEMS
            </Text>
            <Text as="h1" class="text--xxl">
              Building with Swiss Design Principles
            </Text>
            <Text class="text--lg text--muted">
              A modern approach to digital interfaces using clarity, hierarchy,
              and restraint
            </Text>
          </Stack>

          <Stack class="stack--horizontal stack--gap-md">
            <Text class="text--sm text--muted">Oct 16, 2025</Text>
            <Text class="text--sm text--subtle">·</Text>
            <Text class="text--sm text--muted">8 min read</Text>
          </Stack>
        </Stack>

        <Separator />

        <!-- Article Content -->
        <Stack class="stack--gap-lg">
          <Text as="p" class="text--base">
            Swiss design, also known as International Typographic Style, emerged
            in the 1950s from Switzerland and became one of the most influential
            design movements. Its principles of clarity, objectivity, and
            functional beauty remain relevant today.
          </Text>

          <Stack class="stack--gap-md">
            <Text as="h2" class="text--xl text--bold">Core Principles</Text>
            <Text as="p" class="text--base">
              The movement emphasized mathematical grids, sans-serif typography,
              and asymmetric layouts. Designers like Josef Müller-Brockmann and
              Armin Hofmann developed systems that prioritized content over
              decoration.
            </Text>
          </Stack>

          <Stack class="stack--gap-md">
            <Text as="h3" class="text--lg text--bold">Grid Systems</Text>
            <Text as="p" class="text--base text--muted">
              The grid provides structure and rhythm. It creates relationships
              between elements and establishes visual hierarchy through
              mathematical precision rather than arbitrary decisions.
            </Text>
          </Stack>

          <Stack class="stack--gap-md">
            <Text as="h3" class="text--lg text--bold">Typography</Text>
            <Text as="p" class="text--base text--muted">
              Sans-serif typefaces like Helvetica and Univers became synonymous
              with Swiss design. Their neutrality allows content to communicate
              clearly without stylistic interference.
            </Text>
          </Stack>
        </Stack>

        <Separator />

        <Text class="text--sm text--muted">
          Continue reading to explore how these principles apply to modern
          interface design.
        </Text>
      </Stack>
    </Card>
  </ComponentPreview>

  <!-- Type Specimen -->
  <ComponentPreview
    title="Type Specimen"
    description="Complete typographic scale with measurements"
    centered={false}
  >
    <Stack class="stack--gap-md" style="width: 100%;">
      <Card class="card--p-xl">
        <Stack class="stack--gap-xl">
          <Stack class="stack--gap-sm">
            <Text class="text--xs text--subtle">TEXT--XXL</Text>
            <Text class="text--xxl">Hamburgefonstiv 36/700</Text>
          </Stack>

          <Separator />

          <Stack class="stack--gap-sm">
            <Text class="text--xs text--subtle">TEXT--XL</Text>
            <Text class="text--xl">Hamburgefonstiv 20/600</Text>
          </Stack>

          <Separator />

          <Stack class="stack--gap-sm">
            <Text class="text--xs text--subtle">TEXT--LG</Text>
            <Text class="text--lg">Hamburgefonstiv 18/500</Text>
          </Stack>

          <Separator />

          <Stack class="stack--gap-sm">
            <Text class="text--xs text--subtle">TEXT--BASE</Text>
            <Text class="text--base">Hamburgefonstiv 16/400</Text>
          </Stack>

          <Separator />

          <Stack class="stack--gap-sm">
            <Text class="text--xs text--subtle">TEXT--SM</Text>
            <Text class="text--sm">Hamburgefonstiv 14/400</Text>
          </Stack>

          <Separator />

          <Stack class="stack--gap-sm">
            <Text class="text--xs text--subtle">TEXT--XS</Text>
            <Text class="text--xs">Hamburgefonstiv 12/400</Text>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  </ComponentPreview>
</ShowcaseLayout>

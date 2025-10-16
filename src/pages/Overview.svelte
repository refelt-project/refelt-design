<script>
  import {
    Text,
    Button,
    Card,
    Input,
    Container,
    Stack,
    Grid,
    Label,
    Separator,
    Switch,
  } from "@/lib/uikit";
  import PaymentForm from "../parts/PaymentForm.svelte";
  import { RadioCard, ColorPicker, ItemCard, ItemLink } from "@/lib/rich";
  import { CircleCheck, ArrowRight } from "lucide-svelte";

  let tintingEnabled = true;
  let computeEnv = "kubernetes";
  let accentColor = "blue";
  let gpuCount = 8;
</script>

<Container>
  <Separator class="separator--space separator--spacing-xl" decorative />
  <Stack class="stack--gap-xl">
    <Stack class="stack--gap-md">
      <Text as="h1" class="text--xxl">Refelt UI Kit Showcase</Text>
      <Text class="text--base text--muted"
        >Component--modifier pattern examples</Text
      >
    </Stack>

    <!-- Przypadek A: desktop 2 kolumny, mobile 1 -->
    <Grid columns={2} class="grid--gap-lg grid--md-1">
      <Card>
        <PaymentForm />
      </Card>

      <Stack class="stack--gap-lg">
        <Stack class="stack--gap-sm">
          <Text class="text--lg text--bold">Component Showcase</Text>
          <Text class="text--sm text--muted"
            >Advanced UI patterns from shadcn/ui</Text
          >
        </Stack>

        <Separator />

        <ItemCard>
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Two-factor authentication</Text>
            <Text class="text--sm text--muted"
              >Verify via email or phone number.</Text
            >
          </Stack>
          <svelte:fragment slot="actions">
            <Button variant="accent" class="btn--sm">Enable</Button>
          </svelte:fragment>
        </ItemCard>

        <ItemLink href="#">
          <svelte:fragment slot="leading">
            <CircleCheck size={20} strokeWidth={2} />
          </svelte:fragment>
          <Text class="text--sm">Your profile has been verified.</Text>
          <svelte:fragment slot="trailing">
            <ArrowRight size={16} strokeWidth={2} />
          </svelte:fragment>
        </ItemLink>

        <Separator />

        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Compute Environment</Text>
            <Text class="text--sm text--muted"
              >Select the compute environment for your cluster.</Text
            >
          </Stack>

          <Stack class="stack--gap-sm">
            <RadioCard
              id="env-k8s"
              name="compute"
              bind:group={computeEnv}
              value="kubernetes"
              title="Kubernetes"
              description="Run GPU workloads on a K8s configured cluster."
            />
            <RadioCard
              id="env-vm"
              name="compute"
              bind:group={computeEnv}
              value="vm"
              title="Virtual Machine"
              description="Access a VM configured cluster. (Coming soon)"
            />
          </Stack>
        </Stack>

        <Separator />

        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Accent Color</Text>
            <Text class="text--sm text--muted">Select the accent color.</Text>
          </Stack>
          <ColorPicker
            name="accent-color"
            bind:group={accentColor}
            options={["blue", "amber", "green", "rose"]}
          />
        </Stack>

        <Separator />

        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Label for="gpu-count">Number of GPUs</Label>
            <Text class="text--sm text--muted">You can add more later.</Text>
          </Stack>

          <Input
            id="gpu-count"
            type="number"
            bind:value={gpuCount}
            min={1}
            step={1}
            class="input--md"
          />
        </Stack>

        <Separator />

        <Stack class="stack--gap-sm">
          <Switch
            bind:checked={tintingEnabled}
            id="tinting"
            label="Wallpaper Tinting"
          />
          <Text class="text--sm text--muted"
            >Allow the wallpaper to be tinted.</Text
          >
        </Stack>
      </Stack>
    </Grid>

    <!-- Przypadek B: desktop 3 kolumny, tablet 2, mobile 1 -->
    <Grid columns={3} class="grid--gap-lg grid--lg-2 grid--md-1">
      <Card><Text>Card 1</Text></Card>
      <Card><Text>Card 2</Text></Card>
      <Card><Text>Card 3</Text></Card>
    </Grid>
  </Stack>
</Container>

<style>
  /* brak lokalnych media queries — wszystko w UIKit Grid */
</style>

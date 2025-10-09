<!-- src/pages/Home.svelte -->
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
    Radio,
    Switch,
  } from "@/uikit";
  import PaymentForm from "../parts/PaymentForm.svelte";

  // używamy wyniesionych komponentów rich
  import { RadioCard, ColorPicker, ItemCard, ItemLink } from "@/rich";

  // ikony
  import { CircleCheck, ArrowRight } from "lucide-svelte";

  let tintingEnabled = true;
  let computeEnv = "kubernetes";
  let accentColor = "blue";
  let gpuCount = 8;
</script>

<Container>
  <Stack class="stack--gap-xl">
    <Stack class="stack--gap-md">
      <Text as="h1" class="text--xxl">Refelt UI Kit Showcase</Text>
      <Text class="text--base text--muted">Component--modifier pattern examples</Text>
    </Stack>

    <Grid columns={2} class="grid--gap-lg">
      <Card>
        <PaymentForm />
      </Card>

      <Stack class="stack--gap-lg">
        <Stack class="stack--gap-sm">
          <Text class="text--lg text--bold">Component Showcase</Text>
          <Text class="text--sm text--muted">Advanced UI patterns from shadcn/ui</Text>
        </Stack>

        <Separator />

        <!-- Two-factor authentication (ItemCard) -->
        <ItemCard>
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Two-factor authentication</Text>
            <Text class="text--sm text--muted">Verify via email or phone number.</Text>
          </Stack>
          <svelte:fragment slot="actions">
            <Button variant="accent" class="btn--sm">Enable</Button>
          </svelte:fragment>
        </ItemCard>

        <!-- Verified info (ItemLink) -->
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

        <!-- Compute Environment -->
        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Compute Environment</Text>
            <Text class="text--sm text--muted">Select the compute environment for your cluster.</Text>
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

        <!-- Accent Color -->
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

        <!-- Number of GPUs -->
        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Label for="gpu-count">Number of GPUs</Label>
            <Text class="text--sm text--muted">You can add more later.</Text>
          </Stack>

          <div class="number-stepper">
            <Input
              id="gpu-count"
              type="number"
              bind:value={gpuCount}
              min={1}
              step={1}
              class="input--md"
              style="font-variant-numeric:tabular-nums;"
            />
            <Button
              variant="outline"
              class="btn--sm"
              on:click={() => (gpuCount = Math.max(1, (gpuCount ?? 0) - 1))}
              aria-label="Decrease">−</Button>
            <Button
              variant="outline"
              class="btn--sm"
              on:click={() => (gpuCount = (gpuCount ?? 0) + 1)}
              aria-label="Increase">+</Button>
          </div>
        </Stack>

        <Separator />

        <!-- Switch Toggle -->
        <Stack class="stack--gap-sm">
          <Switch bind:checked={tintingEnabled} id="tinting" label="Wallpaper Tinting" />
          <Text class="text--sm text--muted">Allow the wallpaper to be tinted.</Text>
        </Stack>
      </Stack>
    </Grid>
  </Stack>
</Container>

<style>
  .number-stepper {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  }
</style>

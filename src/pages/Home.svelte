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
    Switch
  } from '@/lib';
  import PaymentForm from '../parts/PaymentForm.svelte';
  
  // Showcase state
  let tintingEnabled = true;
  let computeEnv = 'kubernetes';
  let accentColor = 'blue';
  let gpuCount = 8;
</script>

<Container>
  <Stack class="stack--gap-xl">
    
    <Stack class="stack--gap-md">
      <Text as="h1" class="text--xxl">Refelt UI Kit Showcase</Text>
      <Text class="text--base text--muted">Component--modifier pattern examples</Text>
    </Stack>

    <Grid columns={2} class="grid--gap-lg">
      
      <!-- LEFT COLUMN: Payment Form -->
      <Card>
        <PaymentForm />
      </Card>

      <!-- RIGHT COLUMN: Showcase Components -->
      <Stack class="stack--gap-lg">
        
        <!-- Header -->
        <Stack class="stack--gap-sm">
        <Text class="text--lg text--bold">Component Showcase</Text>
        <Text class="text--sm text--muted">Advanced UI patterns from shadcn/ui</Text>
        </Stack>
        
        <Separator />
        
        <!-- Two-Factor Auth Item -->
        <div class="item-card">
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Two-factor authentication</Text>
            <Text class="text--sm text--muted">Verify via email or phone number.</Text>
          </Stack>
          <Button variant="accent" class="btn--sm">Enable</Button>
        </div>
        
        <!-- Verified Badge Item -->
        <a href="#" class="item-link">
          <div class="item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <Text class="text--sm">Your profile has been verified.</Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
        
        <Separator />
        
        <!-- Compute Environment Section -->
        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Compute Environment</Text>
            <Text class="text--sm text--muted">Select the compute environment for your cluster.</Text>
          </Stack>
          
          <!-- Radio Group - używamy custom styled cards -->
          <Stack class="stack--gap-sm">
            <label class="radio-card" class:selected={computeEnv === 'kubernetes'}>
              <Stack class="stack--gap-sm">
                <Text class="text--sm text--bold">Kubernetes</Text>
                <Text class="text--sm text--muted">Run GPU workloads on a K8s configured cluster.</Text>
              </Stack>
              <Radio 
                bind:group={computeEnv} 
                value="kubernetes"
                name="compute"
              />
            </label>
            
            <label class="radio-card" class:selected={computeEnv === 'vm'}>
              <Stack class="stack--gap-sm">
                <Text class="text--sm text--bold">Virtual Machine</Text>
                <Text class="text--sm text--muted">Access a VM configured cluster. (Coming soon)</Text>
              </Stack>
              <Radio 
                bind:group={computeEnv} 
                value="vm"
                name="compute"
              />
            </label>
          </Stack>
        </Stack>
        
        <Separator />
        
        <!-- Accent Color Section -->
        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Accent Color</Text>
            <Text class="text--sm text--muted">Select the accent color.</Text>
          </Stack>
          
          <div class="color-picker">
            {#each ['blue', 'amber', 'green', 'rose'] as color}
              <label class="color-option color-{color}" class:selected={accentColor === color}>
                <input 
                  type="radio" 
                  bind:group={accentColor} 
                  value={color}
                  class="sr-only"
                />
                {#if accentColor === color}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                {/if}
              </label>
            {/each}
          </div>
        </Stack>
        
        <Separator />
        
        <!-- Number Stepper -->
        <Stack class="stack--gap-md">
          <Stack class="stack--gap-sm">
            <Label for="gpu-count">Number of GPUs</Label>
            <Text class="text--sm text--muted">You can add more later.</Text>
          </Stack>
          
          <div class="number-stepper">
            <Input 
              id="gpu-count" 
              type="text" 
              bind:value={gpuCount}
              class="input--sm number-input"
            />
            <Button 
              variant="outline" 
              class="btn--sm"
              on:click={() => gpuCount = Math.max(1, gpuCount - 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12l14 0"></path>
              </svg>
            </Button>
            <Button 
              variant="outline" 
              class="btn--sm"
              on:click={() => gpuCount = gpuCount + 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5l0 14"></path>
                <path d="M5 12l14 0"></path>
              </svg>
            </Button>
          </div>
        </Stack>
        
        <Separator />
        
        <!-- Switch Toggle - używamy komponentu Switch -->
        <Switch 
          bind:checked={tintingEnabled}
          id="tinting"
          label="Wallpaper Tinting"
          class="switch--with-description"
        >
          <Stack class="stack--gap-sm" slot="description">
            <Label for="tinting">Wallpaper Tinting</Label>
            <Text class="text--sm text--muted">Allow the wallpaper to be tinted.</Text>
          </Stack>
        </Switch>
        
      </Stack>

    </Grid>
  </Stack>
</Container>

<style>
  /* Screen reader only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Item Card */
  .item-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }
  
  .item-card:hover {
    background: var(--bg-elevated);
  }
  
  /* Item Link */
  .item-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    text-decoration: none;
    color: var(--text);
    transition: all var(--transition-base);
  }
  
  .item-link:hover {
    background: var(--bg-elevated);
  }
  
  .item-icon {
    flex-shrink: 0;
    color: var(--accent);
  }
  
  /* Radio Card - custom styled wrapper dla Radio komponentu */
  .radio-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-base);
  }
  
  .radio-card:hover {
    background: var(--bg-elevated);
  }
  
  .radio-card.selected {
    border-color: var(--accent);
    background: color-mix(in oklch, var(--accent) 5%, transparent);
  }
  
  /* Color Picker */
  .color-picker {
    display: flex;
    gap: 8px;
  }
  
  .color-option {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: all var(--transition-base);
  }
  
  .color-option svg {
    stroke: white;
  }
  
  .color-blue {
    background: #3b82f6;
  }
  
  .color-amber {
    background: #f59e0b;
  }
  
  .color-green {
    background: #10b981;
  }
  
  .color-rose {
    background: #f43f5e;
  }
  
  .color-option:hover {
    transform: scale(1.1);
  }
  
  .color-option.selected {
    ring: 2px solid var(--border);
  }
  
  /* Number Stepper */
  .number-stepper {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  
  .number-input {
    width: 64px;
    text-align: center;
    font-family: 'Courier New', monospace;
  }
</style>
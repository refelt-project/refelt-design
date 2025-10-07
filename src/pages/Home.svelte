<script>
  import {
    Text,
    Button,
    Card,
    Badge,
    Input,
    Container,
    Stack,
    Grid,
    Checkbox,
    Textarea,
    Label,
    Separator
  } from '../lib';

  // Form state
  let cardName = '';
  let cardNumber = '';
  let cvv = '';
  let comments = '';
  let sameAsShipping = true;
  
  // Showcase state
  let tintingEnabled = true;
  let computeEnv = 'kubernetes';
  let accentColor = 'blue';
  let gpuCount = 8;
</script>

<Container>
  <Stack class="stack--gap-xl">
    
    <Stack class="stack--gap-md">
      <Text as="h1" class="text--xl">Refelt UI Kit Showcase</Text>
      <Text class="text--base text--muted">Component--modifier pattern examples</Text>
    </Stack>

    <Grid columns={2} class="grid--gap-lg">
      
      <!-- LEFT COLUMN: Payment Form -->
      <Card>
        <form>
          <Stack class="stack--gap-lg">
            
            <!-- Payment Method Section -->
            <Stack class="stack--gap-lg">
              <Stack class="stack--gap-sm">
                <Text class="text--lg">Payment Method</Text>
                <Text class="text--sm text--muted">All transactions are secure and encrypted</Text>
              </Stack>
              
              <Stack class="stack--gap-lg">
                <Stack class="stack--gap-sm">
                  <Label for="card-name">Name on Card</Label>
                  <Input
                    id="card-name"
                    placeholder="John Doe"
                    bind:value={cardName}
                  />
                </Stack>
                
                <Grid columns={3} class="grid--gap-md">
                  <Stack class="stack--gap-sm span-2">
                    <Label for="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      bind:value={cardNumber}
                    />
                    <Text class="text--sm text--muted">Enter your 16-digit number.</Text>
                  </Stack>
                  
                  <Stack class="stack--gap-sm">
                    <Label for="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      bind:value={cvv}
                    />
                  </Stack>
                </Grid>
                
                <Grid columns={2} class="grid--gap-md">
                  <Stack class="stack--gap-sm">
                    <Label for="month">Month</Label>
                    <Input
                      id="month"
                      placeholder="MM"
                    />
                  </Stack>
                  
                  <Stack class="stack--gap-sm">
                    <Label for="year">Year</Label>
                    <Input
                      id="year"
                      placeholder="YYYY"
                    />
                  </Stack>
                </Grid>
              </Stack>
            </Stack>
            
            <!-- Separator Component -->
            <Separator />
            
            <!-- Billing Address Section -->
            <Stack class="stack--gap-lg">
              <Stack class="stack--gap-sm">
                <Text class="text--lg">Billing Address</Text>
                <Text class="text--sm text--muted">The billing address associated with your payment method</Text>
              </Stack>
              
              <Checkbox
                id="same-shipping"
                label="Same as shipping address"
                bind:checked={sameAsShipping}
              />
            </Stack>
            
            <!-- Separator Component -->
            <Separator />
            
            <!-- Comments Section -->
            <Stack class="stack--gap-sm">
              <Label for="comments">Comments</Label>
              <Textarea
                id="comments"
                placeholder="Add any additional comments"
                bind:value={comments}
                rows={4}
              />
            </Stack>
            
            <!-- Action Buttons -->
            <Stack class="stack--horizontal stack--gap-md">
              <Button variant="accent" type="submit">Submit</Button>
              <Button variant="outline" type="button">Cancel</Button>
            </Stack>
            
          </Stack>
        </form>
      </Card>

      <!-- RIGHT COLUMN: Showcase Components -->
      <Card>
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
            
            <!-- Radio Group Mock -->
            <Stack class="stack--gap-sm">
              <label class="radio-card" class:selected={computeEnv === 'kubernetes'}>
                <Stack class="stack--gap-sm">
                  <Text class="text--sm text--bold">Kubernetes</Text>
                  <Text class="text--sm text--muted">Run GPU workloads on a K8s configured cluster.</Text>
                </Stack>
                <input 
                  type="radio" 
                  bind:group={computeEnv} 
                  value="kubernetes"
                  class="radio-input"
                />
              </label>
              
              <label class="radio-card" class:selected={computeEnv === 'vm'}>
                <Stack class="stack--gap-sm">
                  <Text class="text--sm text--bold">Virtual Machine</Text>
                  <Text class="text--sm text--muted">Access a VM configured cluster. (Coming soon)</Text>
                </Stack>
                <input 
                  type="radio" 
                  bind:group={computeEnv} 
                  value="vm"
                  class="radio-input"
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
          
          <!-- Switch Toggle -->
          <div class="switch-row">
            <Stack class="stack--gap-sm">
              <Label for="tinting">Wallpaper Tinting</Label>
              <Text class="text--sm text--muted">Allow the wallpaper to be tinted.</Text>
            </Stack>
            
            <label class="switch">
              <input 
                type="checkbox" 
                id="tinting"
                bind:checked={tintingEnabled}
                class="sr-only"
              />
              <span class="switch-track" class:checked={tintingEnabled}>
                <span class="switch-thumb"></span>
              </span>
            </label>
          </div>
          
        </Stack>
      </Card>

    </Grid>
  </Stack>
</Container>

<style>
  /* Utility */
  :global(.span-2) { grid-column: span 2; }
  
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
  
  /* Radio Card */
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
  
  .radio-input {
    position: absolute;
    right: 16px;
    width: 16px;
    height: 16px;
    border: 1px solid var(--border);
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    transition: all var(--transition-base);
  }
  
  .radio-input:checked {
    border-color: var(--accent);
    background: var(--accent);
  }
  
  .radio-input:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-fg);
    transform: translate(-50%, -50%);
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
  
  /* Switch Row */
  .switch-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  
  /* Switch */
  .switch {
    display: inline-flex;
    cursor: pointer;
  }
  
  .switch-track {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 40px;
    height: 20px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 999px;
    transition: all var(--transition-base);
  }
  
  .switch-track.checked {
    background: var(--accent);
    border-color: var(--accent);
  }
  
  .switch-thumb {
    display: block;
    width: 16px;
    height: 16px;
    background: var(--text);
    border-radius: 50%;
    transition: all var(--transition-base);
    transform: translateX(2px);
  }
  
  .switch-track.checked .switch-thumb {
    background: var(--accent-fg);
    transform: translateX(20px);
  }
</style>
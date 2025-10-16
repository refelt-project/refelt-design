<script>
    import { Stack, Text, Button, Badge } from "@/lib/uikit";
    import { RadioCard, ColorPicker, ItemCard, ItemLink } from "@/lib/rich";
    import ShowcaseLayout from "../../parts/showcase/ShowcaseLayout.svelte";
    import ComponentPreview from "../../parts/showcase/ComponentPreview.svelte";
    import { CircleCheck, Settings, ExternalLink, Zap, Shield } from "lucide-svelte";
    
    let selectedPlan = "pro";
    let accentColor = "blue";
    let tintColor = "amber";
  </script>
  
  <ShowcaseLayout
    title="Advanced Components"
    description="Rich, composite components for common patterns"
  >
    <!-- RadioCard -->
    <ComponentPreview
      title="RadioCard"
      description="Card-based radio selection for richer options"
      code={`let selectedPlan = "pro";
  
  <Stack class="stack--gap-sm">
    <RadioCard
      id="plan-free"
      name="plan"
      bind:group={selectedPlan}
      value="free"
      title="Free"
      description="Perfect for personal projects"
    />
    
    <RadioCard
      id="plan-pro"
      name="plan"
      bind:group={selectedPlan}
      value="pro"
      title="Pro"
      description="For professional developers"
    />
    
    <RadioCard
      id="plan-enterprise"
      name="plan"
      bind:group={selectedPlan}
      value="enterprise"
      title="Enterprise"
      description="Advanced features for teams"
    />
  </Stack>`}
    >
      <Stack class="stack--gap-sm" style="width: 100%; max-width: 500px;">
        <RadioCard
          id="plan-free"
          name="plan"
          bind:group={selectedPlan}
          value="free"
          title="Free"
          description="Perfect for personal projects and learning"
        />
        
        <RadioCard
          id="plan-pro"
          name="plan"
          bind:group={selectedPlan}
          value="pro"
          title="Pro"
          description="For professional developers building applications"
        />
        
        <RadioCard
          id="plan-enterprise"
          name="plan"
          bind:group={selectedPlan}
          value="enterprise"
          title="Enterprise"
          description="Advanced features and support for teams"
        />
        
        <Text class="text--sm text--muted">Selected: {selectedPlan}</Text>
      </Stack>
    </ComponentPreview>
  
    <!-- RadioCard with Custom Content -->
    <ComponentPreview
      title="RadioCard with Badges"
      description="RadioCards can contain any content via slots"
      code={`<RadioCard
    id="plan-premium"
    name="premium-plan"
    bind:group={selected}
    value="premium"
    title="Premium Plan"
    description="Everything you need to scale"
  >
    <Stack class="stack--horizontal stack--gap-sm">
      <Badge variant="success" class="badge--sm">Popular</Badge>
      <Badge variant="info" class="badge--sm">Best Value</Badge>
    </Stack>
  </RadioCard>`}
    >
      <Stack class="stack--gap-sm" style="width: 100%; max-width: 500px;">
        <RadioCard
          id="plan-starter"
          name="featured-plan"
          value="starter"
          title="Starter Plan"
          description="Get started with basic features"
        >
          <Badge variant="info" class="badge--sm">Good Start</Badge>
        </RadioCard>
        
        <RadioCard
          id="plan-premium"
          name="featured-plan"
          bind:group={selectedPlan}
          value="premium"
          title="Premium Plan"
          description="Everything you need to scale your business"
        >
          <Stack class="stack--horizontal stack--gap-sm">
            <Badge variant="success" class="badge--sm">Popular</Badge>
            <Badge variant="warning" class="badge--sm">Best Value</Badge>
          </Stack>
        </RadioCard>
      </Stack>
    </ComponentPreview>
  
    <!-- ColorPicker -->
    <ComponentPreview
      title="ColorPicker"
      description="Visual color selection component"
      code={`let accentColor = "blue";
  
  <ColorPicker
    name="accent-color"
    bind:group={accentColor}
    options={["blue", "amber", "green", "rose"]}
  />`}
    >
      <Stack class="stack--gap-md">
        <Stack class="stack--gap-sm">
          <Text class="text--sm text--bold">Select Accent Color</Text>
          <ColorPicker
            name="accent-color"
            bind:group={accentColor}
            options={["blue", "amber", "green", "rose"]}
          />
          <Text class="text--sm text--muted">Selected: {accentColor}</Text>
        </Stack>
        
        <Stack class="stack--gap-sm">
          <Text class="text--sm text--bold">Select Theme Tint</Text>
          <ColorPicker
            name="tint-color"
            bind:group={tintColor}
            options={["blue", "amber", "green", "rose"]}
          />
          <Text class="text--sm text--muted">Selected: {tintColor}</Text>
        </Stack>
      </Stack>
    </ComponentPreview>
  
    <!-- ItemCard -->
    <ComponentPreview
      title="ItemCard"
      description="Card for list items with action buttons"
      code={`<ItemCard>
    <Stack class="stack--gap-sm">
      <Text class="text--base text--bold">Two-factor authentication</Text>
      <Text class="text--sm text--muted">
        Verify via email or phone number
      </Text>
    </Stack>
    
    <svelte:fragment slot="actions">
      <Button variant="accent" class="btn--sm">Enable</Button>
    </svelte:fragment>
  </ItemCard>`}
    >
      <Stack class="stack--gap-md" style="width: 100%; max-width: 600px;">
        <ItemCard>
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Two-factor authentication</Text>
            <Text class="text--sm text--muted">
              Add an extra layer of security to your account
            </Text>
          </Stack>
          
          <svelte:fragment slot="actions">
            <Button variant="accent" class="btn--sm">Enable</Button>
          </svelte:fragment>
        </ItemCard>
        
        <ItemCard>
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">Email notifications</Text>
            <Text class="text--sm text--muted">
              Get updates about your account activity
            </Text>
          </Stack>
          
          <svelte:fragment slot="actions">
            <Button variant="outline" class="btn--sm">Configure</Button>
          </svelte:fragment>
        </ItemCard>
        
        <ItemCard>
          <Stack class="stack--gap-sm">
            <Text class="text--base text--bold">API Access</Text>
            <Text class="text--sm text--muted">
              Manage your API keys and webhooks
            </Text>
          </Stack>
          
          <svelte:fragment slot="actions">
            <Badge variant="success" class="badge--sm">Active</Badge>
            <Button variant="ghost" class="btn--sm" style="width: 32px; padding: 0;">
              <Settings size={16} />
            </Button>
          </svelte:fragment>
        </ItemCard>
      </Stack>
    </ComponentPreview>
  
    <!-- ItemLink -->
    <ComponentPreview
      title="ItemLink"
      description="Link-style item with leading icon"
      code={`<ItemLink href="/settings">
    <svelte:fragment slot="leading">
      <CircleCheck size={20} strokeWidth={2} />
    </svelte:fragment>
    <Text class="text--sm">Your profile has been verified</Text>
  </ItemLink>`}
    >
      <Stack class="stack--gap-sm" style="width: 100%; max-width: 600px;">
        <ItemLink href="#">
          <svelte:fragment slot="leading">
            <CircleCheck size={20} strokeWidth={2} />
          </svelte:fragment>
          <Text class="text--sm">Your profile has been verified successfully</Text>
        </ItemLink>
        
        <ItemLink href="#">
          <svelte:fragment slot="leading">
            <Zap size={20} strokeWidth={2} />
          </svelte:fragment>
          <Text class="text--sm">New features available - check them out</Text>
        </ItemLink>
        
        <ItemLink href="#" target="_blank">
          <svelte:fragment slot="leading">
            <Shield size={20} strokeWidth={2} />
          </svelte:fragment>
          <Text class="text--sm">View security recommendations</Text>
          <svelte:fragment slot="trailing">
            <ExternalLink size={16} strokeWidth={2} />
          </svelte:fragment>
        </ItemLink>
      </Stack>
    </ComponentPreview>
  
    <!-- ItemLink Muted -->
    <ComponentPreview
      title="ItemLink - Muted"
      description="Subtle variation of ItemLink"
      code={`<ItemLink href="#" muted>
    <svelte:fragment slot="leading">
      <Settings size={20} strokeWidth={2} />
    </svelte:fragment>
    <Text class="text--sm">Configure advanced settings</Text>
  </ItemLink>`}
    >
      <Stack class="stack--gap-sm" style="width: 100%; max-width: 600px;">
        <ItemLink href="#" muted>
          <svelte:fragment slot="leading">
            <Settings size={20} strokeWidth={2} />
          </svelte:fragment>
          <Text class="text--sm">Configure advanced settings</Text>
        </ItemLink>
        
        <ItemLink href="#" muted>
          <svelte:fragment slot="leading">
            <ExternalLink size={20} strokeWidth={2} />
          </svelte:fragment>
          <Text class="text--sm">View documentation</Text>
        </ItemLink>
      </Stack>
    </ComponentPreview>
  
    <!-- Complex Dashboard Example -->
    <ComponentPreview
      title="Settings Dashboard"
      description="Real-world example combining multiple advanced components"
      code={`<Stack class="stack--gap-xl">
    <Stack class="stack--gap-md">
      <Text as="h3" class="text--lg text--bold">Account Type</Text>
      <RadioCard ... />
      <RadioCard ... />
    </Stack>
    
    <Stack class="stack--gap-md">
      <Text as="h3" class="text--lg text--bold">Theme</Text>
      <ColorPicker ... />
    </Stack>
    
    <Stack class="stack--gap-md">
      <Text as="h3" class="text--lg text--bold">Security</Text>
      <ItemCard ... />
      <ItemCard ... />
    </Stack>
    
    <Stack class="stack--gap-md">
      <Text as="h3" class="text--lg text--bold">Quick Links</Text>
      <ItemLink ... />
      <ItemLink ... />
    </Stack>
  </Stack>`}
    >
      <Stack class="stack--gap-xl" style="width: 100%; max-width: 700px;">
        <Stack class="stack--gap-md">
          <Text as="h3" class="text--lg text--bold">Account Type</Text>
          <Text class="text--sm text--muted">Choose your subscription plan</Text>
          
          <Stack class="stack--gap-sm">
            <RadioCard
              id="dashboard-free"
              name="dashboard-plan"
              value="free"
              title="Free"
              description="Basic features for personal use"
            />
            <RadioCard
              id="dashboard-pro"
              name="dashboard-plan"
              bind:group={selectedPlan}
              value="pro"
              title="Pro"
              description="Advanced features for professionals"
            >
              <Badge variant="success" class="badge--sm">Recommended</Badge>
            </RadioCard>
          </Stack>
        </Stack>
        
        <Stack class="stack--gap-md">
          <Text as="h3" class="text--lg text--bold">Accent Color</Text>
          <Text class="text--sm text--muted">Customize your interface</Text>
          <ColorPicker
            name="dashboard-color"
            bind:group={accentColor}
            options={["blue", "amber", "green", "rose"]}
          />
        </Stack>
        
        <Stack class="stack--gap-md">
          <Text as="h3" class="text--lg text--bold">Security Settings</Text>
          
          <ItemCard>
            <Stack class="stack--gap-sm">
              <Text class="text--base text--bold">Two-factor Authentication</Text>
              <Text class="text--sm text--muted">Add extra security</Text>
            </Stack>
            <svelte:fragment slot="actions">
              <Button variant="accent" class="btn--sm">Enable</Button>
            </svelte:fragment>
          </ItemCard>
          
          <ItemCard>
            <Stack class="stack--gap-sm">
              <Text class="text--base text--bold">Session Management</Text>
              <Text class="text--sm text--muted">View active sessions</Text>
            </Stack>
            <svelte:fragment slot="actions">
              <Badge variant="info" class="badge--sm">2 Active</Badge>
              <Button variant="outline" class="btn--sm">Manage</Button>
            </svelte:fragment>
          </ItemCard>
        </Stack>
        
        <Stack class="stack--gap-md">
          <Text as="h3" class="text--lg text--bold">Quick Links</Text>
          
          <ItemLink href="#">
            <svelte:fragment slot="leading">
              <CircleCheck size={20} strokeWidth={2} />
            </svelte:fragment>
            <Text class="text--sm">View account activity</Text>
          </ItemLink>
          
          <ItemLink href="#" target="_blank">
            <svelte:fragment slot="leading">
              <ExternalLink size={20} strokeWidth={2} />
            </svelte:fragment>
            <Text class="text--sm">Read documentation</Text>
            <svelte:fragment slot="trailing">
              <ExternalLink size={16} strokeWidth={2} />
            </svelte:fragment>
          </ItemLink>
        </Stack>
      </Stack>
    </ComponentPreview>
  </ShowcaseLayout>
<script>
    import { 
      Card, 
      CardHeader, 
      CardFooter, 
      Button, 
      Text, 
      Stack,
      Badge,
      Separator 
    } from "@/lib/uikit";
    import ShowcaseLayout from "../../parts/showcase/ShowcaseLayout.svelte";
    import ComponentPreview from "../../parts/showcase/ComponentPreview.svelte";
    import { Settings, Bell, User } from "lucide-svelte";
  </script>
  
  <ShowcaseLayout
    title="Cards"
    description="Flexible card components with headers, footers, and variants"
  >
    <!-- Basic Card -->
    <ComponentPreview
      title="Basic Card"
      description="Simple card with content"
      code={`<Card>
    <Text>This is a basic card with some content inside.</Text>
  </Card>`}
    >
      <Card style="max-width: 400px;">
        <Text>This is a basic card with some content inside.</Text>
      </Card>
    </ComponentPreview>
  
    <!-- Card with Header -->
    <ComponentPreview
      title="Card with Header"
      description="Card using CardHeader component"
      code={`<Card>
    <CardHeader title="Card Title">
      <Text class="text--sm text--muted">
        This is the card description that provides more context.
      </Text>
    </CardHeader>
    
    <Stack class="stack--gap-md">
      <Text>Main card content goes here.</Text>
    </Stack>
  </Card>`}
    >
      <Card style="max-width: 500px;">
        <CardHeader title="Card Title">
          <Text class="text--sm text--muted">
            This is the card description that provides more context.
          </Text>
        </CardHeader>
        
        <Stack class="stack--gap-md">
          <Text>Main card content goes here.</Text>
        </Stack>
      </Card>
    </ComponentPreview>
  
    <!-- Card with Footer -->
    <ComponentPreview
      title="Card with Footer"
      description="Card with action buttons in footer"
      code={`<Card>
    <CardHeader title="Confirm Action">
      <Text class="text--sm text--muted">
        Are you sure you want to proceed?
      </Text>
    </CardHeader>
    
    <CardFooter>
      <Button variant="outline" class="btn--sm">Cancel</Button>
      <Button variant="accent" class="btn--sm">Confirm</Button>
    </CardFooter>
  </Card>`}
    >
      <Card style="max-width: 400px;">
        <CardHeader title="Confirm Action">
          <Text class="text--sm text--muted">
            Are you sure you want to proceed?
          </Text>
        </CardHeader>
        
        <CardFooter>
          <Button variant="outline" class="btn--sm">Cancel</Button>
          <Button variant="accent" class="btn--sm">Confirm</Button>
        </CardFooter>
      </Card>
    </ComponentPreview>
  
    <!-- Card with Header Action -->
    <ComponentPreview
      title="Card with Header Action"
      description="Header with action slot"
      code={`<Card>
    <CardHeader title="Settings">
      <svelte:fragment slot="action">
        <Button variant="ghost" class="btn--sm">
          <Settings size={16} />
        </Button>
      </svelte:fragment>
      <Text class="text--sm text--muted">
        Manage your account settings
      </Text>
    </CardHeader>
    
    <Stack class="stack--gap-md">
      <Text>Settings content...</Text>
    </Stack>
  </Card>`}
    >
      <Card style="max-width: 500px;">
        <CardHeader title="Settings">
          <svelte:fragment slot="action">
            <Button variant="ghost" class="btn--sm" style="width: 32px; padding: 0;">
              <Settings size={16} />
            </Button>
          </svelte:fragment>
          <Text class="text--sm text--muted">
            Manage your account settings
          </Text>
        </CardHeader>
        
        <Stack class="stack--gap-md">
          <Text>Settings content goes here.</Text>
        </Stack>
      </Card>
    </ComponentPreview>
  
    <!-- Elevated Card -->
    <ComponentPreview
      title="Elevated Card"
      description="Card with shadow elevation"
      code={`<Card variant="elevated">
    <CardHeader title="Elevated Card" />
    <Text>This card has a subtle shadow effect.</Text>
  </Card>`}
    >
      <Card variant="elevated" style="max-width: 400px;">
        <CardHeader title="Elevated Card" />
        <Text>This card has a subtle shadow effect.</Text>
      </Card>
    </ComponentPreview>
  
    <!-- Padding Modifiers -->
    <ComponentPreview
      title="Padding Modifiers"
      description="Control card padding with modifiers"
      code={`<Card class="card--p-sm">
    <Text>Small padding</Text>
  </Card>
  
  <Card>
    <Text>Default padding</Text>
  </Card>
  
  <Card class="card--p-lg">
    <Text>Large padding</Text>
  </Card>`}
    >
      <Stack class="stack--gap-md" style="width: 100%; max-width: 400px;">
        <Card class="card--p-sm">
          <Text>Small padding</Text>
        </Card>
        
        <Card>
          <Text>Default padding</Text>
        </Card>
        
        <Card class="card--p-lg">
          <Text>Large padding</Text>
        </Card>
      </Stack>
    </ComponentPreview>
  
    <!-- Transparent Card -->
    <ComponentPreview
      title="Transparent Card"
      description="Card with transparent background"
      code={`<Card class="card--transparent">
    <Text>Transparent card - no background or border</Text>
  </Card>`}
    >
      <Card class="card--transparent" style="max-width: 400px;">
        <Text>Transparent card - no background or border</Text>
      </Card>
    </ComponentPreview>
  
    <!-- Dashed Border -->
    <ComponentPreview
      title="Dashed Border"
      description="Card with dashed border style"
      code={`<Card class="card--border-dashed">
    <Text>Card with dashed border</Text>
  </Card>`}
    >
      <Card class="card--border-dashed" style="max-width: 400px;">
        <Text>Card with dashed border</Text>
      </Card>
    </ComponentPreview>
  
    <!-- Complex Card Example -->
    <ComponentPreview
      title="Complex Card"
      description="Feature-rich card with all elements"
      code={`<Card variant="elevated">
    <CardHeader title="User Profile">
      <svelte:fragment slot="action">
        <Badge variant="success" class="badge--sm">Active</Badge>
      </svelte:fragment>
      <Text class="text--sm text--muted">
        View and edit user information
      </Text>
    </CardHeader>
    
    <Stack class="stack--gap-lg">
      <Stack class="stack--gap-sm">
        <Stack class="stack--horizontal stack--gap-sm stack--align-center">
          <User size={20} />
          <Text class="text--base text--bold">John Doe</Text>
        </Stack>
        <Text class="text--sm text--muted">john.doe@example.com</Text>
      </Stack>
      
      <Separator />
      
      <Stack class="stack--gap-sm">
        <Text class="text--sm text--bold">Notifications</Text>
        <Stack class="stack--horizontal stack--gap-sm">
          <Bell size={16} />
          <Text class="text--sm text--muted">You have 3 new messages</Text>
        </Stack>
      </Stack>
    </Stack>
    
    <CardFooter>
      <Button variant="outline" class="btn--sm">Cancel</Button>
      <Button variant="accent" class="btn--sm">Save Changes</Button>
    </CardFooter>
  </Card>`}
    >
      <Card variant="elevated" style="max-width: 500px;">
        <CardHeader title="User Profile">
          <svelte:fragment slot="action">
            <Badge variant="success" class="badge--sm">Active</Badge>
          </svelte:fragment>
          <Text class="text--sm text--muted">
            View and edit user information
          </Text>
        </CardHeader>
        
        <Stack class="stack--gap-lg">
          <Stack class="stack--gap-sm">
            <Stack class="stack--horizontal stack--gap-sm stack--align-center">
              <User size={20} />
              <Text class="text--base text--bold">John Doe</Text>
            </Stack>
            <Text class="text--sm text--muted">john.doe@example.com</Text>
          </Stack>
          
          <Separator />
          
          <Stack class="stack--gap-sm">
            <Text class="text--sm text--bold">Notifications</Text>
            <Stack class="stack--horizontal stack--gap-sm">
              <Bell size={16} />
              <Text class="text--sm text--muted">You have 3 new messages</Text>
            </Stack>
          </Stack>
        </Stack>
        
        <CardFooter>
          <Button variant="outline" class="btn--sm">Cancel</Button>
          <Button variant="accent" class="btn--sm">Save Changes</Button>
        </CardFooter>
      </Card>
    </ComponentPreview>
  
    <!-- Glass Card -->
    <ComponentPreview
      title="Glass Effect"
      description="Card with glassmorphism effect"
      code={`<Card class="card--glass">
    <CardHeader title="Glass Card" />
    <Text>This card has a frosted glass effect with backdrop blur.</Text>
  </Card>`}
    >
      <div style="background: linear-gradient(135deg, var(--accent) 0%, var(--destructive) 100%); padding: 48px; border-radius: var(--radius-lg);">
        <Card class="card--glass" style="max-width: 400px;">
          <CardHeader title="Glass Card" />
          <Text>This card has a frosted glass effect with backdrop blur.</Text>
        </Card>
      </div>
    </ComponentPreview>
  </ShowcaseLayout>
<script>
  import { 
    Input, 
    Checkbox, 
    Radio, 
    Switch, 
    Textarea, 
    Label,
    Button,
    Stack,
    Text,
    Card,
    Grid,
    Separator
  } from "@/lib/uikit";
  import ShowcaseLayout from "@/parts/showcase/ShowcaseLayout.svelte";
  import ComponentPreview from "@/parts/showcase/ComponentPreview.svelte";
  
  let email = "";
  let password = "";
  let bio = "";
  let acceptTerms = false;
  let newsletter = true;
  let theme = "dark";
  let notifications = false;
  let quantity = 5;
</script>

<ShowcaseLayout
  title="Forms"
  description="Input components for collecting user data"
>
  <!-- Input Variants -->
  <ComponentPreview
    title="Text Input"
    description="Basic text input field"
    code={`<Input 
  type="text" 
  placeholder="Enter text"
  bind:value={text}
/>`}
  >
    <Stack class="stack--gap-lg" style="width: 100%; max-width: 480px;">
      <Stack class="stack--gap-sm">
        <Label for="email-input">Email Address</Label>
        <Input 
          id="email-input"
          type="email" 
          placeholder="you@example.com"
          bind:value={email}
        />
      </Stack>

      <Stack class="stack--gap-sm">
        <Label for="password-input">Password</Label>
        <Input 
          id="password-input"
          type="password" 
          placeholder="Enter password"
          bind:value={password}
        />
      </Stack>
    </Stack>
  </ComponentPreview>

  <!-- Number Input -->
  <ComponentPreview
    title="Number Input"
    description="Numeric input with increment controls"
    code={`<Input 
  type="number" 
  bind:value={quantity}
  min={1}
  step={1}
/>`}
  >
    <Stack class="stack--gap-sm" style="width: 100%; max-width: 320px;">
      <Label for="qty">Quantity</Label>
      <Input 
        id="qty"
        type="number" 
        bind:value={quantity}
        min={1}
        max={99}
        step={1}
      />
      <Text class="text--xs text--muted">Current: {quantity}</Text>
    </Stack>
  </ComponentPreview>

  <!-- Input Sizes -->
  <ComponentPreview
    title="Input Sizes"
    description="Three size variants: sm, md (default), lg"
    code={`<Input class="input--sm" placeholder="Small" />
<Input placeholder="Medium (default)" />
<Input class="input--lg" placeholder="Large" />`}
  >
    <Stack class="stack--gap-md" style="width: 100%; max-width: 480px;">
      <Input class="input--sm" placeholder="Small input (sm)" />
      <Input placeholder="Medium input (default)" />
      <Input class="input--lg" placeholder="Large input (lg)" />
    </Stack>
  </ComponentPreview>

  <!-- Textarea -->
  <ComponentPreview
    title="Textarea"
    description="Multi-line text input"
    code={`<Textarea 
  placeholder="Enter message"
  rows={4}
  bind:value={bio}
/>`}
  >
    <Stack class="stack--gap-sm" style="width: 100%; max-width: 600px;">
      <Label for="bio-area">Biography</Label>
      <Textarea 
        id="bio-area"
        placeholder="Tell us about yourself..."
        rows={5}
        bind:value={bio}
      />
      <Text class="text--xs text--muted">{bio.length} characters</Text>
    </Stack>
  </ComponentPreview>

  <!-- Checkboxes -->
  <ComponentPreview
    title="Checkbox"
    description="Single or multiple selection"
    code={`<Checkbox 
  label="Accept terms"
  bind:checked={acceptTerms}
/>`}
  >
    <Stack class="stack--gap-lg" style="width: 100%;">
      <Stack class="stack--gap-md">
        <Text class="text--sm text--bold">Preferences</Text>
        <Stack class="stack--gap-sm">
          <Checkbox 
            id="terms-check"
            label="I accept the terms and conditions"
            bind:checked={acceptTerms}
          />
          <Checkbox 
            id="newsletter-check"
            label="Subscribe to newsletter"
            bind:checked={newsletter}
          />
        </Stack>
      </Stack>

      <Separator />

      <Stack class="stack--gap-md">
        <Text class="text--sm text--bold">Checkbox Sizes</Text>
        <Stack class="stack--gap-sm">
          <Checkbox label="Small checkbox" class="checkbox--sm" />
          <Checkbox label="Medium checkbox (default)" />
          <Checkbox label="Large checkbox" class="checkbox--lg" />
        </Stack>
      </Stack>
    </Stack>
  </ComponentPreview>

  <!-- Radio Buttons -->
  <ComponentPreview
    title="Radio Group"
    description="Single selection from multiple options"
    code={`let theme = "dark";

<Radio 
  bind:group={theme}
  value="light"
  name="theme"
  label="Light"
/>
<Radio 
  bind:group={theme}
  value="dark"
  name="theme"
  label="Dark"
/>`}
  >
    <Stack class="stack--gap-lg" style="width: 100%;">
      <Stack class="stack--gap-md">
        <Text class="text--sm text--bold">Theme Preference</Text>
        <Stack class="stack--gap-sm">
          <Radio 
            bind:group={theme}
            value="light"
            name="theme-pref"
            label="Light mode"
          />
          <Radio 
            bind:group={theme}
            value="dark"
            name="theme-pref"
            label="Dark mode"
          />
          <Radio 
            bind:group={theme}
            value="system"
            name="theme-pref"
            label="System preference"
          />
        </Stack>
        <Text class="text--xs text--muted">Selected: {theme}</Text>
      </Stack>

      <Separator />

      <Stack class="stack--gap-md">
        <Text class="text--sm text--bold">Radio Sizes</Text>
        <Stack class="stack--gap-sm">
          <Radio label="Small radio" class="radio--sm" name="size-demo" />
          <Radio label="Medium radio (default)" name="size-demo" />
          <Radio label="Large radio" class="radio--lg" name="size-demo" />
        </Stack>
      </Stack>
    </Stack>
  </ComponentPreview>

  <!-- Switch -->
  <ComponentPreview
    title="Switch"
    description="Toggle between two states"
    code={`<Switch 
  label="Enable notifications"
  bind:checked={notifications}
/>`}
  >
    <Stack class="stack--gap-lg" style="width: 100%; max-width: 400px;">
      <Stack class="stack--gap-md">
        <Switch 
          id="notif-switch"
          label="Enable notifications"
          bind:checked={notifications}
        />
        <Text class="text--xs text--muted">Status: {notifications ? 'Enabled' : 'Disabled'}</Text>
      </Stack>

      <Separator />

      <Stack class="stack--gap-md">
        <Text class="text--sm text--bold">Switch Sizes</Text>
        <Stack class="stack--gap-sm">
          <Switch label="Small switch" class="switch--sm" />
          <Switch label="Medium switch (default)" />
          <Switch label="Large switch" class="switch--lg" />
        </Stack>
      </Stack>
    </Stack>
  </ComponentPreview>

  <!-- Disabled States -->
  <ComponentPreview
    title="Disabled State"
    description="All form controls support disabled state"
    code={`<Input placeholder="Disabled" disabled />
<Checkbox label="Disabled" disabled />
<Radio label="Disabled" disabled />
<Switch label="Disabled" disabled />
<Textarea placeholder="Disabled" disabled />`}
  >
    <Grid columns={2} class="grid--gap-lg grid--md-1" style="width: 100%;">
      <Stack class="stack--gap-md">
        <Text class="text--xs text--muted">INPUT</Text>
        <Input placeholder="Disabled input" disabled />
      </Stack>

      <Stack class="stack--gap-md">
        <Text class="text--xs text--muted">TEXTAREA</Text>
        <Textarea placeholder="Disabled textarea" disabled rows={3} />
      </Stack>

      <Stack class="stack--gap-md">
        <Text class="text--xs text--muted">CHECKBOX</Text>
        <Checkbox label="Disabled checkbox" disabled />
      </Stack>

      <Stack class="stack--gap-md">
        <Text class="text--xs text--muted">RADIO</Text>
        <Radio label="Disabled radio" disabled name="disabled" />
      </Stack>

      <Stack class="stack--gap-md">
        <Text class="text--xs text--muted">SWITCH</Text>
        <Switch label="Disabled switch" disabled />
      </Stack>
    </Grid>
  </ComponentPreview>

  <!-- Complete Form -->
  <ComponentPreview
    title="Form Example"
    description="Complete form layout with all components"
  >
    <Card style="max-width: 600px;">
      <Stack class="stack--gap-xl">
        <Stack class="stack--gap-md">
          <Text as="h3" class="text--lg text--bold">Contact Form</Text>
          <Text class="text--sm text--muted">Fill out the form below to get in touch</Text>
        </Stack>

        <Separator />

        <Stack class="stack--gap-lg">
          <Stack class="stack--gap-sm">
            <Label for="form-name" required>Full Name</Label>
            <Input id="form-name" placeholder="John Doe" />
          </Stack>

          <Stack class="stack--gap-sm">
            <Label for="form-email" required>Email Address</Label>
            <Input id="form-email" type="email" placeholder="you@example.com" />
          </Stack>

          <Stack class="stack--gap-sm">
            <Label for="form-subject">Subject</Label>
            <Input id="form-subject" placeholder="How can we help?" />
          </Stack>

          <Stack class="stack--gap-sm">
            <Label for="form-message">Message</Label>
            <Textarea 
              id="form-message" 
              rows={5} 
              placeholder="Your message here..."
            />
          </Stack>

          <Separator />

          <Stack class="stack--gap-md">
            <Checkbox 
              id="form-terms"
              label="I agree to the terms and conditions"
            />
            <Checkbox 
              id="form-updates"
              label="Send me product updates and news"
            />
          </Stack>
        </Stack>

        <Separator />

        <Stack class="stack--horizontal stack--gap-md">
          <Button variant="outline">Cancel</Button>
          <Button variant="accent" style="flex: 1;">Send Message</Button>
        </Stack>
      </Stack>
    </Card>
  </ComponentPreview>
</ShowcaseLayout>
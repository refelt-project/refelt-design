<script>
  import {
    Text,
    Button,
    Card,
    Badge,
    Input,
    Container,
    Stack,
    Grid
  } from '../lib';

  let email = '';
</script>

<Container>
  <Stack gap="xl">
    
    <!-- Hero -->
    <Stack gap="lg">
      <Text as="h1" size="xxl">
        Design Systems<br>Made Simple
      </Text>
      <Text size="lg">
        Beautifully crafted components built with precision. Accessible, customizable, and ready to use.
      </Text>
      <Stack direction="horizontal" gap="md">
        <Button>Get Started</Button>
        <Button variant="outline" size="sm">Learn More</Button>
      </Stack>
    </Stack>

    <!-- Cards Grid -->
    <Grid>
      
      <!-- Card with border -->
      <Card>
        <div slot="header">
          <Text size="xs">TOTAL REVENUE</Text>
        </div>
        <Stack gap="sm">
          <Text size="xl">$45,231</Text>
          <Text size="sm">+20.1% from last month</Text>
          <Badge variant="success">Active</Badge>
        </Stack>
      </Card>

      <!-- Card with strong border -->
      <Card border="strong">
        <div slot="header">
          <Text size="xs">ACTIVE USERS</Text>
        </div>
        <Stack gap="sm">
          <Text size="xl">+2,350</Text>
          <Text size="sm">+180.1% from last month</Text>
          <Badge variant="info">Tracking</Badge>
        </Stack>
      </Card>

      <!-- Transparent Card -->
      <Card variant="transparent" padding="sm">
        <Stack gap="md">
          <Text size="xs">TRANSPARENT DESIGN</Text>
          <Input
            id="email-home"
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            bind:value={email}
          />
          <Button variant="ghost">Sign Up</Button>
        </Stack>
      </Card>

      <!-- Card with footer -->
      <Card>
        <div slot="header">
          <Text size="xs">TEAM MEMBERS</Text>
        </div>
        <Stack gap="md">
          <Text>Sofia Davis</Text>
          <Text>Jackson Lee</Text>
          <Text>Isabella Nguyen</Text>
        </Stack>
        <div slot="footer">
          <Button variant="outline" size="sm">Invite</Button>
        </div>
      </Card>

      <!-- Button Variants Demo -->
      <Card variant="glass">
        <Stack gap="md">
          <Text size="xs">BUTTON VARIANTS</Text>
          <Stack gap="sm">
            <Button size="sm">Solid (Default)</Button>
            <Button variant="outline" size="sm">Outline</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
          </Stack>
        </Stack>
      </Card>

      <!-- Badge Variants Demo -->
      <Card>
        <Stack gap="md">
          <Text size="xs">STATUS BADGES</Text>
          <Stack direction="horizontal" gap="sm" style="flex-wrap: wrap;">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="pending">Pending</Badge>
          </Stack>
        </Stack>
      </Card>

    </Grid>

  </Stack>
</Container>

<style>
  :global(body) {
    padding-top: 0;
  }
</style>
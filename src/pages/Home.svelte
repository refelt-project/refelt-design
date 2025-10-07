<script>
  import {
    Text,
    Button,
    Card,
    Input,
    Container,
    Stack,
    Grid
  } from '../lib';

  let email = '';
</script>

<Container>
  <Stack direction="vertical" gap="xl">
    
    <!-- Hero -->
    <Stack direction="vertical" gap="lg">
      <Text as="h1" size="xxl">
        Design Systems<br>Made Simple
      </Text>
      <Text as="p" size="lg">
        Beautifully crafted components built with precision. Accessible, customizable, and ready to use.
      </Text>
      <Stack direction="horizontal" gap="md">
        <Button>Get Started</Button>
        <Button size="sm">Learn More</Button>
      </Stack>
    </Stack>

    <!-- Cards Grid -->
    <Grid columns="auto-fit" minColumnWidth="340px" gap="lg">
      
      <!-- Card with border -->
      <Card border="subtle" padding="md">
        <div slot="header">
          <Text as="p" size="xs">TOTAL REVENUE</Text>
        </div>
        <Stack direction="vertical" gap="sm">
          <Text as="p" size="xl">$45,231</Text>
          <Text as="p" size="sm">+20.1% from last month</Text>
        </Stack>
      </Card>

      <!-- Card with strong border -->
      <Card border="strong" padding="md">
        <div slot="header">
          <Text as="p" size="xs">ACTIVE USERS</Text>
        </div>
        <Stack direction="vertical" gap="sm">
          <Text as="p" size="xl">+2,350</Text>
          <Text as="p" size="sm">+180.1% from last month</Text>
        </Stack>
      </Card>

      <!-- Card without border -->
      <Card border="none" padding="sm">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">CREATE ACCOUNT</Text>
          <Input
            type="email"
            placeholder="you@example.com"
            bind:value={email}
          />
          <Button>Sign Up</Button>
        </Stack>
      </Card>

      <!-- Card with footer -->
      <Card border="subtle" padding="md">
        <div slot="header">
          <Text as="p" size="xs">TEAM MEMBERS</Text>
        </div>
        <Stack direction="vertical" gap="md">
          <Text as="p" size="md">Sofia Davis</Text>
          <Text as="p" size="md">Jackson Lee</Text>
          <Text as="p" size="md">Isabella Nguyen</Text>
        </Stack>
        <div slot="footer">
          <Button size="sm">Invite</Button>
        </div>
      </Card>

    </Grid>

  </Stack>
</Container>

<style>
  :global(body) {
    padding-top: 0;
  }
</style>
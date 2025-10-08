<script>
    import { Container, Stack, Text, Card, Input, Button } from '@/lib';
    import { pop } from 'svelte-spa-router';
  
    let name = '';
    let email = '';
  </script>
  
  <Container>
    <Stack gap="lg">
      <Text as="h1" size="xxl">Create New User</Text>
      <Text size="lg">Static nested route: /users/create</Text>
  
      <Card>
        <Stack gap="md">
          <Input
            id="name"
            label="Name"
            bind:value={name}
            placeholder="John Doe"
          />
          
          <Input
            id="email"
            label="Email"
            type="email"
            bind:value={email}
            placeholder="john@example.com"
          />
          
          <Stack direction="horizontal" gap="sm">
            <Button variant="accent">Create User</Button>
            <Button variant="outline" on:click={() => pop()}>Cancel</Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  </Container>
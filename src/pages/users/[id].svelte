<script>
    import { Container, Stack, Text, Card, Button } from '@/lib/uikit';
    import { pop } from 'svelte-spa-router';
  
    // svelte-spa-router automatically provides params
    export let params = {};
    
    $: userId = params.id;
  </script>
  
  <Container>
    <Stack gap="lg">
      <Text as="h1" size="xxl">User Details</Text>
      <Text size="lg">Dynamic route example: /users/:id</Text>
  
      <Card>
        <Stack gap="md">
          <Text size="lg">User ID: <strong>{userId}</strong></Text>
          <Text>This is a dynamic route. The [id] in the filename becomes :id in the URL.</Text>
          <Button on:click={() => pop()}>← Back to Users</Button>
        </Stack>
      </Card>
    </Stack>
  </Container>
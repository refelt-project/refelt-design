<script>
    import { Container, Stack, Text, Card, Button } from '@/lib/uikit';
    import { push } from 'svelte-spa-router';
  </script>
  
  <Container>
    <Stack gap="lg">
      <Text as="h1" size="xxl">Users List</Text>
      <Text size="lg">Example of nested routing: /users</Text>
  
      <Card>
        <Stack gap="md">
          <Text size="lg">Sample Users:</Text>
          <Button on:click={() => push('/users/1')}>View User #1</Button>
          <Button on:click={() => push('/users/2')}>View User #2</Button>
          <Button on:click={() => push('/users/create')}>Create New User</Button>
        </Stack>
      </Card>
    </Stack>
  </Container>s
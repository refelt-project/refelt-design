<script>
    import { Container, Stack, Text, Button } from '@/lib';
    import { push } from 'svelte-spa-router';
  </script>
  
  <Container>
    <Stack gap="lg" style="text-align: center; padding: 80px 0;">
      <Text as="h1" size="xxl">404</Text>
      <Text size="lg">Strona nie znaleziona</Text>
      <Button on:click={() => push('/')}>
        Wróć do strony głównej
      </Button>
    </Stack>
  </Container>
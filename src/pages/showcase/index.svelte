<!-- src/pages/projects/page.svelte -->
<script>
    import { Container, Stack, Card, Button, Text, Grid } from 'refelt-design/uikit';
    import { Film, Plus, Calendar, User } from 'lucide-svelte';
   </script>
  
  <Container>
    <Stack class="stack--gap-xl">
      <Stack class="stack--gap-md">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <Text as="h1" class="text--xxl">Projects</Text>
            <Text class="text--base text--muted">Manage your interactive films</Text>
          </div>
          <Button variant="accent">
            <Plus size={20} strokeWidth={2} />
            New Project
          </Button>
        </div>
      </Stack>
  
      <Grid columns={2} class="grid--gap-lg grid--md-1">
        <div>a</div>
        <div>a</div>
      </Grid>
    </Stack>
  </Container>
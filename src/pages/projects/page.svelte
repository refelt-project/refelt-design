<!-- src/pages/projects/page.svelte -->
<script>
    import { Container, Stack, Card, Button, Text, Grid } from 'refelt-design/uikit';
    import { Film, Plus, Calendar, User } from 'lucide-svelte';
    import Link from '@/router/Link.svelte';
  
    // Przykładowe dane projektów
    const projects = [
      {
        id: 1,
        title: 'Summer Adventure',
        description: 'Interactive film about summer journey',
        author: 'John Doe',
        createdAt: '2025-10-10'
      },
      {
        id: 2,
        title: 'Mystery Night',
        description: 'Choose your own detective story',
        author: 'Jane Smith',
        createdAt: '2025-10-12'
      },
      {
        id: 3,
        title: 'Space Odyssey',
        description: 'Sci-fi interactive experience',
        author: 'Mike Johnson',
        createdAt: '2025-10-14'
      }
    ];
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
        {#each projects as project}
          <Card>
            <Stack class="stack--gap-md">
              <Film size={32} strokeWidth={1.5} />
              
              <Stack class="stack--gap-sm">
                <Text class="text--lg text--bold">{project.title}</Text>
                <Text class="text--sm text--muted">{project.description}</Text>
              </Stack>
  
              <Stack class="stack--gap-xs">
                <div style="display:flex; align-items:center; gap:8px;">
                  <User size={16} strokeWidth={1.5} />
                  <Text class="text--xs text--muted">{project.author}</Text>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <Calendar size={16} strokeWidth={1.5} />
                  <Text class="text--xs text--muted">{project.createdAt}</Text>
                </div>
              </Stack>
  
              <div style="display:flex; gap:8px;">
                <Button variant="accent" class="btn--sm">Open</Button>
                <Button variant="outline" class="btn--sm">Edit</Button>
              </div>
            </Stack>
          </Card>
        {/each}
      </Grid>
    </Stack>
  </Container>
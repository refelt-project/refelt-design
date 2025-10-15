<!-- src/pages/Tasks.svelte -->
<script>
    import {
      Container,
      Stack,
      Grid,
      Card,
      Text,
      Button,
      Input,
      Separator,
      Badge,
      Switch,
      Label
    } from "@/lib/uikit";
    import { push } from "svelte-spa-router";
    import { Plus, Search, Filter, MoreVertical } from "lucide-svelte";
  
    // ── Demo dane (CRUD: create/read/update/delete – tu UI + stan klienta) ──
    let q = "";
    let onlyMy = false;
    let selected = new Set();
  
    const statuses = {
      todo: { label: "To do", variant: "info" },
      inprogress: { label: "In progress", variant: "pending" },
      review: { label: "Review", variant: "warning" },
      done: { label: "Done", variant: "success" },
      blocked: { label: "Blocked", variant: "error" }
    };
  
    let rows = [
      { id: "T-101", name: "Onboarding flow polish", assignee: "Sofia Davis", avatar: "S", status: "inprogress", priority: "High", due: "2025-10-18" },
      { id: "T-102", name: "Fix Stripe webhook retries", assignee: "Jackson Lee", avatar: "J", status: "review", priority: "Medium", due: "2025-10-12" },
      { id: "T-103", name: "Refactor Grid utils", assignee: "Isabella Nguyen", avatar: "I", status: "todo", priority: "Low", due: "2025-10-28" },
      { id: "T-104", name: "Migrate emails to SES", assignee: "Olivia Martin", avatar: "O", status: "blocked", priority: "High", due: "2025-10-15" },
      { id: "T-105", name: "Add audit log export", assignee: "Ethan Chen", avatar: "E", status: "done", priority: "Low", due: "2025-10-05" }
    ];
  
    function allVisible() {
      return filtered.map(r => r.id);
    }
  
    function toggleAll(e) {
      if (e.currentTarget.checked) {
        allVisible().forEach(id => selected.add(id));
      } else {
        allVisible().forEach(id => selected.delete(id));
      }
      selected = new Set(selected);
    }
  
    function toggle(id) {
      selected.has(id) ? selected.delete(id) : selected.add(id);
      selected = new Set(selected);
    }
  
    function isAllChecked() {
      const ids = allVisible();
      return ids.length && ids.every(id => selected.has(id));
    }
  
    function clearSelection() {
      selected = new Set();
    }
  
    function createTask() {
      // routing do formularza tworzenia (przykład)
      push("/tasks/create");
    }
  
    function bulkMarkDone() {
      rows = rows.map(r => (selected.has(r.id) ? { ...r, status: "done" } : r));
      clearSelection();
    }
  
    function bulkDelete() {
      rows = rows.filter(r => !selected.has(r.id));
      clearSelection();
    }
  
    $: filtered = rows.filter(r => {
      const byQuery =
        q.trim() === "" ||
        r.name.toLowerCase().includes(q.toLowerCase()) ||
        r.id.toLowerCase().includes(q.toLowerCase()) ||
        r.assignee.toLowerCase().includes(q.toLowerCase());
      const byMine = !onlyMy || r.assignee.toLowerCase().startsWith("sofia"); // demo
      return byQuery && byMine;
    });
  </script>
  
  <Container>
    <Stack class="stack--gap-xl">
      <!-- Nagłówek strony -->
      <Stack class="stack--gap-sm">
        <Text as="h1" class="text--xxl">Tasks</Text>
        <Text class="text--sm text--muted">Lista w stylu ClickUp – CRUD-ready</Text>
      </Stack>
  
      <!-- Toolbar -->
      <Card>
        <Stack class="stack--gap-md">
          <Grid columns={3} class="grid--gap-md grid--md-1">
            <div class="input-icon">
              <Search size={16} />
              <Input id="search" placeholder="Szukaj zadań, ID lub osób…" bind:value={q} />
            </div>
  
            <Stack class="stack--gap-sm stack--horizontal">
              <Button variant="outline" class="btn--sm">
                <Filter size={16} /> Filters
              </Button>
              <Stack class="stack--gap-sm stack--horizontal">
                <Switch id="only-my" bind:checked={onlyMy} />
                <Label for="only-my">Only mine</Label>
              </Stack>
            </Stack>
  
            <Stack class="stack--gap-sm stack--horizontal" style="justify-content: flex-end;">
              {#if selected.size > 0}
                <Button variant="accent" class="btn--sm" on:click={bulkMarkDone}>Mark done ({selected.size})</Button>
                <Button variant="outline" class="btn--sm" on:click={bulkDelete}>Delete</Button>
              {/if}
              <Button variant="accent" on:click={createTask}>
                <Plus size={16} /> New task
              </Button>
            </Stack>
          </Grid>
          <Separator />
          <!-- Tabela -->
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="width:40px;">
                    <input type="checkbox" checked={isAllChecked()} on:change={toggleAll} aria-label="Select all" />
                  </th>
                  <th>ID</th>
                  <th>Nazwa</th>
                  <th>Assignee</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Due</th>
                  <th style="width:48px;"></th>
                </tr>
              </thead>
              <tbody>
                {#each filtered as r}
                  <tr class:selected={selected.has(r.id)}>
                    <td>
                      <input type="checkbox" checked={selected.has(r.id)} on:change={() => toggle(r.id)} aria-label="Select row" />
                    </td>
                    <td class="cell-id">
                      <Text class="text--sm text--muted">{r.id}</Text>
                    </td>
                    <td>
                      <Text class="text--base text--bold">{r.name}</Text>
                    </td>
                    <td>
                      <div class="assignee">
                        <div class="avatar">{r.avatar}</div>
                        <Text class="text--sm">{r.assignee}</Text>
                      </div>
                    </td>
                    <td>
                      <Badge variant={statuses[r.status].variant}>
                        {statuses[r.status].label}
                      </Badge>
                    </td>
                    <td>
                      <span class="chip chip--{r.priority.toLowerCase()}">{r.priority}</span>
                    </td>
                      <td>
                        <Text class="text--sm">{r.due}</Text>
                      </td>
                    <td class="cell-actions">
                      <Button variant="ghost" class="btn--icon" aria-label="More">
                        <MoreVertical size={16} />
                      </Button>
                    </td>
                  </tr>
                {/each}
                {#if filtered.length === 0}
                  <tr>
                    <td colspan="8">
                      <Stack class="stack--gap-sm stack--align-center">
                        <Text class="text--base">Brak wyników</Text>
                        <Text class="text--sm text--muted">Zmień filtr lub dodaj nowe zadanie</Text>
                      </Stack>
                    </td>
                  </tr>
                {/if}
              </tbody>
            </table>
          </div>
  
          <!-- Footer / pagination (mock) -->
          <Stack class="stack--gap-sm stack--horizontal table-footer">
            <Text class="text--sm text--muted">Wyświetlono {filtered.length} z {rows.length}</Text>
            <div class="spacer" />
            <Stack class="stack--gap-sm stack--horizontal">
              <Button variant="outline" class="btn--sm">Prev</Button>
              <Button variant="outline" class="btn--sm">Next</Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  </Container>
  
  <style>
    /* Toolbar */
    .input-icon {
      position: relative;
    }
    .input-icon :global(input) {
      padding-left: 32px;
    }
    .input-icon :global(svg) {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.8;
    }
  
    /* Tabela */
    .table-wrapper { overflow: auto; }
    .data-table {
      width: 100%;
      border-collapse: collapse;
    }
    .data-table th, .data-table td {
      text-align: left;
      padding: 12px;
      border-bottom: 1px solid var(--border);
      vertical-align: middle;
    }
    .data-table thead th {
      font-weight: 500;
      color: var(--text-muted);
      font-size: 13px;
      white-space: nowrap;
    }
    .data-table tbody tr:hover {
      background: color-mix(in oklch, var(--bg-elevated) 85%, transparent);
    }
    .data-table tbody tr.selected {
      background: color-mix(in oklch, var(--accent) 10%, transparent);
      outline: 1px solid color-mix(in oklch, var(--accent) 50%, transparent);
      outline-offset: -1px;
    }
  
    /* Assignee */
    .assignee {
      display: inline-flex;
      gap: 10px;
      align-items: center;
    }
    .avatar {
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--bg-elevated);
      display: grid; place-items: center;
      font-size: 12px; font-weight: 700;
    }
  
    /* Priority chips */
    .chip {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: var(--radius-full);
      font-size: 12px;
      border: 1px solid var(--border);
    }
    .chip--high { background: color-mix(in oklch, var(--destructive) 18%, transparent); }
    .chip--medium { background: color-mix(in oklch, var(--accent) 18%, transparent); }
    .chip--low { background: color-mix(in oklch, var(--secondary) 35%, transparent); }
  
    .cell-id { white-space: nowrap; }
    .cell-actions { text-align: right; }
  
    .btn--icon { padding: 6px; }
  
    /* Footer */
    .table-footer { align-items: center; }
    .spacer { flex: 1; }
  
    /* RWD – tabela na mobile jako „cards” */
    @media (max-width: 768px) {
      .data-table thead { display: none; }
      .data-table, .data-table tbody, .data-table tr, .data-table td { display: block; width: 100%; }
      .data-table tr { border: 1px solid var(--border); border-radius: var(--radius-lg); margin-bottom: 12px; }
      .data-table td { border: none; padding: 10px 12px; }
      .data-table td:first-child { display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--border); }
      .cell-actions { text-align: left; }
    }
  </style>
  
<script>
  import {
    Text,
    Button,
    Card,
    Badge,
    Input,
    Container,
    Stack,
    Grid,
    Separator
  } from '@/uikit';
  
  // Import only the icons we need
  import { Sparkles, DollarSign, Users } from 'lucide-svelte';

  let email = '';
  let password = '';
  let shareLink = 'https://refelt.dev/docs';
  
  // Calendar data
  const calendarDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  
  // Team members data
  const teamMembers = [
    { name: 'Sofia Davis', email: 'm@example.com', avatar: 'S' },
    { name: 'Jackson Lee', email: 'p@example.com', avatar: 'J' },
    { name: 'Isabella Nguyen', email: 'i@example.com', avatar: 'I' }
  ];
  
  // Payments data
  const payments = [
    { status: 'success', email: 'ken99@example.com', amount: '$316.00' },
    { status: 'success', email: 'Abe45@example.com', amount: '$242.00' },
    { status: 'info', email: 'Monserrat44@example.com', amount: '$837.00' },
    { status: 'error', email: 'carmella@example.com', amount: '$721.00' },
    { status: 'pending', email: 'jason78@example.com', amount: '$450.00' }
  ];
  
  // Chat messages
  const messages = [
    { type: 'agent', avatar: 'S', name: 'Sofia Davis', text: 'Hi, how can I help you today?' },
    { type: 'user', text: 'Hey, I\'m having trouble with my account.' },
    { type: 'agent', avatar: 'S', name: 'Sofia Davis', text: 'What seems to be the problem?' }
  ];
  
  // Share document users
  const sharedUsers = [
    { name: 'Olivia Martin', email: 'm@example.com', avatar: 'O' },
    { name: 'Isabella Nguyen', email: 'b@example.com', avatar: 'I' }
  ];
</script>

<Container>
  <Stack class="stack--gap-xl">
    
    <!-- Hero Section -->
    <Stack class="stack--gap-lg">
      <div class="badge-hero">
        <Sparkles size={14} />
        New in Refelt
      </div>
      
      <Text as="h1" class="text--xxl">
        Components & Layouts<br>Showcase
      </Text>
      
      <Text class="text--lg">
        Poznaj gotowe kompozycje oparte o naszą bazę. Od kalendarzy i tabel, po czat i proste formularze.
      </Text>
    </Stack>

    <!-- Rich Components Grid -->
    <Grid columns={2} class="grid--gap-lg">
      
      <!-- Dashboard Card 1 -->
      <Card>
        <Stack class="stack--gap-md stack--horizontal stack--justify-between stack--align-start">
          <Stack class="stack--gap-sm">
            <Text class="text--xs">TOTAL REVENUE</Text>
            <Text class="text--xl">$15,231.89</Text>
            <Text class="text--sm">+20.1% vs last month</Text>
          </Stack>
          <div class="icon-wrapper">
            <DollarSign size={20} />
          </div>
        </Stack>
      </Card>

      <!-- Dashboard Card 2 -->
      <Card>
        <Stack class="stack--gap-md stack--horizontal stack--justify-between stack--align-start">
          <Stack class="stack--gap-sm">
            <Text class="text--xs">SUBSCRIPTIONS</Text>
            <Text class="text--xl">+2,350</Text>
            <Text class="text--sm">+180.1% vs last month</Text>
          </Stack>
          <div class="icon-wrapper">
            <Users size={20} />
          </div>
        </Stack>
      </Card>

      <!-- Calendar Card -->
      <Card>
        <Stack class="stack--gap-md">
          <Text class="text--xs">OCTOBER 2025</Text>
          <div class="calendar">
            {#each calendarDays as day}
              <div class="calendar-header">{day}</div>
            {/each}
            {#each days as day}
              <button class="calendar-day">{day}</button>
            {/each}
          </div>
        </Stack>
      </Card>

      <!-- Move Goal Card -->
      <Card>
        <Stack class="stack--gap-md">
          <Text class="text--xs">MOVE GOAL</Text>
          <Text class="text--base">Set your daily activity goal.</Text>
          <Text class="text--xl">350</Text>
          <Text class="text--sm">Calories/day</Text>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 70%;"></div>
          </div>
        </Stack>
      </Card>

      <!-- Exercise Minutes Card -->
      <Card>
        <Stack class="stack--gap-md">
          <Text class="text--xs">EXERCISE MINUTES</Text>
          <Text class="text--base">Your exercise minutes are ahead of where you normally are.</Text>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 85%;"></div>
          </div>
        </Stack>
      </Card>

      <!-- Team Members Card -->
      <Card>
        <Stack class="stack--gap-md">
          <Text class="text--xs">TEAM MEMBERS</Text>
          <Text class="text--base">Invite your team members to collaborate.</Text>
          
          <Stack class="stack--gap-sm">
            {#each teamMembers as member}
              <div class="user-item">
                <div class="avatar">{member.avatar}</div>
                <Stack class="stack--gap-sm">
                  <Text class="text--base">{member.name}</Text>
                  <Text class="text--sm text--muted">{member.email}</Text>
                </Stack>
              </div>
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Payments Table Card -->
      <Card class="card--span-2">
        <Stack class="stack--gap-md">
          <Text class="text--xs">PAYMENTS</Text>
          <Text class="text--base">Manage your payments.</Text>
          
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th><Text class="text--sm">Status</Text></th>
                  <th><Text class="text--sm">Email</Text></th>
                  <th><Text class="text--sm">Amount</Text></th>
                </tr>
              </thead>
              <tbody>
                {#each payments as payment}
                  <tr>
                    <td>
                      <Badge variant={payment.status}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </Badge>
                    </td>
                    <td><Text class="text--base">{payment.email}</Text></td>
                    <td><Text class="text--base">{payment.amount}</Text></td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </Stack>
      </Card>

      <!-- Create Account Form -->
      <Card>
        <Stack class="stack--gap-md">
          <Text class="text--xs">CREATE AN ACCOUNT</Text>
          <Text class="text--base">Enter your email below to create your account</Text>
          
          <Stack class="stack--gap-md">
            <Stack class="stack--gap-sm">
              <Input
                id="email-input"
                label="Email"
                type="email"
                placeholder="name@example.com"
                bind:value={email}
              />
            </Stack>
            
            <Stack class="stack--gap-sm">
              <Input
                id="password-input"
                label="Password"
                type="password"
                placeholder="••••••••"
                bind:value={password}
              />
            </Stack>
            
            <Button variant="accent">Create account</Button>
          </Stack>
        </Stack>
      </Card>

      <!-- Chat Card -->
      <Card>
        <Stack class="stack--gap-md">
          <Text class="text--xs">REPORT AN ISSUE</Text>
          <Text class="text--base">What area are you having problems with?</Text>
          
          <Stack class="stack--gap-md">
            {#each messages as message}
              {#if message.type === 'agent'}
                <div class="message">
                  <div class="avatar">{message.avatar}</div>
                  <Stack class="stack--gap-sm">
                    <Text class="text--sm text--bold">{message.name}</Text>
                    <div class="message-content">
                      <Text class="text--base">{message.text}</Text>
                    </div>
                  </Stack>
                </div>
              {:else}
                <div class="message message--user">
                  <div class="message-content message-content--user">
                    <Text class="text--base">{message.text}</Text>
                  </div>
                </div>
              {/if}
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Share Document Card -->
      <Card>
        <Stack class="stack--gap-md">
          <Text class="text--xs">SHARE THIS DOCUMENT</Text>
          <Text class="text--base">Anyone with the link can view this document.</Text>
          
          <Input
            id="share-link"
            label="Share Link"
            bind:value={shareLink}
          />
          
          <Separator />
          
          <Text class="text--sm text--bold">PEOPLE WITH ACCESS</Text>
          
          <Stack class="stack--gap-sm">
            {#each sharedUsers as user}
              <div class="user-item">
                <div class="avatar">{user.avatar}</div>
                <Stack class="stack--gap-sm">
                  <Text class="text--base">{user.name}</Text>
                  <Text class="text--sm text--muted">{user.email}</Text>
                </Stack>
              </div>
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Example: Transparent Card -->
      <Card variant="transparent">
        <Stack class="stack--gap-md">
          <Text class="text--xs">TRANSPARENT CARD</Text>
          <Text class="text--base">This card has a transparent background — perfect for layering.</Text>
          <Stack class="stack--gap-sm stack--horizontal">
            <Badge variant="success">Active</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </Stack>
        </Stack>
      </Card>

      <!-- Example: Glass Card -->
      <Card variant="glass">
        <Stack class="stack--gap-md">
          <Text class="text--xs">GLASS MORPHISM</Text>
          <Text class="text--base">This card has a frosted glass effect with backdrop blur.</Text>
          <Stack class="stack--gap-sm stack--horizontal">
            <Button variant="outline" class="btn--sm">Outline</Button>
            <Button variant="ghost" class="btn--sm">Ghost</Button>
          </Stack>
        </Stack>
      </Card>

    </Grid>

  </Stack>
</Container>

<style>
  .badge-hero {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 13px;
    color: var(--text);
  }
  
  .icon-wrapper {
    color: var(--text-muted);
  }
  
  /* Calendar */
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    margin-top: 16px;
  }
  
  .calendar-header {
    text-align: center;
    font-size: 12px;
    color: var(--text-muted);
    font-weight: 500;
    padding: 8px;
  }
  
  .calendar-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
    border: none;
    color: var(--text);
    font-family: inherit;
  }
  
  .calendar-day:hover {
    background: var(--bg-elevated);
  }
  
  /* Progress Bar */
  .progress-bar {
    width: 100%;
    height: 8px;
    background: var(--border);
    border-radius: 999px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background: var(--accent);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* User Item */
  .user-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .user-item:hover {
    background: var(--bg-elevated);
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bg-elevated);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    color: var(--text);
    flex-shrink: 0;
  }
  
  /* Data Table */
  .table-wrapper {
    overflow-x: auto;
  }
  
  .data-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .data-table th,
  .data-table td {
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid var(--border);
  }
  
  .data-table th {
    font-weight: 500;
  }
  
  .data-table tbody tr:last-child td {
    border-bottom: none;
  }
  
  /* Messages */
  .message {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  
  .message--user {
    justify-content: flex-end;
  }
  
  .message-content {
    background: var(--bg-elevated);
    padding: 12px;
    border-radius: 8px;
    max-width: 80%;
  }
  
  .message-content--user {
    background: var(--accent);
  }

  .message-content--user :global(.text) {
    color: var(--accent-fg);
  }
  
  /* Card Modifiers */
  :global(.card--span-2) {
    grid-column: span 2;
  }
  
  /* Stack Modifiers - fallback if not in component */
  :global(.stack--horizontal) {
    flex-direction: row;
  }
  
  :global(.stack--justify-between) {
    justify-content: space-between;
  }
  
  :global(.stack--align-start) {
    align-items: flex-start;
  }
</style>
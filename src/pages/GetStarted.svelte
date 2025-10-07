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
  <Stack gap="xl">
    
    <!-- Hero Section -->
    <Stack gap="lg">
      <div class="badge-hero">
        <Sparkles size={14} />
        New in Refelt
      </div>
      
      <Text as="h1" size="xxl">
        Components & Layouts<br>Showcase
      </Text>
      
      <Text size="lg">
        Poznaj gotowe kompozycje oparte o naszą bazę. Od kalendarzy i tabel, po czat i proste formularze.
      </Text>
    </Stack>

    <!-- Rich Components Grid -->
    <Grid>
      
      <!-- Dashboard Card 1 -->
      <Card>
        <Stack direction="horizontal" gap="md" style="justify-content: space-between; align-items: flex-start;">
          <Stack gap="sm">
            <Text size="xs">TOTAL REVENUE</Text>
            <Text size="xl">$15,231.89</Text>
            <Text size="sm">+20.1% vs last month</Text>
          </Stack>
          <div class="icon-wrapper">
            <DollarSign size={20} />
          </div>
        </Stack>
      </Card>

      <!-- Dashboard Card 2 -->
      <Card>
        <Stack direction="horizontal" gap="md" style="justify-content: space-between; align-items: flex-start;">
          <Stack gap="sm">
            <Text size="xs">SUBSCRIPTIONS</Text>
            <Text size="xl">+2,350</Text>
            <Text size="sm">+180.1% vs last month</Text>
          </Stack>
          <div class="icon-wrapper">
            <Users size={20} />
          </div>
        </Stack>
      </Card>

      <!-- Calendar Card -->
      <Card>
        <div slot="header">
          <Text size="xs">OCTOBER 2025</Text>
        </div>
        <div class="calendar">
          {#each calendarDays as day}
            <div class="calendar-header">{day}</div>
          {/each}
          {#each days as day}
            <button class="calendar-day">{day}</button>
          {/each}
        </div>
      </Card>

      <!-- Move Goal Card -->
      <Card>
        <Stack gap="md">
          <Text size="xs">MOVE GOAL</Text>
          <Text>Set your daily activity goal.</Text>
          <Text size="xl">350</Text>
          <Text size="sm">Calories/day</Text>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 70%;"></div>
          </div>
        </Stack>
      </Card>

      <!-- Exercise Minutes Card -->
      <Card>
        <Stack gap="md">
          <Text size="xs">EXERCISE MINUTES</Text>
          <Text>Your exercise minutes are ahead of where you normally are.</Text>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 85%;"></div>
          </div>
        </Stack>
      </Card>

      <!-- Team Members Card -->
      <Card>
        <Stack gap="md">
          <Text size="xs">TEAM MEMBERS</Text>
          <Text>Invite your team members to collaborate.</Text>
          
          <Stack gap="sm">
            {#each teamMembers as member}
              <div class="user-item">
                <div class="avatar">{member.avatar}</div>
                <Stack gap="sm">
                  <Text>{member.name}</Text>
                  <Text size="sm">{member.email}</Text>
                </Stack>
              </div>
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Payments Table Card -->
      <Card style="grid-column: span 2;">
        <Stack gap="md">
          <Text size="xs">PAYMENTS</Text>
          <Text>Manage your payments.</Text>
          
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th><Text size="sm">Status</Text></th>
                  <th><Text size="sm">Email</Text></th>
                  <th><Text size="sm">Amount</Text></th>
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
                    <td><Text>{payment.email}</Text></td>
                    <td><Text>{payment.amount}</Text></td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </Stack>
      </Card>

      <!-- Create Account Form -->
      <Card>
        <Stack gap="md">
          <Text size="xs">CREATE AN ACCOUNT</Text>
          <Text>Enter your email below to create your account</Text>
          
          <Stack gap="md">
            <Stack gap="sm">
              <Input
                id="email-input"
                label="Email"
                type="email"
                placeholder="name@example.com"
                bind:value={email}
              />
            </Stack>
            
            <Stack gap="sm">
              <Input
                id="password-input"
                label="Password"
                type="password"
                placeholder="••••••••"
                bind:value={password}
              />
            </Stack>
            
            <Button>Create account</Button>
          </Stack>
        </Stack>
      </Card>

      <!-- Chat Card -->
      <Card>
        <Stack gap="md">
          <Text size="xs">REPORT AN ISSUE</Text>
          <Text>What area are you having problems with?</Text>
          
          <Stack gap="md">
            {#each messages as message}
              {#if message.type === 'agent'}
                <div class="message">
                  <div class="avatar">{message.avatar}</div>
                  <Stack gap="sm">
                    <Text size="sm">{message.name}</Text>
                    <div class="message-content">
                      <Text>{message.text}</Text>
                    </div>
                  </Stack>
                </div>
              {:else}
                <div class="message message-user">
                  <div class="message-content message-content-user">
                    <Text>{message.text}</Text>
                  </div>
                </div>
              {/if}
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Share Document Card -->
      <Card>
        <Stack gap="md">
          <Text size="xs">SHARE THIS DOCUMENT</Text>
          <Text>Anyone with the link can view this document.</Text>
          
          <Input
            id="share-link"
            label="Share Link"
            bind:value={shareLink}
          />
          
          <Text size="sm">PEOPLE WITH ACCESS</Text>
          
          <Stack gap="sm">
            {#each sharedUsers as user}
              <div class="user-item">
                <div class="avatar">{user.avatar}</div>
                <Stack gap="sm">
                  <Text>{user.name}</Text>
                  <Text size="sm">{user.email}</Text>
                </Stack>
              </div>
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Example: Transparent Card -->
      <Card variant="transparent">
        <Stack gap="md">
          <Text size="xs">TRANSPARENT CARD</Text>
          <Text>This card has a transparent background — perfect for layering.</Text>
          <Stack direction="horizontal" gap="sm">
            <Badge variant="success">Active</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </Stack>
        </Stack>
      </Card>

      <!-- Example: Glass Card -->
      <Card variant="glass">
        <Stack gap="md">
          <Text size="xs">GLASS MORPHISM</Text>
          <Text>This card has a frosted glass effect with backdrop blur.</Text>
          <Stack direction="horizontal" gap="sm">
            <Button variant="outline" size="sm">Outline</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
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
  
  .message-user {
    justify-content: flex-end;
  }
  
  .message-content {
    background: var(--bg-elevated);
    padding: 12px;
    border-radius: 8px;
    max-width: 80%;
  }
  
  .message-content-user {
    background: var(--accent);
  }

  .message-content-user :global(.text) {
    color: var(--accent-fg);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    :global(.card[style*="grid-column: span 2"]) {
      grid-column: span 1 !important;
    }
  }
</style>

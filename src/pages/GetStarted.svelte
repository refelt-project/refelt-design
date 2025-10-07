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
  let password = '';
  let shareLink = 'https://choosewise.com/docs';
  
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
    { status: 'processing', email: 'Monserrat44@example.com', amount: '$837.00' },
    { status: 'failed', email: 'carmella@example.com', amount: '$721.00' },
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
  <Stack direction="vertical" gap="xl">
    
    <!-- Hero Section -->
    <Stack direction="vertical" gap="lg">
      <div class="badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        </svg>
        New Components Available
      </div>
      
      <Text as="h1" size="xxl">
        Rich Components<br>Showcase
      </Text>
      
      <Text as="p" size="lg">
        Explore advanced component compositions built with our base system. From calendars to data tables, chat interfaces to progress trackers.
      </Text>
    </Stack>

    <!-- Rich Components Grid -->
    <Grid columns="auto-fit" minColumnWidth="340px" gap="lg">
      
      <!-- Dashboard Card 1 -->
      <Card border="subtle" padding="md">
        <Stack direction="horizontal" gap="md" style="justify-content: space-between; align-items: flex-start;">
          <Stack direction="vertical" gap="sm">
            <Text as="p" size="xs">TOTAL REVENUE</Text>
            <Text as="p" size="xl">$15,231.89</Text>
            <Text as="p" size="sm">+20.1% from last month</Text>
          </Stack>
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
        </Stack>
      </Card>

      <!-- Dashboard Card 2 -->
      <Card border="subtle" padding="md">
        <Stack direction="horizontal" gap="md" style="justify-content: space-between; align-items: flex-start;">
          <Stack direction="vertical" gap="sm">
            <Text as="p" size="xs">SUBSCRIPTIONS</Text>
            <Text as="p" size="xl">+2,350</Text>
            <Text as="p" size="sm">+180.1% from last month</Text>
          </Stack>
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
        </Stack>
      </Card>

      <!-- Calendar Card -->
      <Card border="subtle" padding="md">
        <div slot="header">
          <Text as="p" size="xs">OCTOBER 2025</Text>
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
      <Card border="subtle" padding="md">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">MOVE GOAL</Text>
          <Text as="p" size="md">Set your daily activity goal.</Text>
          <Text as="p" size="xl">350</Text>
          <Text as="p" size="sm">Calories/day</Text>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 70%;"></div>
          </div>
        </Stack>
      </Card>

      <!-- Exercise Minutes Card -->
      <Card border="subtle" padding="md">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">EXERCISE MINUTES</Text>
          <Text as="p" size="md">Your exercise minutes are ahead of where you normally are.</Text>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 85%;"></div>
          </div>
        </Stack>
      </Card>

      <!-- Team Members Card -->
      <Card border="subtle" padding="md">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">TEAM MEMBERS</Text>
          <Text as="p" size="md">Invite your team members to collaborate.</Text>
          
          <Stack direction="vertical" gap="sm">
            {#each teamMembers as member}
              <div class="user-item">
                <div class="avatar">{member.avatar}</div>
                <Stack direction="vertical" gap="sm">
                  <Text as="p" size="md">{member.name}</Text>
                  <Text as="p" size="sm">{member.email}</Text>
                </Stack>
              </div>
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Payments Table Card -->
      <Card border="subtle" padding="md" style="grid-column: span 2;">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">PAYMENTS</Text>
          <Text as="p" size="md">Manage your payments.</Text>
          
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th><Text as="p" size="sm">Status</Text></th>
                  <th><Text as="p" size="sm">Email</Text></th>
                  <th><Text as="p" size="sm">Amount</Text></th>
                </tr>
              </thead>
              <tbody>
                {#each payments as payment}
                  <tr>
                    <td>
                      <span class="status status-{payment.status}">
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                    <td><Text as="p" size="md">{payment.email}</Text></td>
                    <td><Text as="p" size="md">{payment.amount}</Text></td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </Stack>
      </Card>

      <!-- Create Account Form -->
      <Card border="subtle" padding="md">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">CREATE AN ACCOUNT</Text>
          <Text as="p" size="md">Enter your email below to create your account</Text>
          
          <Stack direction="vertical" gap="md">
            <Stack direction="vertical" gap="sm">
              <Text as="p" size="sm">Email</Text>
              <Input
                type="email"
                placeholder="name@example.com"
                bind:value={email}
              />
            </Stack>
            
            <Stack direction="vertical" gap="sm">
              <Text as="p" size="sm">Password</Text>
              <Input
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
      <Card border="subtle" padding="md">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">REPORT AN ISSUE</Text>
          <Text as="p" size="md">What area are you having problems with?</Text>
          
          <Stack direction="vertical" gap="md">
            {#each messages as message}
              {#if message.type === 'agent'}
                <div class="message">
                  <div class="avatar">{message.avatar}</div>
                  <Stack direction="vertical" gap="sm">
                    <Text as="p" size="sm">{message.name}</Text>
                    <div class="message-content">
                      <Text as="p" size="md">{message.text}</Text>
                    </div>
                  </Stack>
                </div>
              {:else}
                <div class="message message-user">
                  <div class="message-content message-content-user">
                    <Text as="p" size="md">{message.text}</Text>
                  </div>
                </div>
              {/if}
            {/each}
          </Stack>
        </Stack>
      </Card>

      <!-- Share Document Card -->
      <Card border="subtle" padding="md">
        <Stack direction="vertical" gap="md">
          <Text as="p" size="xs">SHARE THIS DOCUMENT</Text>
          <Text as="p" size="md">Anyone with the link can view this document.</Text>
          
          <Input
            type="text"
            bind:value={shareLink}
          />
          
          <Text as="p" size="sm">PEOPLE WITH ACCESS</Text>
          
          <Stack direction="vertical" gap="sm">
            {#each sharedUsers as user}
              <div class="user-item">
                <div class="avatar">{user.avatar}</div>
                <Stack direction="vertical" gap="sm">
                  <Text as="p" size="md">{user.name}</Text>
                  <Text as="p" size="sm">{user.email}</Text>
                </Stack>
              </div>
            {/each}
          </Stack>
        </Stack>
      </Card>

    </Grid>

  </Stack>
</Container>

<style>
  .badge {
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
  
  /* Status Badge */
  .status {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
  
  .status-success {
    background: #166534;
    color: #86efac;
  }
  
  .status-processing {
    background: #1e3a8a;
    color: #93c5fd;
  }
  
  .status-failed {
    background: #7f1d1d;
    color: #fca5a5;
  }
  
  .status-pending {
    background: #713f12;
    color: #fde047;
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
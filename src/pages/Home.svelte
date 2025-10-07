<script>
  import {
    Text,
    Button,
    Card,
    CardHeader,
    CardFooter,
    Badge,
    Input,
    Container,
    Stack,
    Grid
  } from '../lib';

  // Form state
  let cardName = '';
  let cardNumber = '';
  let cvv = '';
  let comments = '';
  let sameAsShipping = true;
</script>

<Container>
  <Stack gap="xl">
    
    <Stack gap="md">
      <Text size="xl">Payment Form Demo</Text>
      <Text size="base" muted>Example cards using the new Card components</Text>
    </Stack>

    <Grid gap="lg">
      
      <!-- Payment Form Card -->
      <Card class="span-2">
        <form>
          <Stack gap="lg">
            
            <!-- Payment Method Section -->
            <Stack gap="lg">
              <Stack gap="sm">
                <Text size="lg">Payment Method</Text>
                <Text size="sm" muted>All transactions are secure and encrypted</Text>
              </Stack>
              
              <Stack gap="lg">
                <Stack gap="sm">
                  <label for="card-name" class="label">Name on Card</label>
                  <Input
                    id="card-name"
                    placeholder="John Doe"
                    bind:value={cardName}
                  />
                </Stack>
                
                <Grid columns={3} gap="md">
                  <Stack gap="sm" class="span-2">
                    <label for="card-number" class="label">Card Number</label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      bind:value={cardNumber}
                    />
                    <Text size="sm" muted>Enter your 16-digit number.</Text>
                  </Stack>
                  
                  <Stack gap="sm">
                    <label for="cvv" class="label">CVV</label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      bind:value={cvv}
                    />
                  </Stack>
                </Grid>
                
                <Grid columns={2} gap="md">
                  <Stack gap="sm">
                    <label for="month" class="label">Month</label>
                    <Input
                      id="month"
                      placeholder="MM"
                    />
                  </Stack>
                  
                  <Stack gap="sm">
                    <label for="year" class="label">Year</label>
                    <Input
                      id="year"
                      placeholder="YYYY"
                    />
                  </Stack>
                </Grid>
              </Stack>
            </Stack>
            
            <!-- Separator -->
            <div class="separator"></div>
            
            <!-- Billing Address Section -->
            <Stack gap="lg">
              <Stack gap="sm">
                <Text size="lg">Billing Address</Text>
                <Text size="sm" muted>The billing address associated with your payment method</Text>
              </Stack>
              
              <Stack direction="horizontal" gap="sm">
                <input 
                  type="checkbox" 
                  id="same-shipping"
                  class="checkbox"
                  bind:checked={sameAsShipping}
                />
                <label for="same-shipping" class="label-inline">
                  Same as shipping address
                </label>
              </Stack>
            </Stack>
            
            <!-- Separator -->
            <div class="separator"></div>
            
            <!-- Comments Section -->
            <Stack gap="sm">
              <label for="comments" class="label">Comments</label>
              <textarea
                id="comments"
                placeholder="Add any additional comments"
                class="textarea"
                bind:value={comments}
              />
            </Stack>
            
            <!-- Action Buttons -->
            <Stack direction="horizontal" gap="md">
              <Button variant="accent" type="submit">Submit</Button>
              <Button variant="outline" type="button">Cancel</Button>
            </Stack>
            
          </Stack>
        </form>
      </Card>

      <!-- Empty Card 1 -->
      <Card>
        <Stack gap="md">
          <Text size="base">EMPTY CARD 1</Text>
          <Text size="sm" muted>This is a placeholder card for future content.</Text>
        </Stack>
      </Card>

      <!-- Empty Card 2 -->
      <Card>
        <Stack gap="md">
          <Text size="base">EMPTY CARD 2</Text>
          <Text size="sm" muted>Another placeholder card ready for content.</Text>
        </Stack>
      </Card>

    </Grid>
  </Stack>
</Container>

<style>
  /* Utility */
  :global(.span-2) { grid-column: span 2; }
  
  /* Form elements */
  .label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
  }
  
  .label-inline {
    font-size: 14px;
    color: var(--text);
    cursor: pointer;
  }
  
  .checkbox {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid var(--border);
    cursor: pointer;
  }
  
  .textarea {
    min-height: 96px;
    width: 100%;
    padding: 12px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text);
    font-size: 14px;
    font-family: inherit;
    resize: vertical;
    transition: all var(--transition-base);
  }
  
  .textarea:focus {
    outline: none;
    border-color: var(--accent);
  }
  
  .textarea::placeholder {
    color: var(--text-subtle);
  }
  
  /* Separator */
  .separator {
    width: 100%;
    height: 1px;
    background: var(--border);
    margin: 0;
  }
</style>
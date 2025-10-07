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
    Checkbox,
    Textarea,
    Label,
    Separator
  } from '../lib';

  // Form state
  let cardName = '';
  let cardNumber = '';
  let cvv = '';
  let comments = '';
  let sameAsShipping = true;
</script>

<Container>
  <Stack class="stack--gap-xl">
    
    <Stack class="stack--gap-md">
      <Text as="h1" class="text--xl">Payment Form Demo</Text>
      <Text class="text--base text--muted">Example using new component--modifier pattern</Text>
    </Stack>

    <Grid class="grid--gap-lg">
      
      <!-- Payment Form Card -->
      <Card class="span-2">
        <form>
          <Stack class="stack--gap-lg">
            
            <!-- Payment Method Section -->
            <Stack class="stack--gap-lg">
              <Stack class="stack--gap-sm">
                <Text class="text--lg">Payment Method</Text>
                <Text class="text--sm text--muted">All transactions are secure and encrypted</Text>
              </Stack>
              
              <Stack class="stack--gap-lg">
                <Stack class="stack--gap-sm">
                  <Label for="card-name">Name on Card</Label>
                  <Input
                    id="card-name"
                    placeholder="John Doe"
                    bind:value={cardName}
                  />
                </Stack>
                
                <Grid columns={3} class="grid--gap-md">
                  <Stack class="stack--gap-sm span-2">
                    <Label for="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      bind:value={cardNumber}
                    />
                    <Text class="text--sm text--muted">Enter your 16-digit number.</Text>
                  </Stack>
                  
                  <Stack class="stack--gap-sm">
                    <Label for="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      bind:value={cvv}
                    />
                  </Stack>
                </Grid>
                
                <Grid columns={2} class="grid--gap-md">
                  <Stack class="stack--gap-sm">
                    <Label for="month">Month</Label>
                    <Input
                      id="month"
                      placeholder="MM"
                    />
                  </Stack>
                  
                  <Stack class="stack--gap-sm">
                    <Label for="year">Year</Label>
                    <Input
                      id="year"
                      placeholder="YYYY"
                    />
                  </Stack>
                </Grid>
              </Stack>
            </Stack>
            
            <!-- Separator Component -->
            <Separator />
            
            <!-- Billing Address Section -->
            <Stack class="stack--gap-lg">
              <Stack class="stack--gap-sm">
                <Text class="text--lg">Billing Address</Text>
                <Text class="text--sm text--muted">The billing address associated with your payment method</Text>
              </Stack>
              
              <Checkbox
                id="same-shipping"
                label="Same as shipping address"
                bind:checked={sameAsShipping}
              />
            </Stack>
            
            <!-- Separator Component -->
            <Separator />
            
            <!-- Comments Section -->
            <Stack class="stack--gap-sm">
              <Label for="comments">Comments</Label>
              <Textarea
                id="comments"
                placeholder="Add any additional comments"
                bind:value={comments}
                rows={4}
              />
            </Stack>
            
            <!-- Action Buttons -->
            <Stack class="stack--horizontal stack--gap-md">
              <Button variant="accent" type="submit">Submit</Button>
              <Button variant="outline" type="button">Cancel</Button>
            </Stack>
            
          </Stack>
        </form>
      </Card>

      <!-- Status Card -->
      <Card variant="elevated">
        <Stack class="stack--gap-md">
          <Text class="text--base">Payment Status</Text>
          <Stack class="stack--horizontal stack--gap-sm">
            <Badge variant="success" class="badge--sm">Verified</Badge>
            <Badge variant="info" class="badge--sm">Encrypted</Badge>
          </Stack>
          <Text class="text--sm text--muted">Your payment information is secure</Text>
        </Stack>
      </Card>

      <!-- Info Card -->
      <Card class="card--glass">
        <Stack class="stack--gap-md">
          <Text class="text--base">Glass Morphism</Text>
          <Text class="text--sm text--muted">This card demonstrates the new glass effect modifier</Text>
          <Button variant="ghost" class="btn--sm">Learn More</Button>
        </Stack>
      </Card>

    </Grid>
  </Stack>
</Container>

<style>
  /* Utility */
  :global(.span-2) { grid-column: span 2; }
</style>
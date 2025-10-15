<script>
    import {
      Text,
      Button,
      Input,
      Stack,
      Grid,
      Checkbox,
      Textarea,
      Label,
      Separator
    } from '@/lib/uikit';
  
    // Form state
    let cardName = '';
    let cardNumber = '';
    let cvv = '';
    let month = '';
    let year = '';
    let comments = '';
    let sameAsShipping = true;
  
    // Validation errors (client + server)
    let errors = {
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: '',
      comments: '',
      general: '' // for server errors
    };
  
    // Client-side validation
    function validateField(fieldName, value) {
      switch(fieldName) {
        case 'cardName':
          return value.trim() ? '' : 'Name on card is required';
        case 'cardNumber':
          return /^\d{16}$/.test(value.replace(/\s/g, '')) ? '' : 'Card number must be 16 digits';
        case 'cvv':
          return /^\d{3,4}$/.test(value) ? '' : 'CVV must be 3 or 4 digits';
        case 'month':
          const m = parseInt(value);
          return (m >= 1 && m <= 12) ? '' : 'Month must be between 1-12';
        case 'year':
          const y = parseInt(value);
          const currentYear = new Date().getFullYear();
          return (y >= currentYear) ? '' : 'Year must be current or future';
        default:
          return '';
      }
    }
  
    function validateForm() {
      errors.cardName = validateField('cardName', cardName);
      errors.cardNumber = validateField('cardNumber', cardNumber);
      errors.cvv = validateField('cvv', cvv);
      errors.month = validateField('month', month);
      errors.year = validateField('year', year);
      
      // Return true if no errors
      return !Object.values(errors).some(error => error !== '');
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      
      // Clear previous errors
      errors.general = '';
      
      // Validate
      if (!validateForm()) {
        return;
      }
      
      const formData = {
        cardName,
        cardNumber,
        cvv,
        month,
        year,
        comments,
        sameAsShipping
      };
      
      alert(JSON.stringify(formData, null, 2));
      
      console.log('Payment form submitted:', formData);
      
      // Future: server submission
      // try {
      //   const response = await fetch('/api/payment', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(formData)
      //   });
      //   
      //   if (!response.ok) {
      //     const serverErrors = await response.json();
      //     // Set server errors - example format: { cardNumber: 'Invalid card', general: 'Payment declined' }
      //     errors = { ...errors, ...serverErrors };
      //   }
      // } catch (error) {
      //   errors.general = 'Payment failed. Please try again.';
      // }
    }
  
    function handleCancel() {
      console.log('Payment form cancelled');
    }
  </script>
  
  <form on:submit={handleSubmit}>
    <Stack class="stack--gap-lg">
      
      <!-- General Error Message -->
      {#if errors.general}
        <Text class="text--error">{errors.general}</Text>
      {/if}
      
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
            {#if errors.cardName}
              <Text class="text--sm text--error">{errors.cardName}</Text>
            {/if}
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
              {#if errors.cardNumber}
                <Text class="text--sm text--error">{errors.cardNumber}</Text>
              {/if}
            </Stack>
            
            <Stack class="stack--gap-sm">
              <Label for="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                bind:value={cvv}
              />
              {#if errors.cvv}
                <Text class="text--sm text--error">{errors.cvv}</Text>
              {/if}
            </Stack>
          </Grid>
          
          <Grid columns={2} class="grid--gap-md">
            <Stack class="stack--gap-sm">
              <Label for="month">Month</Label>
              <Input
                id="month"
                placeholder="MM"
                bind:value={month}
              />
              {#if errors.month}
                <Text class="text--sm text--error">{errors.month}</Text>
              {/if}
            </Stack>
            
            <Stack class="stack--gap-sm">
              <Label for="year">Year</Label>
              <Input
                id="year"
                placeholder="YYYY"
                bind:value={year}
              />
              {#if errors.year}
                <Text class="text--sm text--error">{errors.year}</Text>
              {/if}
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
        {#if errors.comments}
          <Text class="text--sm text--error">{errors.comments}</Text>
        {/if}
      </Stack>
      
      <!-- Action Buttons -->
      <Stack class="stack--horizontal stack--gap-md">
        <Button variant="accent" type="submit">Submit</Button>
        <Button variant="outline" type="button" on:click={handleCancel}>Cancel</Button>
      </Stack>
      
    </Stack>
  </form>
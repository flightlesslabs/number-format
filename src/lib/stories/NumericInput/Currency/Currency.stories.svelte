<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyNumericInputArgTypes } from '../NumericInput.stories.svelte';
  import NumericInput from '../NumericInput.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });
</script>

<Story name="Format Currency" args={{ formatCurrency: true }} />

<!-- Lakh Separator for INR -->
<Story name="Lakh Separator" args={{ formatCurrency: true, lakhSeparator: true }} />

<Story name="USD Demo" args={{ formatCurrency: true, prefix: '$' }} />

<Story name="INR Demo" args={{ formatCurrency: true, lakhSeparator: true, prefix: '₹' }} />

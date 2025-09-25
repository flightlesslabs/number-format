<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NumericInput, { type NumericInputProccesedValue } from './NumericInput.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyNumericInputArgTypes: StoryBookArgTypes = {};

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });

  let value = $state<undefined | number>(100000);
</script>

<!-- Default NumericInput -->
<Story name="Default" />

<Story name="Negative Value" args={{ allowNegative: true }} />

<Story name="DecimalPlaces" args={{ decimalPlaces: 2 }} />

<Story name="Suffix" args={{ suffix: '/-' }} />

<Story name="Prefix" args={{ prefix: '$' }} />

<Story
  name="Format Currency"
  args={{
    onValueChange: (val: NumericInputProccesedValue) => {
      // console.log(val);
      // value = val.value;
    },
    // prefix: '$',
    allowNegative: true,
    decimalPlaces: 2,
    formatCurrency: true,
    value,
  }}
/>

<Story
  name="Lakh Separator"
  args={{
    onValueChange: (val: NumericInputProccesedValue) => {
      value = val.value;
    },
    prefix: '₹',
    allowNegative: true,
    decimalPlaces: 2,
    formatCurrency: true,
    lakhSeparator: true,
    value,
  }}
/>

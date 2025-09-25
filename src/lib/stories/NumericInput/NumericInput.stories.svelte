<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NumericInput from './NumericInput.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyNumericInputArgTypes: StoryBookArgTypes = {};

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });
</script>

<!-- NumericInput is based on [autonumeric](https://autonumeric.org/) -->
<Story name="Default" />

<Story name="Negative Value" args={{ allowNegative: true }} />

<Story name="Decimal Places" args={{ decimalPlaces: 2 }} />

<Story name="Decimal Places with Padding" args={{ decimalPlaces: 2, decimalPadding: true }} />

<Story name="Format Currency" args={{ formatCurrency: true }} />

<!-- Lakh Separator for INR -->
<Story name="Lakh Separator" args={{ formatCurrency: true, lakhSeparator: true }} />

<Story name="Prefix" args={{ prefix: '$' }} />

<Story name="Suffix" args={{ suffix: ' Units' }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Readonly" args={{ readonly: true }} />

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

<Story name="Default" args={{ decimalPlaces: 2, formatCurrency: true }} />

<!-- Decimal Separator. default: '.' -->
<Story name="Decimal Separator" args={{ decimalPlaces: 2, decimalSeparator: ',' }} />

<!-- Comma Separator. default: ',' -->
<Story
  name="Comma Separator"
  args={{ formatCurrency: true, commaSeparator: '.', decimalSeparator: ',', decimalPlaces: 0 }}
/>

<!-- Override [AutoNumeric](https://autonumeric.org/) options -->
<Story
  name="AutoNumeric Custom"
  args={{
    autoNumericCallbackOptions: {
      leadingZero: 'allow',
    },
  }}
/>

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

  let minValue = $state(6000);
  let maxValue = $state(9000);
</script>

<Story name="Default" />

<Story name="Min" args={{ min: 6000, value: minValue }} />

<Story name="Max" args={{ min: 9000, value: maxValue }} />

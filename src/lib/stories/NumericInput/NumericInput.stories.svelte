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

<!-- Default NumericInput -->
<Story name="Default" asChild>
  <NumericInput>dwf</NumericInput>
</Story>

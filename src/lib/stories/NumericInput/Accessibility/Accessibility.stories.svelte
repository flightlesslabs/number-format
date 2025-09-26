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

<Story name="Modify Value On Keybaord Arrow" args={{ modifyValueOnUpDownArrow: true }} />
<Story name="Modify Value On Mouse Wheel" args={{ modifyValueOnWheel: true }} />

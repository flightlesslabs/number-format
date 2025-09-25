<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyNumericInputArgTypes } from '../NumericInput.stories.svelte';
  import NumericInput from '../NumericInput.svelte';
  import type {
    InputKeyboardEvent,
    InputClipboardEvent,
    InputFocusEvent,
  } from '$lib/stories/types.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });

  let value = $state<undefined | number>(0);
</script>

<!-- Use this event to get filtered numeric value -->
<Story
  name="NumericValueChange"
  args={{
    value,
    onValueChange: (val: number | undefined, formattedValue: string) => {
      console.log('onValueChange Event', val, formattedValue);

      value = val;
    },
  }}
/>

<Story
  name="Input"
  args={{
    oninput: (e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('Input Event', target.value);
    },
  }}
/>

<Story
  name="Change"
  args={{
    onchange: (e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('onChange Event', target.value);
    },
  }}
/>

<Story
  name="Focus"
  args={{
    onfocus: (e: InputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    },
  }}
/>

<Story
  name="Blur"
  args={{
    onblur: (e: InputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onblur Event', target);
    },
  }}
/>

<Story
  name="Copy"
  args={{
    oncopy: (e: InputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncopy Event', target);
    },
  }}
/>

<Story
  name="Cut"
  args={{
    oncut: (e: InputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncut Event', target);
    },
  }}
/>

<Story
  name="Paste"
  args={{
    onpaste: (e: InputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onpaste Event', target);
    },
  }}
/>

<Story
  name="KeyDown"
  args={{
    onkeydown: (e: InputKeyboardEvent) => {
      console.log('onkeydown Event', e.key);
    },
  }}
/>

<Story
  name="KeyPress"
  args={{
    onkeypress: (e: InputKeyboardEvent) => {
      console.log('onkeypress Event', e.key);
    },
  }}
/>

<Story
  name="KeyUp"
  args={{
    onkeyup: (e: InputKeyboardEvent) => {
      console.log('onkeyup Event', e.key);
    },
  }}
/>

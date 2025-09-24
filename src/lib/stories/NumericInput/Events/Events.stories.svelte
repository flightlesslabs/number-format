<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyNumericInputArgTypes } from '../NumericInput.stories.svelte';
  import NumericInput, {
    type NumericInputClipboardEvent,
    type NumericInputFocusEvent,
    type NumericInputKeyboardEvent,
    type NumericInputProccesedValue,
  } from '../NumericInput.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });

  let value = $state<undefined | number>(0);
</script>

<Story
  name="onValueChange"
  args={{
    prefix: '$',
    allowNegative: true,
    decimalPlaces: 2,
    value,
    onValueChange: (val: NumericInputProccesedValue) => {
      console.log('onValueChange Event', val);

      value = val.value;
    },
  }}
/>

<Story
  name="Input"
  args={{
    prefix: '$',
    allowNegative: true,
    decimalPlaces: 2,
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
    onfocus: (e: NumericInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    },
  }}
/>

<Story
  name="Blur"
  args={{
    onblur: (e: NumericInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onblur Event', target);
    },
  }}
/>

<Story
  name="Copy"
  args={{
    oncopy: (e: NumericInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncopy Event', target);
    },
  }}
/>

<Story
  name="Cut"
  args={{
    oncut: (e: NumericInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncut Event', target);
    },
  }}
/>

<Story
  name="Paste"
  args={{
    onpaste: (e: NumericInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onpaste Event', target);
    },
  }}
/>

<Story
  name="KeyDown"
  args={{
    onkeydown: (e: NumericInputKeyboardEvent) => {
      console.log('onkeydown Event', e.key);
    },
  }}
/>

<Story
  name="KeyPress"
  args={{
    onkeypress: (e: NumericInputKeyboardEvent) => {
      console.log('onkeypress Event', e.key);
    },
  }}
/>

<Story
  name="KeyUp"
  args={{
    onkeyup: (e: NumericInputKeyboardEvent) => {
      console.log('onkeyup Event', e.key);
    },
  }}
/>

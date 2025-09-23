<script lang="ts" module>
  import { type Snippet } from 'svelte';

  export interface NumericInputProps {
    /** NumericInput contents goes here */
    children?: Snippet;
    /** NumericInput ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** NumericInput spacing, affects Coulumns */
    spacing?: number;
    /** Optional Row spacing, defaults to 0 */
    rowSpacing?: number;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    spacing = 1,
    rowSpacing = 0,
  }: NumericInputProps = $props();
</script>

<div
  class={['NumericInput', className].join(' ')}
  bind:this={ref}
  style={`--NumericInputSpacing: ${spacing}; --NumericInputRowSpacing: ${rowSpacing};`}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .NumericInput {
  }
</style>

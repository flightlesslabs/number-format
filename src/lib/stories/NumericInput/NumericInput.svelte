<script lang="ts" module>
  import type {
    FormEventHandler,
    ChangeEventHandler,
    FocusEventHandler,
    ClipboardEventHandler,
    KeyboardEventHandler,
  } from 'svelte/elements';

  export interface NumericInputProps {
    /** Basic */
    /** NumericInput ref */
    value?: number;
    /** NumericInput ref */
    ref?: HTMLInputElement;
    /** Custom css class */
    class?: string;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** Read only ? */
    readonly?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Customize */
    /** Allow Negative */
    allowNegative?: boolean;
    /** Decimal Places */
    decimalPlaces?: number;
    /** prefix */
    prefix?: string;
    /** suffix */
    suffix?: string;
    /** Get comma separated Currency value */
    formatCurrency?: boolean;
    /** Lakh Separator (for Indian Currency) */
    lakhSeparator?: boolean;
    /** min */
    min?: number;
    /** max */
    max?: number;
    /** Decimal Separator. Default '.' */
    decimalSeparator?: string;
    /** Allow padding the decimal places with zeros.. Default false */
    decimalPadding?: boolean;
    /** Comma Separator. Default ',' */
    commaSeparator?: string;
    /** Determine if the element value can be incremented / decremented with the up and down arrow keys. */
    modifyValueOnUpDownArrow?: boolean;
    /** Determine if the element value can be incremented / decremented with the mouse wheel. */
    modifyValueOnWheel?: boolean;
    /** Events */
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLInputElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLInputElement>;
    /** onpaste event handler */
    onpaste?: ClipboardEventHandler<HTMLInputElement>;
    /** oncopy event handler */
    oncopy?: ClipboardEventHandler<HTMLInputElement>;
    /** oncut event handler */
    oncut?: ClipboardEventHandler<HTMLInputElement>;
    /** onkeydown event handler */
    onkeydown?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeypress event handler */
    onkeypress?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeyup event handler */
    onkeyup?: KeyboardEventHandler<HTMLInputElement>;
    /** on Numeric Value Change */
    onValueChange?: () => void;
  }
</script>

<script lang="ts">
  import AutoNumeric from 'autonumeric';
  import { onDestroy, onMount } from 'svelte';

  let {
    class: className = '',
    ref = $bindable<HTMLInputElement>(),
    oninput,
    onchange,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    onkeydown,
    onkeypress,
    onkeyup,
    value = $bindable<number | undefined>(),
    placeholder,
    disabled,
    readonly,
    name,
    id,
    allowNegative = false,
    decimalPlaces = 0,
    prefix = '',
    suffix = '',
    formatCurrency = false,
    lakhSeparator = false,
    onValueChange,
    min,
    max,
    decimalSeparator = '.',
    commaSeparator = ',',
    modifyValueOnUpDownArrow = false,
    modifyValueOnWheel = false,
    decimalPadding = false,
  }: NumericInputProps = $props();

  let an = $state<AutoNumeric | null>(null);

  onMount(() => {
    if (!ref) return;

    an = new AutoNumeric(ref, value);
  });

  onDestroy(() => {
    if (!an) {
      return;
    }

    an.wipe();
  });

  $effect(() => {
    if (!an) {
      return;
    }

    an.update({
      decimalCharacter: decimalSeparator,
      modifyValueOnUpDownArrow,
      modifyValueOnWheel,
      allowDecimalPadding: decimalPadding,
      suffixText: suffix,
      currencySymbol: prefix,
      decimalPlaces,
    });

    // Comma format only when formatCurrency is true
    if (formatCurrency) {
      an.update({ digitGroupSeparator: commaSeparator });
    } else {
      an.update({ digitGroupSeparator: '' });
    }

    // formatCurrency lakh Separator
    if (lakhSeparator) {
      an.update({ digitalGroupSpacing: '2s' });
    } else {
      an.update({ digitalGroupSpacing: '3' });
    }

    // Max value
    if (max || max === 0) {
      an.update({ maximumValue: `${max}` });
    } else {
      // Hack to prevent crash
      an.update({ maximumValue: '9999999999999.99' });
    }

    if (min || min === 0) {
      an.update({ minimumValue: `${min}` });
    } else if (allowNegative) {
      // Hack to prevent crash
      an.update({ minimumValue: '-9999999999999.99' });
    } else {
      an.update({ minimumValue: '0' });
    }
  });
</script>

<input
  class={className}
  bind:this={ref}
  {name}
  {id}
  {disabled}
  {oninput}
  {onchange}
  {onfocus}
  {onblur}
  {onpaste}
  {oncopy}
  {oncut}
  {onkeydown}
  {onkeypress}
  {onkeyup}
  {placeholder}
  {readonly}
/>

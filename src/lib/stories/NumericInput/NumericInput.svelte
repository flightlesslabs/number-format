<script lang="ts" module>
  import type { MaskaDetail } from 'maska';
  import type {
    FormEventHandler,
    ChangeEventHandler,
    FocusEventHandler,
    ClipboardEventHandler,
    KeyboardEventHandler,
  } from 'svelte/elements';

  export type NumericInputFocusEvent = FocusEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  export type NumericInputClipboardEvent = ClipboardEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  export type NumericInputInputEvent = Event & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  export type NumericInputKeyboardEvent = KeyboardEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  export interface NumericInputProccesedValue extends MaskaDetail {
    isValid: boolean;
    value: number | undefined;
  }

  export interface NumericInputProps {
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
    onValueChange?: (value: NumericInputProccesedValue) => void;
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
  }
</script>

<script lang="ts">
  import { maska } from 'maska/svelte';
  import validateNumber from '../helpers/validateNumber.js';

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
    prefix,
    suffix,
    formatCurrency = false,
    lakhSeparator = false,
    onValueChange,
  }: NumericInputProps = $props();

  let formattedValue = $state('');
  const locale = $derived(lakhSeparator ? 'en-IN' : 'en-US');

  // postProcess adds prefix/suffix after masking
  function postProcess(val: string) {
    if (!val) return '';

    let newVal = val.replace(`${suffix}`, '')?.trim();

    return `${prefix || ''}${newVal}${suffix || ''}`;
  }

  function preProcess(val: string) {
    if (!val) return '';

    return val.trim().replace(`${suffix}`, '').trim();
  }

  function sanitizeNumber(val: string | undefined): number | undefined {
    if (!val) return undefined;

    // Remove everything except digits, decimal point, and minus sign
    const sanitized = val.replace(/[^\d.-]/g, '');

    const result = parseFloat(sanitized);

    return isNaN(result) ? NaN : result;
  }

  function onValueChangeMod(detail: MaskaDetail) {
    const [isValid, validValue] = validateNumber(detail.unmasked);

    if (isValid) {
      value = validValue;
    }

    if (onValueChange) {
      onValueChange({
        isValid,
        value: validValue,
        ...detail,
      });
    }
  }

  $effect(() => {
    if (value != undefined) {
      const numberFormat = new Intl.NumberFormat(locale, {
        maximumFractionDigits: decimalPlaces,
      }).format(value);

      formattedValue = `${prefix || ''}${numberFormat}${suffix || ''}`;
    } else {
      formattedValue = '';
    }
  });

  $effect(() => {
    console.log(value);
  });
</script>

<input
  class={['NumericInput', className].join(' ')}
  bind:this={ref}
  use:maska={{
    preProcess,
    postProcess,
    number: {
      locale,
      fraction: decimalPlaces,
      unsigned: !allowNegative,
    },
    onMaska: onValueChangeMod,
  }}
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
  bind:value={formattedValue}
/>

<script lang="ts" module>
  import type {
    FormEventHandler,
    ChangeEventHandler,
    FocusEventHandler,
    ClipboardEventHandler,
    KeyboardEventHandler,
  } from 'svelte/elements';

  export type AutoNumericCallbackOptions = CallbackOptions;

  export interface NumericInputProps {
    /** Basic */
    /** NumericInput ref */
    value?: number;
    /** NumericInput ref */
    ref?: HTMLInputElement;
    /** AutoNumeric Instance */
    autoNumericInstance?: AutoNumeric | null;
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
    /** min, should not be less than -9999999999999.99 */
    min?: number;
    /** max, should not exceed 9999999999999.99 */
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
    /** Override [AutoNumeric](https://autonumeric.org/) options  */
    autoNumericCallbackOptions?: AutoNumericCallbackOptions;
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
    onValueChange?: (value: number | undefined, formattedValue: string) => void;
  }
</script>

<script lang="ts">
  import AutoNumeric, { type CallbackOptions } from 'autonumeric';
  import { onDestroy, onMount } from 'svelte';
  import type { InputInputEvent } from '../types.js';

  let {
    class: className = '',
    ref = $bindable<HTMLInputElement>(),
    autoNumericInstance = $bindable<AutoNumeric | null>(null),
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
    readonly = false,
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
    autoNumericCallbackOptions,
  }: NumericInputProps = $props();

  let formattedValueCached = $state('');

  onMount(() => {
    if (!ref) return;

    autoNumericInstance = new AutoNumeric(ref, value);
  });

  onDestroy(() => {
    if (!autoNumericInstance) {
      return;
    }

    autoNumericInstance.wipe();
  });

  $effect(() => {
    if (!autoNumericInstance) {
      return;
    }

    // minimumValue
    let minimumValue: string = '0';

    if (min || min === 0) {
      minimumValue = `${min}`;
    } else if (allowNegative) {
      minimumValue = '-9999999999999.99';
    } else {
      minimumValue = '0';
    }

    let options: AutoNumericCallbackOptions = {
      // readonly
      readOnly: readonly,

      // max value
      maximumValue: max || max === 0 ? `${max}` : '9999999999999.99',

      // min value
      minimumValue,

      // Comma format only when formatCurrency is true
      digitGroupSeparator: formatCurrency ? commaSeparator : '',

      // formatCurrency lakh Separator
      digitalGroupSpacing: lakhSeparator ? '2s' : '3',

      // Decimal Places
      decimalPlaces,

      // Decimal Separator
      decimalCharacter: decimalSeparator,

      // Dcimal Padding
      allowDecimalPadding: decimalPadding,

      // Control value with arrows
      modifyValueOnUpDownArrow,

      // Control value with mouse wheel
      modifyValueOnWheel,

      // Hack: Hide suffux/prefix when hover
      emptyInputBehavior: 'press',
    };

    if (autoNumericCallbackOptions !== undefined) {
      options = {
        ...options,
        ...autoNumericCallbackOptions,
      };
    }

    autoNumericInstance.update(options);
  });

  $effect(() => {
    if (!autoNumericInstance) {
      return;
    }

    const current = autoNumericInstance.getNumber();

    if (current === value) {
      return;
    }

    autoNumericInstance.set(value === undefined ? '' : `${value}`);
  });

  $effect(() => {
    if (!autoNumericInstance) {
      return;
    }

    if (!suffix && !prefix) {
      return;
    }

    const isValueExists = formattedValueCached.trim() !== '' ? true : false;

    const suffixOptions: AutoNumericCallbackOptions = {
      // suffix
      suffixText: isValueExists ? suffix : '',

      // prefix
      currencySymbol: isValueExists ? prefix : '',
    };

    autoNumericInstance.update(suffixOptions);
  });

  function updateValue(val: number | null | undefined, formattedValue: string) {
    // minus sign
    if (allowNegative && val === 0 && formattedValue?.trim() === '-') {
      return;
    }

    if (val === null) {
      value = undefined;
      return;
    }

    if (formattedValue?.trim() === '') {
      value = undefined;
      return;
    }

    value = val;
  }

  function oninputMod(e: InputInputEvent) {
    const raw = autoNumericInstance?.getNumber() ?? null;
    const formatted = autoNumericInstance?.getFormatted() ?? '';

    if (oninput) {
      oninput(e);
    }

    updateValue(raw, formatted);

    formattedValueCached = formatted;

    if (onValueChange) {
      const numericValue = raw === null ? undefined : raw;

      onValueChange(numericValue, formatted);
    }
  }
</script>

<input
  class={className}
  bind:this={ref}
  {name}
  {id}
  {disabled}
  oninput={oninputMod}
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
  data-dodo-ui-number-format
/>

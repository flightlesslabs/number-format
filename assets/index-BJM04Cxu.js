import{j as e}from"./index-Dlwx_-PB.js";import{useMDXComponents as c}from"./index-BM3H6bQe.js";import{S as o}from"./blocks-CWOJ2Cwh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DNlGDPwe.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcurrencysymbol",children:"getCurrencySymbol"}),`
`,e.jsxs(r.p,{children:["This utility function retrieves the standard ",e.jsx(r.strong,{children:"currency symbol"})," associated with a 3-letter alphabetic currency code (ISO 4217)."]}),`
`,e.jsxs(r.p,{children:["It utilizes the browser's built-in internationalization API (",e.jsx(r.code,{children:"Intl.NumberFormat"}),") in the ",e.jsx(r.code,{children:"en-US"})," locale to reliably get symbols like '$', '€', or '¥'. For currencies without a dedicated symbol (e.g., 'LKN'), the function returns the code itself, which may include a trailing space (e.g., ",e.jsx(r.code,{children:"'LKN '"}),")."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"api",children:"API"}),`
`,e.jsx(r.h3,{id:"getcurrencysymbolalphabeticcode-trim",children:e.jsx(r.code,{children:"getCurrencySymbol(alphabeticCode, trim)"})}),`
`,e.jsxs(r.p,{children:[`| Name                 | Type      | Description                                                                                                                                           | Default |
| :------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"alphabeticCode"})})," | ",e.jsx(r.code,{children:"string"}),"  | The ",e.jsx(r.strong,{children:"3-letter alphabetic ISO 4217 currency code"}),` (e.g., 'USD', 'EUR', 'LKN').                                                                       | N/A     |
| `,e.jsx(r.strong,{children:e.jsx(r.code,{children:"trim"})}),"           | ",e.jsx(r.code,{children:"boolean"})," | If ",e.jsx(r.code,{children:"true"}),", removes leading and trailing whitespace. Useful when the output is the currency code with an extra space (e.g., ",e.jsx(r.code,{children:"'LKN '"})," becomes ",e.jsx(r.code,{children:"'LKN'"}),"). | ",e.jsx(r.code,{children:"false"})," |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
import { getCurrencySymbol } from '@flightlesslabs/number-format';

// Standard Symbols
getCurrencySymbol('USD') // '$'
getCurrencySymbol('EUR') // '€'
getCurrencySymbol('GBP') // '£'

// Codes without standard symbols often result in a trailing space
getCurrencySymbol('LKN') // 'LKN '

// Use 'trim: true' to remove the trailing space
getCurrencySymbol('LKN', true) // 'LKN'
`})]})}function m(t={}){const{wrapper:r}={...c(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{m as default};

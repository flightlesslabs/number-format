import{j as e}from"./index-Dlwx_-PB.js";import{useMDXComponents as o}from"./index-BM3H6bQe.js";import{S as s}from"./blocks-DDbsb5Qh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CRRDtFC9.js";function n(r){const t={code:"code",h1:"h1",p:"p",strong:"strong",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getcurrencysymbol",children:"getCurrencySymbol"}),`
`,e.jsxs(t.p,{children:["This utility function retrieves the standard ",e.jsx(t.strong,{children:"currency symbol"})," associated with a 3-letter alphabetic currency code (ISO 4217). It's a quick and reliable way to get symbols like '$', '€', or '¥' using the browser's built-in internationalization API (",e.jsx(t.code,{children:"Intl.NumberFormat"}),")."]}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { getCurrencySymbol } '@flightlesslabs/number-format';

// Usage
getCurrencySymbol('USD') // '$'
getCurrencySymbol('EUR') // '€'
getCurrencySymbol('GBP') // '£'
`})]})}function d(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{d as default};

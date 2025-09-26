import{j as e}from"./index-Dlwx_-PB.js";import{useMDXComponents as i}from"./index-BM3H6bQe.js";import{S as t}from"./blocks-Bj8_I1tl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BdsUXA2e.js";const l=`{
  "name": "@flightlesslabs/number-format",
  "version": "1.1.3",
  "scripts": {
    "build": "vite build && pnpm run prepack",
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "prepack": "svelte-kit sync && svelte-package && publint",
    "svelte-check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "format": "prettier --write .",
    "lint": "prettier --check . && eslint .",
    "dev": "storybook dev -p 6006",
    "build-storybook": "storybook build && touch ./storybook-static/.nojekyll",
    "check": "pnpm run svelte-check && eslint . && pnpm run lint",
    "check:fix": "pnpm run svelte-check && eslint . && pnpm run format",
    "test": "vitest --run"
  },
  "homepage": "https://flightlesslabs.github.io/number-format",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/flightlesslabs/number-format.git"
  },
  "license": "MIT",
  "files": [
    "dist",
    "!dist/**/*.test.*",
    "!dist/**/*.spec.*",
    "src/lib",
    "!src/lib/**/*.test.*",
    "!src/lib/**/*.spec.*",
    "!src/lib/stories/**/*.stories.*",
    "!src/lib/stories/**/*.mdx",
    "!src/lib/stories/assets/**/*.png",
    "!src/lib/stories/assets/**/*.jpg"
  ],
  "sideEffects": [
    "**/*.css"
  ],
  "svelte": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    }
  },
  "peerDependencies": {
    "svelte": "^5.0.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^4.1.1",
    "@eslint/compat": "^1.4.0",
    "@eslint/js": "^9.36.0",
    "@storybook/addon-a11y": "^9.1.8",
    "@storybook/addon-docs": "^9.1.8",
    "@storybook/addon-svelte-csf": "^5.0.8",
    "@storybook/addon-vitest": "^9.1.8",
    "@storybook/sveltekit": "^9.1.8",
    "@sveltejs/adapter-auto": "^6.1.0",
    "@sveltejs/adapter-static": "^3.0.9",
    "@sveltejs/kit": "^2.43.5",
    "@sveltejs/package": "^2.5.4",
    "@sveltejs/vite-plugin-svelte": "^6.2.1",
    "@types/node": "^24.5.2",
    "@vitest/browser": "^3.2.3",
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-storybook": "^9.1.8",
    "eslint-plugin-svelte": "^3.12.4",
    "globals": "^16.4.0",
    "prettier": "^3.6.2",
    "prettier-plugin-svelte": "^3.4.0",
    "publint": "^0.3.13",
    "sass": "^1.93.2",
    "storybook": "^9.1.8",
    "svelte": "^5.39.6",
    "svelte-check": "^4.3.2",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^5.9.2",
    "typescript-eslint": "^8.44.1",
    "vite": "^7.1.7",
    "vitest": "^3.2.3"
  },
  "keywords": [
    "svelte"
  ],
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild"
    ]
  },
  "volta": {
    "node": "22.18.0",
    "pnpm": "10.17.0"
  },
  "dependencies": {
    "autonumeric": "^4.10.9"
  }
}
`;function r(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs("main",{style:{textAlign:"center"},children:[e.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),e.jsx(n.h1,{id:"number-format",children:"Number Format"}),e.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(l)?.version]}),e.jsx("h3",{style:{fontWeight:400},children:"Number Format, Currency, Number Inputs and more for Svelte."}),e.jsxs(n.h3,{id:"github---npm",children:[e.jsx(n.a,{href:"https://github.com/flightlesslabs/number-format",rel:"nofollow",children:"Github"})," - ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@flightlesslabs/number-format",rel:"nofollow",children:"npm"})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"pnpm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/number-format
`}),`
`,e.jsx(n.p,{children:"npm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/number-format
`}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage example"}),`
`,e.jsxs(n.p,{children:["Let's import ",e.jsx(n.a,{href:"?path=/docs/numericinput--docs",children:"NumericInput"})]}),`
`,e.jsx(t,{dark:!0,language:"ts",code:`
import { NumericInput } '@flightlesslabs/number-format';
`}),`
`,e.jsx(n.h2,{id:"explore-more",children:"Explore more"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/numericinput--docs",children:"NumericInput"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/utils-getcurrencysymbol--docs",children:"getcurrencysymbol"})}),`
`]})]})}function h(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};

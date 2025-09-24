import{j as e,S as s}from"./blocks-BELXAL9A.js";import{useMDXComponents as r}from"./index-DywBW-zP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DrOfXRVh.js";const o=`{
  "name": "@flightlesslabs/number-format",
  "version": "0.0.0",
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
    "check:fix": "pnpm run svelte-check && eslint . && pnpm run format"
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
    "@storybook/addon-a11y": "^9.1.7",
    "@storybook/addon-docs": "^9.1.7",
    "@storybook/addon-svelte-csf": "^5.0.8",
    "@storybook/addon-vitest": "^9.1.7",
    "@storybook/sveltekit": "^9.1.7",
    "@sveltejs/adapter-auto": "^6.1.0",
    "@sveltejs/adapter-static": "^3.0.9",
    "@sveltejs/kit": "^2.43.1",
    "@sveltejs/package": "^2.5.3",
    "@sveltejs/vite-plugin-svelte": "^6.2.0",
    "@types/node": "^24.5.2",
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-storybook": "^9.1.7",
    "eslint-plugin-svelte": "^3.12.4",
    "globals": "^16.4.0",
    "prettier": "^3.6.2",
    "prettier-plugin-svelte": "^3.4.0",
    "publint": "^0.3.13",
    "sass": "^1.93.1",
    "storybook": "^9.1.7",
    "svelte": "^5.39.4",
    "svelte-check": "^4.3.2",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^5.9.2",
    "typescript-eslint": "^8.44.1",
    "vite": "^7.1.7"
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
    "pnpm": "10.15.0"
  },
  "dependencies": {
    "maska": "^3.2.0"
  }
}
`;function i(t){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs("main",{style:{textAlign:"center"},children:[e.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),e.jsx(n.h1,{id:"number-format",children:"Number Format"}),e.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(o)?.version]}),e.jsx("h3",{style:{fontWeight:400},children:"Number Format and Number Input components for Svelte."}),e.jsxs(n.h3,{id:"github---npm",children:[e.jsx(n.a,{href:"https://github.com/flightlesslabs/number-format",rel:"nofollow",children:"Github"})," - ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@flightlesslabs/number-format",rel:"nofollow",children:"npm"})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"pnpm"}),`
`,e.jsx(s,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/number-format
`}),`
`,e.jsx(n.p,{children:"npm"}),`
`,e.jsx(s,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/number-format
`})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};

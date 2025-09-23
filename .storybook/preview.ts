import type { Preview } from '@storybook/sveltekit';
import './global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Docs'],
      },
    },
  },
};

export default preview;

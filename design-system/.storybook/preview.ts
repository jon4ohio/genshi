import type { Preview } from '@storybook/react-vite';
import '@genshi/tokens/css';
import '../stories/storybook.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;

import { CssBaseline, ThemeProvider } from '@mui/material';
import { Preview } from '@storybook/react';

import { coreTheme } from '../src';

export const baseStorybookPreview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      // Description toggle
      // expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const baseStorybookPreviewMui: Preview = {
  ...baseStorybookPreview,
  decorators: [
    (Story) => (
      <ThemeProvider theme={coreTheme.lightTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};
// eslint-disable-next-line import/no-default-export
export default baseStorybookPreviewMui;

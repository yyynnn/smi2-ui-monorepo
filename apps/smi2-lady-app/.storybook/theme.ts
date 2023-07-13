import { create } from '@storybook/theming';
import { getVersionInfo } from 'utils-version';

export const theme = create({
  base: 'light',
  brandTitle: `Website - Material UI - ${getVersionInfo()}`,
  brandUrl: '',
});

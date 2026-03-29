import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'INDIGO Design System',
    brandUrl: 'https://github.com/indigo-services/design-system',
    brandImage: '/site/logo.svg',
    colorSecondary: '#1F2D8A',
  }),
});


import * as React from 'react';
import { Preview } from '@storybook/react-vite';
import { useDarkMode } from '@vueless/storybook-dark-mode';
import { parse } from 'qs';

import { DesignSystemProvider, Box, darkTheme, lightTheme, type BoxProps } from '@strapi/design-system';

import { DocsContainer, Unstyled } from '@storybook/addon-docs/blocks';
import { styled, DefaultTheme } from 'styled-components';
import { MARKDOWN_OVERRIDES } from '../components/Markdown';

const INDIGO_LIGHT_COLORS = {
  alternative100: '#eff4ff',
  alternative200: '#d6e5ff',
  alternative500: '#6d92e8',
  alternative600: '#3559b7',
  alternative700: '#1f3d8f',
  buttonPrimary500: '#3559b7',
  buttonPrimary600: '#1f3d8f',
  primary100: '#f5f7ff',
  primary200: '#dce7ff',
  primary500: '#3559b7',
  primary600: '#1f3d8f',
  primary700: '#162c68',
  secondary100: '#eff4ff',
  secondary200: '#d6e5ff',
  secondary500: '#6d92e8',
  secondary600: '#3559b7',
  secondary700: '#1f3d8f',
};

const INDIGO_DARK_COLORS = {
  alternative100: '#071222',
  alternative200: '#162c68',
  alternative500: '#8cb4ff',
  alternative600: '#afc8ff',
  alternative700: '#dce7ff',
  buttonPrimary500: '#8cb4ff',
  buttonPrimary600: '#afc8ff',
  primary100: '#071222',
  primary200: '#162c68',
  primary500: '#8cb4ff',
  primary600: '#afc8ff',
  primary700: '#dce7ff',
  secondary100: '#071222',
  secondary200: '#1f3d8f',
  secondary500: '#8cb4ff',
  secondary600: '#afc8ff',
  secondary700: '#dce7ff',
};

const createIndigoTheme = (theme: DefaultTheme, base: 'light' | 'dark' = 'light'): DefaultTheme => {
  const brandColors = base === 'dark' ? INDIGO_DARK_COLORS : INDIGO_LIGHT_COLORS;

  return {
    ...theme,
    colors: {
      ...theme.colors,
      ...brandColors,
    },
  };
};

const indigoLightTheme = createIndigoTheme(lightTheme);
const indigoDarkTheme = createIndigoTheme(darkTheme, 'dark');

const createCustomTheme = (theme: DefaultTheme, base: 'light' | 'dark' = 'light') => {
  return {
    base,
    brandTitle: 'INDIGO Services - Design System',
    brandUrl: 'https://github.com/indigo-services/design-system',
    brandImage: base === 'light' ? '/site/logo.svg' : '/site/logo_dark.svg',

    //
    colorPrimary: theme.colors.primary600,
    colorSecondary: theme.colors.secondary600,

    // UI
    appBg: base === 'dark' ? theme.colors.neutral100 : theme.colors.primary100,
    appContentBg: theme.colors.neutral0,
    appPreviewBg: theme.colors.neutral0,
    appBorderColor: base === 'dark' ? theme.colors.neutral200 : theme.colors.primary200,

    // Text colors
    textColor: theme.colors.neutral800,
    textInverseColor: theme.colors.neutral800,

    // Toolbar default and active colors
    barTextColor: theme.colors.neutral800,
    barSelectedColor: theme.colors.primary600,
    barHoverColor: theme.colors.primary600,
    barBg: base === 'dark' ? theme.colors.neutral0 : theme.colors.primary100,

    // Form colors
    inputBg: theme.colors.neutral0,
    inputBorder: theme.colors.neutral800,
    inputTextColor: theme.colors.neutral800,
  };
};

const themeQueryURL = parse(document.location.search).theme;

// Reusable hook to get dark mode state from localStorage
export const useLocalStorageDarkMode = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (themeQueryURL) return themeQueryURL;

    const themeParameters = localStorage.getItem('sb-addon-themes-3');
    let theme = 'light';
    try {
      theme = JSON.parse(themeParameters || '{}').current;
    } catch (error) {
      console.error(error);
    }
    return theme === 'dark';
  });

  React.useEffect(() => {
    const handleStorageChange = () => {
      const themeParameters = localStorage.getItem('sb-addon-themes-3');
      let theme = 'light';
      try {
        theme = JSON.parse(themeParameters || '{}').current;
      } catch (error) {
        console.error(error);
      }
      setIsDark(theme === 'dark');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return isDark;
};

// Safe hook that tries useDarkMode first, then falls back to localStorage
export const useSafeDarkMode = () => {
  try {
    return useDarkMode();
    // oxlint-disable-next-line no-unused-vars
  } catch (error) {
    return useLocalStorageDarkMode();
  }
};

const Theme = ({ children, isDarkMode, ...props }: BoxProps & { isDarkMode?: boolean }) => {
  const [isDark, setIsDark] = React.useState(() => {
    if (themeQueryURL) return themeQueryURL;
    if (isDarkMode !== undefined) return isDarkMode;

    const themeParameters = localStorage.getItem('sb-addon-themes-3');
    let theme = 'light';
    try {
      theme = JSON.parse(themeParameters || '{}').current;
    } catch (error) {
      console.error(error);
    }
    return theme === 'dark';
  });

  React.useEffect(() => {
    if (!themeQueryURL && isDarkMode !== undefined && isDarkMode !== isDark) {
      setIsDark(isDarkMode);
    }
  }, [isDarkMode, isDark]);

  // Listen for theme changes in localStorage for docs
  React.useEffect(() => {
    if (isDarkMode === undefined) {
      const handleStorageChange = () => {
        const themeParameters = localStorage.getItem('sb-addon-themes-3');
        let theme = 'light';
        try {
          theme = JSON.parse(themeParameters || '{}').current;
        } catch (error) {
          console.error(error);
        }
        setIsDark(theme === 'dark');
      };
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, [isDarkMode]);

  return (
    <DesignSystemProvider locale="en" theme={isDark ? indigoDarkTheme : indigoLightTheme}>
      <Main tag="main" background="neutral0" padding="4rem" paddingBottom="8rem" height="100%">
        <Box maxWidth="84rem" margin="auto" height="100%" {...props}>
          {children}
        </Box>
      </Main>
    </DesignSystemProvider>
  );
};

const Main = styled(Box)`
  .sbdocs-preview {
    border: solid 1px ${(props) => props.theme.colors.neutral200};

    .docs-story > div {
      background: ${(props) => props.theme.colors.neutral0};
    }
  }

  .docblock-argstable {
    border: solid 1px ${(props) => props.theme.colors.neutral200};

    table > tbody {
      border: solid 1px ${(props) => props.theme.colors.neutral200} !important;
    }
  }

  .docblock-argstable tr th {
    color: ${(props) => props.theme.colors.neutral800};
  }

  .docblock-argstable tr td {
    color: ${(props) => props.theme.colors.neutral800} !important;
    background-color: ${(props) => props.theme.colors.neutral0} !important;
    border-inline: unset !important;
    border-block: unset !important;
    border-top: solid 1px ${(props) => props.theme.colors.neutral200} !important;
  }

  .docblock-code-toggle {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.neutral200};
    background: ${(props) => props.theme.colors.neutral150};
    color: ${(props) => props.theme.colors.neutral800};
  }

  .docblock-code-toggle:hover {
    background-color: ${(props) => props.theme.colors.neutral100};
  }
`;

const preview: Preview = {
  decorators: [
    (Story) => {
      const isDarkMode = useDarkMode();
      return (
        <Theme isDarkMode={isDarkMode}>
          <Story />
        </Theme>
      );
    },
  ],

  parameters: {
    viewport: {
      disable: true,
    },
    chromatic: {
      disableSnapshot: true,
      prefersReducedMotion: 'reduce',
    },
    docs: {
      container: ({ children, ...props }: { children: any; context: any }) => (
        <DocsContainer {...props}>
          <Unstyled>
            <Theme>{children}</Theme>
          </Unstyled>
        </DocsContainer>
      ),
      components: MARKDOWN_OVERRIDES,
    },
    options: {
      storySort: {
        order: [
          'Getting Started',
          ['Welcome', 'Contributing', 'Changelog', 'Migration Guides', ['V1 to V2']],
          'Foundations',
          ['Accessibility', 'Color', 'Elevation', 'Grid', 'Icons', ['Overview', '*'], 'Typography'],
          'Utilities',
          'Primitives',
          ['Overview', '*'],
          'Inputs',
          'Components',
          'Design System',
          ['Technical Components', 'Components'],
        ],
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: createCustomTheme(indigoDarkTheme, 'dark'),
      // Override the default light theme
      light: createCustomTheme(indigoLightTheme),
    },
    controls: { expanded: true },
  },
};

export default preview;

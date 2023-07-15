/* eslint-disable @typescript-eslint/no-empty-function */
import { CssBaseline, GlobalStyles, PaletteMode } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import React, { useMemo } from 'react';
import { getWindow } from 'ssr-window';
import { coreTheme } from 'ui-mui';

import { globalStyles } from './globalStyles';
const window = getWindow();

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface BrandingProviderProps {
  children: React.ReactNode;
  /**
   * If not `undefined`, the provider is considered nesting and does not render NextNProgressBar & CssBaseline
   */
  mode?: 'light' | 'dark';
}

export function BrandingProvider({ children, mode: modeProp }: BrandingProviderProps) {
  const themeModeFromLF: 'light' | 'dark' = window
    ? (window?.localStorage?.getItem('themeMode') as any) || 'light'
    : 'light';
  const [mode, setMode] = React.useState<PaletteMode>(modeProp ?? themeModeFromLF);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          window ? window?.localStorage?.setItem('themeMode', prevMode === 'light' ? 'dark' : 'light') : 'light';
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    [],
  );

  const theme = useMemo(() => {
    const designTokens = coreTheme.getDesignTokens(mode);
    let newTheme = createTheme(designTokens);
    newTheme = deepmerge(newTheme, coreTheme.getThemedComponents(newTheme));
    return newTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <GlobalStyles styles={globalStyles(mode)} />
      <ThemeProvider theme={modeProp ? () => theme : theme}>{children}</ThemeProvider>
      <CssBaseline enableColorScheme />
    </ColorModeContext.Provider>
  );
}

// color-scheme

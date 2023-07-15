import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { lightTheme } from 'ui-mui/src/themes/coreTheme';

type RenderWithTheme = (elm: React.ReactElement, renderOptions?: RenderOptions) => RenderResult;

export const renderWithTheme: RenderWithTheme = (component, renderOptions?) => {
  const wrapper: RenderOptions['wrapper'] = ({ children }) => (
    <MUIThemeProvider theme={lightTheme}>{children}</MUIThemeProvider>
  );

  return render(component, {
    wrapper,
    ...renderOptions,
  });
};

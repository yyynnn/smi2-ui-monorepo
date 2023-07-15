/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css, Global } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';

import { ColorModeContext } from './BrandingProvider';

export const ThemeSwitcher: FC<any> = ({ iconActive = true, ...rest }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div onClick={colorMode.toggleColorMode}>
      {iconActive ? (
        <IconButton color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon color="disabled" /> : <Brightness4Icon color="disabled" />}
          <Global
            styles={css`
              body {
                color-scheme: ${theme.palette.mode};
              }
            `}
          />
          {rest.children}
        </IconButton>
      ) : (
        rest.children
      )}
    </div>
  );
};

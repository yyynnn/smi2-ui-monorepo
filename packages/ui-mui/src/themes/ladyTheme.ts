/* eslint-disable @typescript-eslint/restrict-template-expressions */
// eslint-disable @typescript-eslint/restrict-template-expressions
// eslint-disable-next-line no-restricted-imports
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
// @ts-ignore
import type {} from '@mui/lab/themeAugmentation';
import { alpha, createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { Palette as MuiPallete, PaletteOptions as MuiPaletteOptions } from '@mui/material/styles/createPalette';
import { deepmerge } from '@mui/utils';

import { darkPurple, grey, purple, lightPurple } from '../colors';
import { BREAKPOINTS, CONTAINER_WIDTHS } from '../consts/style';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    extraLarge: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h0: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  // type PaletteColor = ColorRange;

  interface Palette {
    primaryDark: PaletteColor;
    tertiary: { main: string };
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightSemiBold?: number;
    fontWeightExtraBold?: number;
    fontFamilyCode?: string;
  }

  interface Typography {
    fontWeightSemiBold: number;
    fontWeightExtraBold: number;
    fontFamilyCode: string;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    grey: true;
  }
}

const defaultTheme = createTheme();

export const opacityBlack = {
  50: 'rgb(0 0 0 / 100%)',
  100: 'rgb(0 0 0 / 90%)',
  200: 'rgb(0 0 0 / 80%)',
  300: 'rgb(0 0 0 / 70%)',
  400: 'rgb(0 0 0 / 60%)',
  500: 'rgb(0 0 0 / 50%)',
  main: 'rgb(0 0 0 / 50%)',
  600: 'rgb(0 0 0 / 40%)',
  700: 'rgb(0 0 0 / 30%)',
  800: 'rgb(0 0 0 / 20%)',
  900: 'rgb(0 0 0 / 10%)',
  contrastDefaultColor: 'light',
};

const systemFont = [
  '"Inter"',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const getMetaThemeColor = (mode: 'light' | 'dark') => {
  const themeColor = {
    light: grey[50],
    dark: darkPurple[800],
  };
  return themeColor[mode];
};

export const getDesignTokens = (mode: 'light' | 'dark') => {
  // @ts-ignore
  return {
    brand: {},
    // @ts-ignore
    shadows: [...createTheme({}).shadows.map((shadow, idx) => (idx === 24 ? '0px 40px 80px 0px #0000001A' : shadow))],
    breakpoints: {
      values: {
        xs: 0,
        sm: BREAKPOINTS[1],
        md: BREAKPOINTS[2],
        lg: BREAKPOINTS[3],
        xl: BREAKPOINTS[4],
        xxl: BREAKPOINTS[5],
      },
    },
    palette: {
      primary: {
        ...purple,
        ...(mode === 'dark' && {
          main: purple[800],
        }),
      },
      secondary: {
        ...lightPurple,
        ...(mode === 'dark' && {
          main: lightPurple[400],
        }),
      },
      primaryDark: darkPurple,
      divider: mode === 'dark' ? alpha(purple[100], 0.08) : grey[100],
      mode,
      ...(mode === 'dark' && {
        background: {
          default: darkPurple[800],
          paper: darkPurple[900],
        },
      }),
      neutral: {},
      common: {
        white: '#fff',
        black: '#1D1D1D',
      },
      text: {
        ...(mode === 'light' && {
          primary: grey[900],
          secondary: grey[700],
        }),
        ...(mode === 'dark' && {
          primary: '#fff',
          secondary: grey[400],
        }),
      },
      grey: {
        ...(mode === 'light' && {
          main: grey[100],
          contrastText: grey[600],
        }),
        ...(mode === 'dark' && {
          main: darkPurple[700],
          contrastText: grey[600],
        }),
      },
      error: {
        50: '#FFF0F1',
        100: '#FFDBDE',
        200: '#FFBDC2',
        300: '#FF99A2',
        400: '#FF7A86',
        500: '#EC0411',
        main: '#EC0411',
        600: '#EB0014',
        700: '#C70011',
        800: '#94000D',
        900: '#570007',
      },
      success: {
        50: '#E9FBF0',
        100: '#C6F6D9',
        200: '#9AEFBC',
        300: '#6AE79C',
        400: '#3EE07F',
        500: '#08AF3D',
        600: '#1DB45A',
        ...(mode === 'dark' && {
          main: '#02890F', // contrast 6.17:1 (darkPurple.800)
        }),
        ...(mode === 'light' && {
          main: '#02890F', // contrast 3.31:1
        }),
        700: '#1AA251',
        800: '#178D46',
        900: '#0F5C2E',
      },
      warning: {
        50: '#FFF9EB',
        100: '#FFF3C1',
        200: '#FFECA1',
        300: '#ffbc6d',
        400: '#ffa943',
        500: '#FF9524',
        main: '#FF9524',
        600: '#e68f29',
        700: '#cc7f25',
        800: '#995f1c',
        900: '#5A3600', // vs white bg: WCAG 10.7 AAA, APCA 95 Best for text
      },
      info: {
        50: '#e5e9fd',
        100: '#bfc8fb',
        200: '#95a3f9',
        300: '#6a7ef6',
        400: '#4a62f4',
        500: '#2a46f2',
        main: '#2a46f2',
        600: '#253ff0',
        700: '#1f37ee',
        800: '#192fec',
        900: '#0f20e8',
        A100: '#ffffff',
        A200: '#e1e3ff',
        A400: '#aeb3ff',
        A700: '#959bff',
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 10,
    typography: {
      fontFamily: ['"Inter"', ...systemFont].join(','),
      fontFamilyCode: ['Consolas', 'Menlo', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'].join(','),
      fontFamilyTagline: ['"Inter"', ...systemFont].join(','),
      fontFamilySystem: systemFont.join(','),
      fontWeightRegular: 500,
      fontWeightSemiBold: 600,
      fontWeightExtraBold: 800,
      h0: {
        fontFamily: ['"Halvar"', ...systemFont].join(','),
        fontSize: 'clamp(40px, 1.2857rem + 3.5714vw, 66px)',
        fontWeight: 600,
        lineHeight: 78 / 64,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      h1: {
        fontFamily: ['"Inter"', ...systemFont].join(','),
        fontSize: 'clamp(56px, 1.2857rem + 3.5714vw, 56px)',
        fontWeight: 600,
        lineHeight: 78 / 64,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      h2: {
        fontFamily: ['"Inter"', ...systemFont].join(','),
        fontSize: 'clamp(35px, 0.9643rem + 1.4286vw, 40px)',
        fontWeight: 600,
        lineHeight: 50 / 44,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      h3: {
        fontFamily: ['"Inter"', ...systemFont].join(','),
        fontSize: defaultTheme.typography.pxToRem(32),
        lineHeight: 44 / 32,
        fontWeight: 600,
        letterSpacing: 0.2,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      h4: {
        fontFamily: ['"Inter"', ...systemFont].join(','),
        fontSize: defaultTheme.typography.pxToRem(24),
        lineHeight: 42 / 24,
        fontWeight: 600,
        letterSpacing: 0.2,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      h5: {
        fontFamily: ['"Inter"', ...systemFont].join(','),
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 36 / 20,
        fontWeight: 600,
        letterSpacing: 0.1,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
        lineHeight: 30 / 18,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      button: {
        textTransform: 'initial',
        fontWeight: 700,
        fontSize: defaultTheme.typography.pxToRem(16),
        lineHeight: 24 / 16,
        letterSpacing: 0,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(16),
        lineHeight: 24 / 16,
        letterSpacing: 0,
        fontWeight: 500,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(16),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(16),
        lineHeight: 24 / 16,
        letterSpacing: 0,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        lineHeight: 21 / 14,
        letterSpacing: 0,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      caption: {
        display: 'inline-block',
        fontSize: defaultTheme.typography.pxToRem(12),
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 500,
        color: mode === 'dark' ? '#fff' : '#000',
      },
      allVariants: {
        scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 32px)',
      },
    },
  } as ThemeOptions;
};

// MuiDayCalendar-weekContainer-inxtsW fPodHs MuiDayCalendar-weekContainer

export function getThemedComponents(theme: Theme): { components: Theme['components'] } {
  return {
    components: {
      MuiDayCalendar: {
        styleOverrides: {
          weekContainer: {
            height: '39px',
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            padding: 0,
            overflow: 'hidden',
            paddingLeft: 12,
            flexWrap: 'nowrap',
            'input.MuiAutocomplete-input': {
              padding: '12.5px 14px!important',
              paddingLeft: '0!important',
            },
            '&::before': {
              content: ' ',
              display: 'block',
              width: '30%',
              background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, ${
                theme.palette.mode === 'dark' ? '#3a2095' : '#f0f0f0'
              } 50%, ${theme.palette.mode === 'dark' ? '#3a2095' : '#f0f0f0'} 100%)`,
              zIndex: 1,
              right: 0,
              left: 'initial',
              position: 'absolute',
              top: 0,
              border: 'none!important',
            },
            '&.Mui-error::before': {
              background: 'transparent',
            },
            '& .MuiAutocomplete-endAdornment': {
              zIndex: 9,
            },
          },
          tag: {
            margin: 0,
            marginRight: 6,
            marginBottom: 2,
            marginTop: 2,
            maxWidth: '50%',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiChip-deleteIcon': {
              margin: '0 0px 0 5px',
            },
          },
        },
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            margin: 0,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: {
            '& .MuiPaper-root': {
              // padding: 10
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            padding: '10px 10px',
            '& .MuiCheckbox-root': {
              padding: 0,
              paddingRight: 8,
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          colorSecondary: {
            color: '#A8ABB4',
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: CONTAINER_WIDTHS.lg,
          },
          maxWidthXs: {
            maxWidth: CONTAINER_WIDTHS.xs,
          },
          maxWidthSm: {
            maxWidth: CONTAINER_WIDTHS.sm,
          },
          maxWidthMd: {
            maxWidth: CONTAINER_WIDTHS.md,
          },
          maxWidthLg: {
            maxWidth: CONTAINER_WIDTHS.lg,
          },
          maxWidthXl: {
            maxWidth: CONTAINER_WIDTHS.xl,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: 'inherit',
            },
            '& .MuiInputBase-root': {
              borderRadius: 8,
              margin: 0,
            },
            '& .MuiInputBase-multiline': {
              padding: 0,
            },
            '& .Mui-error input': {
              color: 'rgba(224, 45, 45, 1)',
              borderRadius: 8,
              backgroundColor: 'rgba(224, 45, 45, 0.1)',
            },
            '& .Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(249, 213, 213, 1)',
              color: 'rgba(224, 45, 45, 1)',
            },
            // '& .MuiSelect-select ~ svg.MuiSvgIcon-root': {
            //   content: ' ',
            //   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 10'%3E%3Cpath fill='%23000' d='m8 9.6.5-.1c.2 0 .3-.2.5-.3l6.6-6.8c.2-.2.3-.5.3-.8a1.2 1.2 0 0 0-.6-1l-.6-.2a1 1 0 0 0-.8.4L7.6 7.2h.8L2.1.8A1.2 1.2 0 0 0 .3 1l-.2.6V2l.3.4 6.7 6.8c.2.3.6.4 1 .4Z'/%3E%3C/svg%3E")`,
            //   display: 'block',
            //   height: '100%',
            //   width: 16,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundPosition: 'center',
            //   top: 0,
            //   right: 16
            // },
            // '& .MuiSelect-select ~ .MuiSvgIcon-root path': {
            //   display: 'none'
            // },
            // label position paddings
            '& .MuiFormLabel-root ~ .MuiInputBase-root .MuiInputBase-input': {
              padding: ' 24px 14px 9px',
            },
            '& .MuiFormLabel-root ~ .MuiInputBase-root .MuiInputBase-inputSizeSmall': {
              padding: ' 20px 14px 5px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              top: 0,
            },
            '& .MuiOutlinedInput-notchedOutline legend': {
              display: 'none',
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: '#9DA5AC',
            fontWeight: 'normal',
            '&.MuiInputLabel-shrink': {
              transform: 'translate(14px,7px) scale(0.75)',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            transform: 'translate(14px, 12px) scale(1)',
            display: 'flex',
            flexDirection: 'row-reverse',
            gap: '6px',
            '& .MuiFormLabel-asterisk.MuiInputLabel-asterisk': {
              color: 'red',
            },
            '&.MuiInputLabel-shrink': {
              transform: 'translate(14px,7px) scale(0.75)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::after': {
              display: 'none',
            },
            '&::before': {
              display: 'none',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          // @ts-ignore
          borderRadius: 16,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            margin: 0,
          },
          sizeLarge: {
            padding: '11px 16px',
          },
          sizeMedium: {
            padding: '8px 12px',
          },
          sizeSmall: {
            padding: '4px 6px',
          },
          containedSecondary: {
            color: purple.main,
          },
          containedPrimary: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
          },
          containedSuccess: {
            color: '#fff',
          },
          containedWarning: {
            color: '#fff',
          },
          textPrimary: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          },
          textSecondary: {
            background: '#F5F5F5',
            color: '#000',
          },
          // outlined
          outlinedSecondary: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
            borderColor: ' #E0E0E0',
          },
          outlinedPrimary: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
            borderColor: ' #E0E0E0',
          },
        },
      },
      MuiIconButton: {
        variants: [
          {
            props: { color: 'secondary' },
            style: {
              color: '#616671!important',
              borderColor: '#6166714a!important',
            },
          },
        ],
      },
      //   styleOverrides: {
      //     paper: {
      //       minWidth: 160,
      //       color: theme.palette.text.secondary,
      //       backgroundImage: 'none',
      //       backgroundColor:
      //         theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : theme.palette.background.paper,
      //       border: `1px solid ${
      //         theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[200]
      //       }`,
      //       '& .MuiMenuItem-root': {
      //         fontSize: theme.typography.pxToRem(14),
      //         fontWeight: 500,
      //         '&:hover': {
      //           backgroundColor:
      //             theme.palette.mode === 'dark'
      //               ? alpha(theme.palette.primaryDark[700], 0.4)
      //               : theme.palette.grey[50]
      //         },
      //         '&:focus': {
      //           backgroundColor:
      //             theme.palette.mode === 'dark'
      //               ? alpha(theme.palette.primaryDark[700], 0.4)
      //               : theme.palette.grey[50]
      //         },
      //         '&.Mui-selected': {
      //           fontWeight: 500,
      //           color:
      //             theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
      //           backgroundColor:
      //             theme.palette.mode === 'dark'
      //               ? theme.palette.primaryDark[700]
      //               : alpha(theme.palette.primary[100], 0.6)
      //         }
      //       }
      //     }
      //   }
      // },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor:
              theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.08) : theme.palette.grey[100],
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ArrowDropDownRounded,
        },
        styleOverrides: {
          iconFilled: {
            // top: 'calc(50% - .25em)'
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : '#fff',
            '&[href]': {
              textDecorationLine: 'none',
            },
          },
          outlined: {
            display: 'block',
            borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.grey[200],
            ...(theme.palette.mode === 'dark' && {
              backgroundColor: theme.palette.primary.dark,
            }),
            'a&, button&': {
              '&:hover': {
                boxShadow: `0px 4px 20px ${
                  theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(170, 180, 190, 0.3)'
                }`,
              },
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1, 2),
            borderColor: theme.palette.divider,
          },
          head: {
            color: theme.palette.text.primary,
            fontWeight: 700,
          },
          body: {
            color: theme.palette.text.secondary,
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : '#fff',
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            padding: '5px 9px',
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 44,
            height: 28,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                transform: 'translateX(14px)',
                color: '#fff',
              },
            },
          },
          switchBase: {
            height: 22,
            width: 22,
            padding: 0,
            color: '#fff',
            top: 3,
            left: 4,
            '&.Mui-checked + .MuiSwitch-track': {
              opacity: 1,
            },
          },
          track: {
            opacity: 1,
            borderRadius: 32,
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[400],
          },
          thumb: {
            flexShrink: 0,
            width: '22px',
            height: '22px',
            boxShadow: 'none',
          },
        },
      },
      MuiCssBaseline: {
        defaultProps: {
          enableColorScheme: true,
        },
      },
    },
  };
}

export const darkTheme = createTheme(getDesignTokens('dark'));
export const lightTheme = createTheme(getDesignTokens('light'));
export const brandingDarkTheme = deepmerge(darkTheme, getThemedComponents(darkTheme));

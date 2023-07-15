import { Theme } from '@mui/material';
import { GlobalStylesProps as StyledGlobalStylesProps } from '@mui/system';

export const globalStyles = (mode: string): StyledGlobalStylesProps<Theme>['styles'] => ({
  html: {
    backgroundColor: mode === 'light' ? '#F5F5F5' : '#001e3c',
    color: mode === 'light' ? '#000000' : '#F5F5F5',
    width: 'fit-content',
    minWidth: '100%',
    overflowX: 'hidden',
  },
  body: {
    backgroundColor: 'transparent!important;',
    color: mode === 'light' ? '#000000' : '#F5F5F5',
    width: 'fit-content',
    minWidth: '100%',
    minHeight: '100%',
    overflowX: 'hidden',
  },
  p: {
    marginBlock: 'unset',
    fontWeight: 500,
  },
  a: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'inherit',
    padding: '0',
    cursor: 'pointer',
  },
  '#root': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: '0',
  },
  'input[type=number]': {
    '-moz-appearance': 'textfield',
  },
  [`#${'DEFAULT_PORTAL_ID'}`]: {
    zIndex: 100,
    position: 'fixed',
  },
  '.cropper-crop-box': {
    borderRadius: '50%',
  },
  '.cropper-view-box': {
    borderRadius: '50%',
  },
});

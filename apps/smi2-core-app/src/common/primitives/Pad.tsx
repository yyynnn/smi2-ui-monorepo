/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { styled } from '@mui/material/styles';

import { Flex, TFlexProps } from './Flex';

const negateString = (str: string | undefined) =>
  str
    ? str
        .split('px')
        .filter((item) => item !== '')
        .map((item) => `${Number(item) / 2}px`)
        .join(' ')
    : null;

export type TPadProps = {
  pad?: number | string;
  useMobile?: boolean;
  padMobile?: number | string;
  padding?: number | string;
  padLeft?: number | string;
  padRight?: number | string;
  padTop?: number | string;
  padBottom?: number | string;
};

export const Pad = styled(Flex)<TFlexProps & TPadProps>`
  ${({ pad, padding, padMobile, useMobile = false, height }) => {
    const data = pad || padding;
    const padMobileFinal = padMobile || data;
    const isPaddingZero = (typeof pad === 'number' && pad === 0) || (typeof padding === 'number' && padding === 0);

    return `
      height: ${height || 'inherit'};
      padding: ${data ? (typeof data === 'number' ? `${data}px` : data) : isPaddingZero ? '0px' : '20px'};

      ${
        useMobile
          ? `@media (max-width: 991px) {
        padding: ${
          data
            ? typeof padMobileFinal === 'number'
              ? `${padMobile || Number(data) / 2}px`
              : negateString(padMobileFinal)
            : '20px'
        };
      }`
          : ''
      }
    `;
  }};
`;

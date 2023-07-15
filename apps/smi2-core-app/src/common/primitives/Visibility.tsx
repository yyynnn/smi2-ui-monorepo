import { styled } from '@mui/material/styles';
import React, { FC } from 'react';
import { BREAKPOINTS, BREAKPOINTS_NAMES } from 'ui-mui';

import { Flex, TFlexProps } from './Flex';

export const Visibility: FC<{ visibleAt?: Array<string>; hiddenAt?: Array<string>; children: any } & TFlexProps> = ({
  children,
  visibleAt = ['md', 'lg', 'xl', 'xxl'],
  hiddenAt = [''],
  ...rest
}) => {
  return (
    <Wrapper alignItems="center" justifyContent="center" visibleAt={visibleAt} hiddenAt={hiddenAt} {...rest}>
      {children}
    </Wrapper>
  );
};

const fontsMedia = (visibleAt: any) =>
  BREAKPOINTS.map((breakpoint, idx) => {
    const breakpointName = BREAKPOINTS_NAMES[idx];
    const isLast = idx === BREAKPOINTS.length - 1;
    const isVisible = visibleAt ? visibleAt.includes(breakpointName) : false;

    return isLast
      ? `@media (max-width: ${breakpoint - 1}px) {
        display: ${isVisible ? 'flex' : 'none'};
  };
  @media (min-width: ${breakpoint}px) {
    display: ${isVisible ? 'flex' : 'none'};
};
  `
      : `@media (max-width: ${breakpoint - 1}px) {
        display: ${isVisible ? 'flex' : 'none'};
  };
`;
  })
    .reverse()
    .join(' ');

const Wrapper = styled(Flex)<any>`
  display: flex;
  ${({ visibleAt }) => fontsMedia(visibleAt)};
`;

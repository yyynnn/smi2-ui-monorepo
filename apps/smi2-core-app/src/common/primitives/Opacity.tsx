import { styled } from '@mui/material/styles';

import { Flex, TFlexProps } from './Flex';

export const Opacity = styled(Flex)<TFlexProps & { opacity: number; isTransient?: boolean }>`
  opacity: ${({ opacity = 1 }: { opacity: number }) => `${opacity}`};
  pointer-events: ${({ opacity = 1 }) => (opacity === 0 ? 'none' : 'auto')};
  transition: ${({ isTransient = false }) => (isTransient ? 'opacity 200ms ease-in-out' : '')};
`;

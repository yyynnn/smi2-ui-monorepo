import { styled } from '@mui/material/styles';

import { Flex, TFlexProps } from './Flex';

interface Props extends TFlexProps {
  height?: number;
  width?: number;
  maxWidth?: number;
  maxHeight?: number;
  display?: string;
}

export const Max = styled(Flex)<Props>`
  max-height: ${({ maxHeight }: Props) => (maxHeight ? `${maxHeight}px` : '100%')};
  max-width: ${({ maxWidth }: Props) => (maxWidth ? `${maxWidth}px` : '100%')};
  height: ${({ height }: Props) => (height ? `${height}px` : '100%')};
  width: ${({ width }: Props) => (width ? `${width}px` : '100%')};
  display: ${({ display }: Props) => display};
  overflow: auto;
`;

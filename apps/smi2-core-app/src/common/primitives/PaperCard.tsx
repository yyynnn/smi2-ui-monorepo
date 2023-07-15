import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { FC, useEffect, useRef, useState } from 'react';

import { TFlexProps } from './Flex';
import { Pad } from './Pad';

export const PaperCard: FC<TFlexProps & PaperProps & { pad?: number | string }> = ({
  children,
  elevation,
  variant,
  ...props
}) => {
  const ref: any = useRef({});
  const [heightP, setHeightP] = useState(0);

  return (
    <PaperWrapper ref={ref} $heightP={heightP} elevation={elevation ?? 0} variant={variant}>
      <Pad {...props}>{children}</Pad>
    </PaperWrapper>
  );
};

const PaperWrapper = styled(Paper)<PaperProps & { $heightP: number }>`
  position: relative;
  overflow: auto;
  width: 100%;
  height: ${({ $heightP }) => ($heightP ? `calc(100vh - ${$heightP + 20}px)` : '')};
`;

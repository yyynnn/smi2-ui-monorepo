import { CircularProgress, CircularProgressProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

export const ParentLoader: React.FC<CircularProgressProps & { fillAvailable?: boolean }> = ({
  fillAvailable,
  ...props
}) => {
  return (
    <Background fillAvailable={fillAvailable}>
      <StyledSpinner {...props} />
    </Background>
  );
};

const StyledSpinner = styled(CircularProgress)`
  z-index: 1;
`;
const Background = styled('div')<{ fillAvailable?: boolean }>`
  width: ${({ fillAvailable }) => (fillAvailable ? '100%' : 'inherit')};
  height: ${({ fillAvailable }) => (fillAvailable ? '100%' : 'inherit')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { Box } from '@mui/material';
import React, { FC, ReactNode } from 'react';

export const ZIndex: FC<{ zIndex: number | string; position?: any; children?: ReactNode }> = ({
  zIndex,
  children,
  position,
  ...rest
}) => {
  return (
    <Box sx={{ zIndex }} style={{ position: position || 'relative' }} {...rest}>
      {children}
    </Box>
  );
};

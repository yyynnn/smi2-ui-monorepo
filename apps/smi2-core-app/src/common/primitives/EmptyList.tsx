import { Typography } from '@mui/material';
import React from 'react';

import { PaperCard } from './PaperCard';

export const EmptyList: React.FC<{ caption: string }> = ({ caption }) => {
  return (
    <PaperCard width="100%" justifyContent="center" alignItems="center">
      <Typography variant="h6">{caption}</Typography>
    </PaperCard>
  );
};

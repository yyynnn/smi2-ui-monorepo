import { styled } from '@mui/material/styles';
import React from 'react';

import { Flex } from './Flex';

export const Ellipsis = styled('div')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

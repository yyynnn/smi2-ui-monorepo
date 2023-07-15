import { styled } from '@mui/material/styles';
import React from 'react';

import { Flex } from './Flex';

export const DotList = styled(Flex)`
  & p {
    color: grey;
  }

  & > *:not(first-child)::before {
    content: '\\25CF';
    font-size: 14px;
    padding: 0 10px;
    opacity: 0.1;
  }

  & > *:first-child::before {
    content: '';
    display: none;
  }
`;

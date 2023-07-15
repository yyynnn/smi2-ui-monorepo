import { styled } from '@mui/material/styles';
import React from 'react';

import { Flex } from './Flex';

export const DividerList = styled(Flex)`
  flex-direction: column;

  & > *:not(first-child) {
    border-top: 1px solid #0000001a;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 0;
    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[50]};
    }
  }

  & > *:first-child {
    /* border: none; */
    border-color: transparent;
    /* padding-top: 20px; */
    /* transition: 200ms all ease-in-out; */

    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[50]};
      /* border-radius: 10px; */
      /* border-top: transparent; */
      /* padding-left: 10px; */
      /* padding-right: 10px; */
      /* margin: -1px -10px; */
      /* margin-top: -22px; */
      /* padding-top: 22px; */
      /* padding-bottom: 20px; */
      z-index: 0;
    }
  }
`;

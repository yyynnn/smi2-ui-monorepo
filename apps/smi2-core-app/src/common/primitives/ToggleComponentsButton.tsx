import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';

import { Flex } from './Flex';

interface IProps {
  components: [ReactNode, ReactNode];
  toggleState?: boolean;
  toggle?: (val?: any) => any;
  tooltip?: string;
  children?: ReactNode;
}

export const ToggleComponentsButton: React.FC<IProps> = ({ components, toggle, toggleState = false }) => {
  const toggleHandler = (event: React.MouseEvent): any => {
    event.stopPropagation();
    if (toggle) {
      toggle(event);
    }
  };

  return (
    <Wrapper justifyContent="center" alignItems="center" onClick={toggleHandler}>
      {toggleState ? components[0] : components[1]}
    </Wrapper>
  );
};

const Wrapper = styled(Flex as any)`
  cursor: pointer;
`;

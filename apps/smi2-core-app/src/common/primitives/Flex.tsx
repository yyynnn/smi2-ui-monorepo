/* eslint-disable react/display-name */
/* eslint-disable no-restricted-imports */
import { StyledComponent } from '@emotion/styled';
import { Theme, styled } from '@mui/material/styles';
import { MUIStyledCommonProps } from '@mui/system';
import React from 'react';

export type TFlexProps = {
  height?: number | string;
  width?: number | string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'inherit' | 'initial' | 'unset';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: number;
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
    | 'flex-start'
    | 'flex-end';
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  alignItems?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
    | 'flex-start'
    | 'flex-end';
  flexShrink?: number | string;
  flexGrow?: number | string;
};

const FlexInner = styled('div')<TFlexProps>`
  display: flex;
  ${(props) => `
    ${
      props.height || typeof props.height === 'number'
        ? `height: ${typeof props.height === 'number' ? `${props.height}px` : props.height};`
        : ''
    }
    ${
      props.width || typeof props.width === 'number'
        ? `width: ${typeof props.width === 'number' ? `${props.width}px` : props.width};`
        : ''
    }
    flex-direction: ${props.flexDirection ?? 'row'};
    ${props.wrap ? `flex-wrap: ${props.wrap};` : ''}
    justify-content: ${props.justifyContent ?? 'stretch'};
    ${props.alignContent ? `align-content: ${props.alignContent};` : ''}
    align-items: ${props.alignItems ?? 'stretch'};
    ${props.gap ? `grid-gap: ${props.gap}px;` : ''}
    ${
      props.flexShrink || typeof props.flexShrink === 'number'
        ? `flex-shrink: ${typeof props.flexShrink === 'number' ? `${props.flexShrink}` : props.flexShrink};`
        : ''
    }
    ${
      props.flexGrow || typeof props.flexGrow === 'number'
        ? `flex-grow: ${typeof props.flexGrow === 'number' ? `${props.flexGrow}` : props.flexGrow};`
        : ''
    }
  `}
`;
// @ts-ignore
export const Flex: StyledComponent<'div', Theme, MUIStyledCommonProps<Theme> & TFlexProps, never> = React.forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => <FlexInner {...props} ref={ref} />,
);

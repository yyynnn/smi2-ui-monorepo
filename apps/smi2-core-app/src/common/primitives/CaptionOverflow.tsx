import { Typography } from '@mui/material';
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Variant } from '@mui/material/styles/createTypography';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { OverridableStringUnion } from '@mui/types';
import React, { FC, HTMLAttributes, ReactElement, useLayoutEffect, useRef, useState } from 'react';

import { Flex } from './Flex';

export type TCaptionProps = HTMLAttributes<HTMLButtonElement> & {
  width?: number | string;
  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
};

export const CaptionOverflow: FC<TCaptionProps> = ({ children, width, variant = 'body2' }) => {
  const textRef = useRef(null);
  const [overflow, setOverflow] = useState(false);

  const detectOverflow = (event: any): boolean => event.offsetWidth < event.scrollWidth;

  useLayoutEffect(() => {
    if (textRef.current && detectOverflow(textRef.current) !== overflow) {
      setOverflow(detectOverflow(textRef.current));
    }
  }, [children, width]);

  const renderCaption = (): ReactElement =>
    width ? (
      <CaptionWrapper width={width}>
        {children && (
          <TextContainer>
            <Typography variant={variant as any} ref={textRef} color="text.secondary">
              {children}
            </Typography>
          </TextContainer>
        )}
      </CaptionWrapper>
    ) : (
      <>
        <Typography variant={variant as any} ref={textRef} color="text.secondary">
          {children}
        </Typography>
      </>
    );

  return (
    <Flex>
      {overflow ? (
        <Tooltip title={children}>
          <TextContainer width={width}>
            <Typography noWrap variant={variant as any} color="text.secondary">
              {children}
            </Typography>
          </TextContainer>
        </Tooltip>
      ) : (
        renderCaption()
      )}
    </Flex>
  );
};

export const CaptionWrapper = styled('div')<{ width?: string | number }>`
  ${({ width }) => width && `width: ${typeof width === 'number' ? `${width}px` : width};`}
  display: block;
`;

export const TextContainer = styled('div')<{ width?: string | number }>`
  ${({ width }) => width && `width: ${typeof width === 'number' ? `${width}px` : width};`}
  user-select: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

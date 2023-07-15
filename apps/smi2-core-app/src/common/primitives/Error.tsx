import { styled } from '@mui/material/styles';
import React, { FC } from 'react';
import { FieldError, get, Message, useFormContext } from 'react-hook-form';

import { Spacer } from './Spacer';

interface Props {
  as?: any;
  arbitError?: boolean;
  name: string;
  message?: string | FieldError | undefined;
  render?: any;
}

export const Error: FC<Props> = ({ as, arbitError = false, name, message = '', ...rest }) => {
  const methods = useFormContext();
  const errorByErrState = get(methods?.formState?.errors, name);
  const errorByEmptyValue = methods?.getValues()[name] === '';
  const error = errorByErrState || errorByEmptyValue;

  const { message: messageFromRegister, types } = error || {};

  return error && (messageFromRegister || message) ? (
    <Wrapper>{messageFromRegister || message}</Wrapper>
  ) : (
    <Spacer space={30} mobSpace={30} />
  );
};

const Wrapper = styled('div')`
  color: #ff8787;
  padding-left: 20px;
  padding-bottom: 10px;
  min-height: 30px;
`;

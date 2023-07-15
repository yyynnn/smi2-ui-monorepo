/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { Button, CircularProgress, Skeleton, Typography, styled } from '@mui/material';
import React, { FC } from 'react';

import { DividerList } from './DividerList';
import { Flex } from './Flex';
import { Spacer } from './Spacer';

interface LoadingBlockProps {
  isLoading: boolean;
  isFetching?: boolean;
  isError?: boolean;
  skeleton?: boolean;
  skeletonListCount?: number;
  refetch?: (val: any) => void;
  lines?: number;
  height?: number | string;
  children?: React.ReactNode;
}

/**
 * Renders a loading block while content is being fetched. Displays a skeleton
 * or a circular progress indicator depending on the value of the isLoading prop.
 * If isLoading and skeleton props are both true, displays a list of
 * skeleton blocks with a circular skeleton and a few lines of random widths.
 * If not in loading state, displays the children prop. If refetch is provided, displays
 * an error message with a button to retry fetching the data when called.
 *
 * @param children - content to display if not loading or in error state
 * @param skeleton - whether to display skeleton blocks while loading
 * @param skeletonListCount - number of skeleton blocks to display
 * @param isLoading - whether the component is loading or not
 * @param lines - number of lines to display in each skeleton block
 * @param refetch - function to retry fetching data if provided
 * @param height - height of the component
 * @return the LoadingBlock component
 */
export const LoadingBlock: FC<LoadingBlockProps> = ({
  children,
  skeleton,
  skeletonListCount = 10,
  isLoading = true,
  isFetching = false,
  isError = false,
  lines = 3,
  height,
  refetch,
  ...rest
}) => {
  const skeletonList = [...new Array(skeletonListCount)];

  return (
    <>
      {isFetching ? <FetchingOverlay /> : null}
      {isLoading ? (
        <>
          {skeleton ? (
            <DividerList width="100%" height={height} style={{ overflowY: 'auto' }}>
              {skeletonList.map((_, idx) => (
                <Flex key={`flex_skeleton_${idx}`} width="100%" justifyContent="center" alignItems="flex-start">
                  <div>
                    <Skeleton animation="wave" variant="circular" width={50} height={50} />
                  </div>
                  <Spacer />
                  <Flex width="100%" flexDirection="column" justifyContent="center">
                    {[...new Array(lines)].map((_, _idx) => {
                      const width = `${100 * Math.random()}%`;

                      return (
                        <Skeleton
                          key={`skeleton_${idx}_${_idx}`}
                          animation="wave"
                          height={15}
                          style={{ marginBottom: 6 }}
                          width={width}
                        />
                      );
                    })}
                  </Flex>
                </Flex>
              ))}
            </DividerList>
          ) : (
            <Flex height="100%" width="100%" justifyContent="center" alignItems="center" flexDirection="column">
              <CircularProgress />
            </Flex>
          )}
        </>
      ) : isError ? (
        <Flex flexDirection="column" width="100%" height="100%" justifyContent="center" alignItems="center">
          <Typography>Ошибка!</Typography>
          <Spacer />
          <Button variant="contained" onClick={refetch}>
            Перезагрузить данные?
          </Button>
        </Flex>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

const FetchingOverlay = styled('div')`
  width: 100%;
  height: 100%;
  background-color: aqua;
  position: absolute;
  top: 0;
  left: 0;
`;

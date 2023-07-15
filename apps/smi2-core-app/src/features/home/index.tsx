import { SearchRounded } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-grid-system';

import { Flex, Spacer } from '../../common/primitives';
import { PaperCard } from '../../common/primitives/PaperCard';

export const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Flex justifyContent="space-between" alignItems="center">
            <Typography>Home Page</Typography>
            <Spacer width={10} />
            <TextField
              placeholder="Поиск по новостям"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Flex>
          <Spacer></Spacer>
          <PaperCard>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo qui quia iusto inventore dolor, at
            accusantium laudantium expedita quas placeat dolore modi exercitationem quidem esse reprehenderit recusandae
            facilis saepe voluptas?
          </PaperCard>
        </Col>
        <Col lg={4}>
          <PaperCard>Новости</PaperCard>
        </Col>
      </Row>
    </Container>
  );
};

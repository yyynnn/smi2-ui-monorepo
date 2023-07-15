import { Box, Button, Typography } from '@mui/material';

import { Content } from './styled';

export const HomePage = () => {
  return (
    <Content>
      <Typography variant="h6" sx={{ mb: 1.5, color: (theme) => theme.brand.blue }}>
        Home Page
      </Typography>
      <Box my={0.5} />
      <Button onClick={() => console.log('Material UI button')}>Material UI button</Button>
    </Content>
  );
};

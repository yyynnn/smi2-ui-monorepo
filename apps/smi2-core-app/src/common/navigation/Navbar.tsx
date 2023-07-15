import MenuIcon from '@mui/icons-material/Menu';
import {
  Badge,
  Button,
  IconButton,
  Link,
  MenuItem,
  MenuList,
  Paper,
  SwipeableDrawer,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useTranslation } from 'react-i18next';
import { getWindow } from 'ssr-window';

import { Flex, Pad, Pointer, Spacer } from '../primitives';
import { Visibility } from '../primitives/Visibility';

const window = getWindow();

const MENU_ROUTES = [
  { name: 'главное', route: '/' },
  { name: 'политика', route: '/politics' },
];

const AUX_MENU_ROUTES = [
  ...(process.env.NODE_ENV === 'development' ? [{ name: 'Плейграунд', route: '/playground' }] : []),
  { name: 'О компании', route: '/about' },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [menuRoutes, setMenuRoutes] = useState<
    Array<{
      name: string;
      route: string;
    }>
  >(MENU_ROUTES);

  const [auxMenuRoutes, setAuxMenuRoutes] = useState<
    Array<{
      name: string;
      route: string;
    }>
  >(AUX_MENU_ROUTES);

  const currentLocation = window.location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [drawerOpen, toggleDrawer] = useState(false);
  const [previousWidth, setPreviousWidth] = useState(0);
  const [currentTab, setCurrentTab] = useState(
    menuRoutes.find((event) => event.route.includes(currentLocation))?.route,
  );

  // handlers
  const toggleDrawerHandler = () => {
    toggleDrawer((prevState) => !prevState);
  };

  useEffect(() => {
    setCurrentTab(menuRoutes.find(({ route }) => window.location.pathname.includes(route))?.route);
    toggleDrawer(false);
  }, [window.location.pathname, menuRoutes]);

  return true ? (
    <>
      <FixedNavbar navHidden={navHidden}>
        <Visibility visibleAt={['lg', 'xl', 'xxl']} justifyContent="start" alignItems="center" height="100%">
          {auxMenuRoutes.length > 0 && (
            <AuxNavbar square elevation={0}>
              <Container>
                <Row>
                  <Col>
                    <Flex gap={20} justifyContent="flex-end">
                      {auxMenuRoutes.map((auxMenuRoute) => {
                        return (
                          <button
                            type="button"
                            key={auxMenuRoute.name}
                            onClick={() => {
                              router.push(auxMenuRoute.route);
                            }}
                          >
                            <Typography color="#9da5ac">{auxMenuRoute.name}</Typography>
                          </button>
                        );
                      })}
                    </Flex>
                  </Col>
                </Row>
              </Container>
            </AuxNavbar>
          )}
        </Visibility>

        <Container>
          <Visibility visibleAt={['xs', 'sm', 'md']} flexDirection="column" width="100%">
            {/* <Spacer space={10} isMobile={false} /> */}
            <Flex justifyContent="space-between" gap={20} alignItems="center" width="100%">
              <LogoWrapper justifyContent="center" alignItems="center">
                <Link href="/">
                  <Pointer>logo</Pointer>
                </Link>
              </LogoWrapper>
              <Flex alignItems="center">
                {/* <ThemeSwitcher /> */}
                <IconButton size="small" sx={{ height: 42, width: 42 }}>
                  <MenuIcon />
                </IconButton>
              </Flex>
            </Flex>
            {/* <Spacer space={10} isMobile={false} /> */}
          </Visibility>

          <Row>
            <Col xs={12} md={2} lg={2}>
              <Visibility visibleAt={['lg', 'xl', 'xxl']} justifyContent="start" alignItems="center" height="100%">
                <Link href="/">
                  <Pointer>logo</Pointer>
                </Link>
              </Visibility>
            </Col>
            <Col sm={12} md={8} lg={9}>
              <Visibility visibleAt={['lg', 'xl', 'xxl']}>
                <Navblock justifyContent="center" alignItems="center" gap={10}>
                  <Tabs value={currentLocation.includes(currentTab || ' ') ? currentTab : false} variant="scrollable">
                    {menuRoutes.map((menuRoute, idx) => {
                      return (
                        <Tab
                          value={menuRoute.route}
                          label={
                            <Badge color="primary" overlap="rectangular" style={{ right: 2 }}>
                              {menuRoute.name}
                            </Badge>
                          }
                          key={menuRoute.route}
                          onClick={() => {
                            setCurrentTab(menuRoute.route);
                            router.push(menuRoute.route);
                          }}
                        />
                      );
                    })}
                  </Tabs>
                </Navblock>
              </Visibility>
            </Col>
          </Row>
        </Container>

        <SwipeableDrawer onOpen={() => setIsOpen(true)} open={drawerOpen} onClose={toggleDrawerHandler} anchor="right">
          <Flex flexDirection="column" justifyContent="space-between" height="-webkit-fill-available">
            <Pad>
              <LogoWrapper justifyContent="center" alignItems="center">
                <Link href="/">
                  <Pointer>logo</Pointer>
                </Link>
              </LogoWrapper>
            </Pad>
            <Flex flexDirection="column" gap={5} justifyContent="space-between">
              <Flex justifyContent="space-between" flexDirection="column">
                {/* <CloseButton onClick={toggleDrawer} /> */}
                <Spacer />
                <MenuList>
                  {[...menuRoutes, ...auxMenuRoutes].map((menuRoute) => {
                    return (
                      <MenuItem key={menuRoute.name} onClick={() => router.push(menuRoute.route)}>
                        {menuRoute.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
                {/* <ThemeSwitcher /> */}
              </Flex>

              <Spacer />
            </Flex>

            <Pad flexDirection="column" gap={5} justifyContent="space-between">
              <Button onClick={toggleDrawerHandler} variant="contained" fullWidth>
                {t('navigation.home')}
              </Button>
            </Pad>
          </Flex>
        </SwipeableDrawer>
      </FixedNavbar>
      <StyledSpacer space={auxMenuRoutes.length > 0 ? 99 : 51} mobSpace={44} isMobile />
      {/* {auxMenuRoutes.length > 0 && <StyledSpacer space={38} mobSpace={1} isMobile />} */}
    </>
  ) : null;
};

const StyledSpacer = styled(Spacer)`
  width: 100%;
  max-width: 100%;
  background-color: ${({ theme }) => (theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper)};
`;

const Navblock = styled(Flex)``;

const LogoWrapper = styled(Flex)``;

const AuxNavbar = styled(Paper)`
  padding: 10px 0;
  background-color: ${({ theme }) => (theme.palette.mode === 'light' ? '#f8f8f8' : theme.palette.background.paper)};
  max-height: 38px;
  width: 100%;
`;

const FixedNavbar = styled('div')<any>`
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 3;
  transform: translateY(${({ navHidden }) => (navHidden ? '-100px' : '0px')});
  background-color: ${({ theme }) => theme.palette.background.paper};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid #18181820;

  & .MuiTab-root {
    min-height: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #9da5ac;
  }
`;

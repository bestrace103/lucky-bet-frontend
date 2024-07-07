import { useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, useTheme } from '@mui/material';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
import { useMockedUser } from 'src/hooks/use-mocked-user';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Scrollbar from 'src/components/scrollbar';
import { usePathname } from 'src/routes/hooks';
import { NavSectionVertical } from 'src/components/nav-section';
import { useSettingsContext } from 'src/components/settings';
// assets
import ShiftLeftIcon from 'src/assets/icons/shift-left.svg';
//
import Promotions from 'src/components/nav-section/vertical/promotions';
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';
import { ContactsPopover, NotificationsPopover } from '../_common';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { user } = useMockedUser();

  const pathname = usePathname();

  const lgUp = useResponsive('up', 'lg');

  const navData = useNavData();

  const theme = useTheme();

  const settings = useSettingsContext();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Stack
      sx={{
        ...bgGradient({
          direction: '90deg',
          startColor: `${theme.palette.secondary.light}66`,
          endColor: `${theme.palette.secondary.dark}66`,
        }),
        maxHeight: { xs: "100%", md: "90%" },
        height: 1,
        ml: { xs: 0, md: 4 },
        mt: 0,
        borderRadius: 3,
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between" mt={1} p={1}>
        <Button
          variant="contained"
          onClick={() =>
            settings.onUpdate(
              'themeLayout',
              settings.themeLayout === 'vertical' ? 'mini' : 'vertical'
            )
          }
          sx={{
            width: 120,
            bgcolor: theme.palette.secondary.dark,
            borderRadius: 2,
            ':hover': {
              bgcolor: '#2f435b',
            },
          }}
        >
          <Box component="img" src={ShiftLeftIcon} alt="shift left" />
          <Typography variant="body2" color={theme.palette.secondary.contrastText} ml={1}>
            Hide
          </Typography>
        </Button>

        <Stack flexDirection="row" spacing={1}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={50}
            height={50}
            borderRadius={2}
            bgcolor={theme.palette.secondary.light}
          >
            <ContactsPopover />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={50}
            height={50}
            borderRadius={2}
            bgcolor={theme.palette.secondary.light}
          >
            <NotificationsPopover />
          </Box>
        </Stack>
      </Stack>

      <Scrollbar
        sx={{
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          '& .simplebar-content': {
            // height: 'calc(100vh - 83px)',
            height: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          },
        }}
      >
        <NavSectionVertical
          data={navData}
          config={{
            currentRole: user?.role || 'admin',
          }}
        />

        <Box sx={{ flexGrow: 1 }} />

        <Promotions />
      </Scrollbar>
    </Stack>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: NAV.W_VERTICAL,
      }}
    >
      {/* <NavToggleButton /> */}

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.W_VERTICAL,
            marginTop: '75px',
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
// theme
import { hideScroll, bgGradient } from 'src/theme/css';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// components
import { NavSectionMini } from 'src/components/nav-section';
import { useSettingsContext } from 'src/components/settings';
import Promotions from 'src/components/nav-section/vertical/promotions';
// assets
import ShiftRightIcon from 'src/assets/icons/shift-right.svg';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';

// ----------------------------------------------------------------------

export default function NavMini() {
  const { user } = useMockedUser();

  const navData = useNavData();

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Box
      component="nav"
      sx={{
        ml: 4,
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_MINI },
      }}
    >
      {/* <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_MINI - 12,
        }}
      /> */}

      <Stack
        sx={{
          ...bgGradient({
            direction: '90deg',
            startColor: `${theme.palette.secondary.light}66`,
            endColor: `${theme.palette.secondary.dark}66`,
          }),
          pb: 2,
          mt: 11,
          width: NAV.W_MINI,
          height: 'calc(100vh - 83px)',
          alignItems: 'center',
          position: 'fixed',
          borderRadius: 2,
          ...hideScroll.x,
        }}
      >
        <Button
          variant="contained"
          onClick={() =>
            settings.onUpdate(
              'themeLayout',
              settings.themeLayout === 'vertical' ? 'mini' : 'vertical'
            )
          }
          sx={{
            width: 78,
            height: 50,
            mt: 2,
            mb: 3,
            bgcolor: theme.palette.secondary.dark,
            borderRadius: 2,
            ':hover': {
              bgcolor: '#2f435b',
            },
          }}
        >
          <Box component="img" src={ShiftRightIcon} alt="shift left" />
        </Button>

        <NavSectionMini
          data={navData}
          config={{
            currentRole: user?.role || 'admin',
          }}
        />

        <Box sx={{ flexGrow: 1 }} />

        <Promotions />
      </Stack>
    </Box>
  );
}

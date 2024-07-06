// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// theme
import { bgBlur, bgGradient } from 'src/theme/css';
// auth
import { useAuthContext } from 'src/auth/hooks';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import { useSettingsContext } from 'src/components/settings';
//
import CustomStyledConnectButton from 'src/components/wallet-button/styledConnectButton';
import { HEADER, NAV } from '../config-layout';
import { AccountPopover, LanguagePopover } from '../_common';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const { user } = useAuthContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const isNavMini = settings.themeLayout === 'mini';

  const lgUp = useResponsive('up', 'lg');
  const smUp = useResponsive('up', 'sm');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  const renderContent = (
    <>
      <Logo sx={{ mr: 2.5 }} />

      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>
        {user !== null && <CustomStyledConnectButton />}

        {smUp && <LanguagePopover />}

        {smUp && <AccountPopover />}
      </Stack>

      {!smUp && (
        <IconButton onClick={onOpenNav}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.secondary.lighter,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: '100%',
          height: HEADER.H_DESKTOP_OFFSET,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            // width: `calc(100% - ${NAV.W_MINI + 1}px)`,
            width: 1,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          ...bgGradient({
            direction: '0deg',
            startColor: `${theme.palette.secondary.light}80`,
            endColor: `${theme.palette.secondary.dark}80`,
          }),
          height: 1,
          px: { lg: 5 },
          mx: lgUp ? 4 : 2,
          borderRadius: '0 0 16px 16px',
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

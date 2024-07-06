import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
// routes
import { useRouter } from 'src/routes/hooks';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { LogInDialog, RegisterDialog } from 'src/components/custom-dialog';
// MUI Icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  {
    label: 'Profile',
    linkTo: '/#1',
  },
  {
    label: 'Settings',
    linkTo: '/#2',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const router = useRouter();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { logout, user } = useAuthContext();

  const popover = usePopover();

  const logInConfirm = useBoolean();
  const registerConfirm = useBoolean();

  const handleLogout = async () => {
    try {
      await logout();
      popover.onClose();
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickItem = (path: string) => {
    popover.onClose();
    router.push(path);
  };

  return (
    <>
      {user !== null && (
        <>
          <IconButton
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={varHover(1.05)}
            onClick={popover.onOpen}
            sx={{
              width: 40,
              height: 40,
              background: () => alpha(theme.palette.grey[500], 0.08),
              ...(popover.open && {
                background: () =>
                  `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
              }),
            }}
          >
            <Avatar
              src={user?.avatar}
              alt={user?.username}
              sx={{
                width: 36,
                height: 36,
                border: () => `solid 2px ${theme.palette.secondary.lighter}`,
              }}
            >
              {user?.username.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>
        </>
      )}

      {user === null && (
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              registerConfirm.onTrue();
              popover.onClose();
            }}
            sx={{
              width: 150,
              color: 'white',
              bgcolor: theme.palette.primary.main,
              px: matches === true ? 3 : 1,
              borderTop: '3px solid #FFF',
              borderLeft: '3px solid #FFF',
              borderRight: '3px solid #FFF',
              borderRadius: 2,
              boxShadow:
                '0px 0px 0px 4px rgba(255, 255, 255, 0.07), 0px -3px 0px 0px rgba(0, 0, 0, 0.20) inset',
              ':hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <AutoAwesomeIcon />
            &nbsp; Join Now
          </Button>

          <Button
            variant="contained"
            size="large"
            onClick={() => {
              logInConfirm.onTrue();
              popover.onClose();
            }}
            sx={{
              width: 150,
              bgcolor: theme.palette.secondary.light,
              color: 'white',
              px: matches === true ? 3 : 1,
              boxShadow:
                '0px 0px 0px 4px rgba(255, 255, 255, 0.07), 0px -3px 0px 0px rgba(0, 0, 0, 0.20) inset',
              ':hover': {
                bgcolor: '#2f435b',
              },
            }}
          >
            <AutoAwesomeIcon />
            &nbsp; Log In
          </Button>
        </Stack>
      )}

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, p: 0 }}>
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
        >
          Logout
        </MenuItem>
      </CustomPopover>

      <LogInDialog open={logInConfirm.value} onClose={logInConfirm.onFalse} />

      <RegisterDialog open={registerConfirm.value} onClose={registerConfirm.onFalse} />
    </>
  );
}

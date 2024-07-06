import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';
// assets
import LogoImg from 'src/assets/images/logo.png';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    // if (disabledLink) {
    //   return logo;
    // }

    return (
      // <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      //   {logo}
      // </Link>
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 1,
          display: 'inline-flex',
          cursor: 'default',
          ...sx,
        }}
        {...other}
      >
        <Link component={RouterLink} href="/">
          <Box component="img" src={LogoImg} alt="logo" />
        </Link>
      </Box>
    );
  }
);

export default Logo;

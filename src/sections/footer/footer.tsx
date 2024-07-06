import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// assets
import logo from 'src/assets/images/logo.png';
// mui icons
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// theme
import { bgGradient } from 'src/theme/css';

export default function Footer() {
  const content = `Your Winning Streak Starts Here–Experience the Thrill, Play\nSmart, and Gamble Responsibly at Our Premier Online Casino!`;

  const contact =
    'WinX100 is a brand name of WinX100, having its registered address. For any inquiries, contact us at @winx100.com';

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Stack
      alignItems={matches === true ? 'flex-start' : 'center'}
      spacing={matches === true ? 4 : 1}
      sx={{
        ...bgGradient({
          direction: '0deg',
          startColor: `${theme.palette.secondary.light}80`,
          endColor: `${theme.palette.secondary.dark}80`,
        }),
        top: 0,
        p: 3,
        borderRadius: '32px 32px 0 0',
      }}
    >
      <Box>
        <Box component="img" src={logo} alt="" />
      </Box>

      <Typography variant="inherit" color={theme.palette.primary.darker}>
        {content}
      </Typography>
      <Box
        display="flex"
        flexDirection={matches === true ? 'row' : 'column'}
        gap={matches === true ? 3 : 0}
      >
        <Stack
          spacing={matches === true ? 1 : 0}
          alignItems={matches === true ? 'flex-start' : 'center'}
        >
          <Typography ml={1} variant="subtitle1">
            Games
          </Typography>
          <Stack flexDirection="row" spacing={2}>
            <Button>Popular</Button>
            <Button>Slots</Button>
            <Button>Live</Button>
          </Stack>
        </Stack>
        <Stack
          spacing={matches === true ? 1 : 0}
          alignItems={matches === true ? 'flex-start' : 'center'}
        >
          <Typography ml={1} variant="subtitle1">
            Legal
          </Typography>
          <Stack flexDirection="row" spacing={2}>
            <Button>Privacy Policy</Button>
            <Button>Terms of service</Button>
            <Button>AML</Button>
          </Stack>
        </Stack>
        <Stack
          spacing={matches === true ? 1 : 0}
          alignItems={matches === true ? 'flex-start' : 'center'}
        >
          <Typography ml={1} variant="subtitle1">
            Join the community
          </Typography>
          <Stack flexDirection="row" spacing={2}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="black"
              borderRadius={2}
            >
              <IconButton>
                <XIcon />
              </IconButton>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="black"
              borderRadius={2}
            >
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="black"
              borderRadius={2}
            >
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Stack>
        <Typography
          variant="body1"
          color={theme.palette.secondary.contrastText}
          textAlign={matches === true ? 'start' : 'center'}
        >
          {contact}
        </Typography>

        <Typography
          variant="body1"
          color={theme.palette.secondary.contrastText}
          textAlign={matches === true ? 'start' : 'center'}
        >
          @WinX100 | All rights reserved
        </Typography>
      </Stack>
    </Stack>
  );
}

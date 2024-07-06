import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
// assets
import gift from 'src/assets/images/sidebar/gift.svg';
import crown from 'src/assets/images/sidebar/crown.svg';
// theme
import { bgGradient } from 'src/theme/css';
import { useSettingsContext } from 'src/components/settings';

export default function Promotions() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isMini = settings.themeLayout === 'mini';

  return (
    <Stack spacing={1} mx={2} mb={2}>
      {!isMini && (
        <Typography variant="h6" color={theme.palette.primary.dark} ml={2}>
          Promotions
        </Typography>
      )}
      <Button
        sx={{
          ...bgGradient({
            direction: '0deg',
            startColor: `${theme.palette.secondary.light}80`,
            endColor: `${theme.palette.secondary.dark}80`,
          }),
          width: isMini ? 78 : 1,
          borderRadius: 2,
          px: 2,
          py: isMini ? 2 : 1,
          justifyContent: isMini ? "center" : "flex-start"
        }}
      >
        <Stack flexDirection="row" alignItems="center" spacing={2}>
          <Box component="img" src={gift} width={30} height={30} alt="" />
          {!isMini && (
            <Typography variant="subtitle1" color="white">
              Refer & Earn
            </Typography>
          )}
        </Stack>
      </Button>

      <Button
        sx={{
          ...bgGradient({
            direction: '0deg',
            startColor: `${theme.palette.secondary.light}80`,
            endColor: `${theme.palette.secondary.dark}80`,
          }),
          width: isMini ? 78 : 1,
          borderRadius: 2,
          p: 2,
          py: isMini ? 2 : 1,
          justifyContent: isMini ? "center" : "flex-start"
        }}
      >
        <Stack flexDirection="row" alignItems="center" spacing={2}>
          <Box component="img" src={crown} width={30} height={30} alt="" />
          {!isMini && (
            <Box>
              <Typography variant="subtitle1" color={theme.palette.primary.dark}>
                Refer & Earn
              </Typography>
              <Typography variant="body2" color={theme.palette.primary.darker} align='left'>
                Lorem Ipsum
              </Typography>
            </Box>
          )}
        </Stack>
      </Button>
    </Stack>
  );
}

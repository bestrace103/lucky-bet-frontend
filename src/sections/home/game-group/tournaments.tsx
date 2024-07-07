// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
// assets
import goldcup from 'src/assets/images/game-icons/goldcup.png';
import queen from 'src/assets/images/games/queen.png';
import ico_people from 'src/assets/icons/people.png';
import ico_dollar from 'src/assets/icons/dollar-square.png';
// theme
import { bgGradient } from 'src/theme/css';

export default function Tournaments() {
  const games = [
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
  ];

  const theme = useTheme();

  const cardHeight = () => {
    const width = window.innerWidth;
    if (width >= 1024 && width < 1440) return 273;
    return 500;
  };

  return (
    <Card
      sx={{
        ...bgGradient({
          direction: '0deg',
          startColor: `${theme.palette.secondary.light}66`,
          endColor: `${theme.palette.secondary.dark}66`,
        }),
        p: 2,
        pb: 0,
        width: 1,
        borderRadius: 4,
        position: 'relative',
      }}
    >
      <Stack spacing={2}>
        <Stack
          flexDirection="row"
          alignItems="center"
          borderRadius={2}
          p={1}
          spacing={1}
          sx={{
            ...bgGradient({
              direction: '0deg',
              startColor: `${theme.palette.secondary.light}80`,
              endColor: `${theme.palette.secondary.dark}80`,
            }),
          }}
        >
          <Box component="img" src={goldcup} alt="money" />
          <Typography variant="h5" flexGrow={1}>
            Tournaments
          </Typography>
          <Button sx={{ color: theme.palette.primary.main }}>See All</Button>
        </Stack>

        <Stack spacing={1} height={cardHeight()} overflow="hidden">
          {games.map((item, index) => (
            <Stack key={index} flexDirection="row" alignItems="center" spacing={1}>
              <Box
                component="img"
                src={item.url}
                borderRadius={3}
                width={80}
                sx={{ border: '3px solid rgba(255,255,255,0.3)', backgroundSize: 'cover' }}
                alt=""
              />
              <Stack flexGrow={1}>
                <Typography variant="subtitle1">Tournament Name</Typography>
                <Box display="flex" gap={1}>
                  <>
                    <Box component="img" src={ico_people} alt="people" />
                    <Typography variant="subtitle2">212.3K</Typography>
                  </>
                  <>
                    <Box component="img" src={ico_dollar} alt="people" />
                    <Typography variant="subtitle2">212.3K</Typography>
                  </>
                </Box>
              </Stack>
              <Button
                variant="contained"
                sx={{ borderRadius: 4, bgcolor: 'rgba(13, 26, 40, 1)', color: 'rgba(33, 131, 246, 1)' }}
              >
                Join Now
              </Button>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Box
        sx={{
          ...bgGradient({
            direction: '180deg',
            startColor: '#131d2e',
            endColor: '#000000',
          }),
          // ...bgGradient({
          //   direction: '180deg',
          //   startColor: '#1e2b3a',
          //   endColor: '#04092d',
          // }),
          width: 1,
          height: 50,
          bottom: 0,
          ml: -2,
          opacity: 0.6,
          position: 'absolute',
        }}
      />
    </Card>
  );
}

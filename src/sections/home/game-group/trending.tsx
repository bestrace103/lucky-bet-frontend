// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useTheme } from '@mui/material';
// assets
import green_dia from 'src/assets/images/game-icons/green-dia.png';
import soccer from 'src/assets/images/games/soccer.png';
// theme
import { bgGradient } from 'src/theme/css';
import UsersIcon from 'src/assets/images/people.png';

export default function Trending() {
  const games = [
    {
      url: soccer,
    },
    {
      url: soccer,
    },
    {
      url: soccer,
    },
    {
      url: soccer,
    },
    {
      url: soccer,
    },
    {
      url: soccer,
    },
    {
      url: soccer,
    },
    {
      url: soccer,
    },
    {
      url: soccer,
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
          <Box component="img" src={green_dia} alt="money" />
          <Typography variant="h5" flexGrow={1}>
            Trending
          </Typography>
          <Button sx={{ color: theme.palette.primary.main }}>See All</Button>
        </Stack>

        <Grid container spacing={1} height={cardHeight()} overflow="hidden">
          {games.map((item, index) => (
            <Grid key={index} md={4} xs={6} position="relative">
              <Box
                component="img"
                src={item.url}
                borderRadius={4}
                width={1}
                sx={{ border: '3px solid rgba(255,255,255,0.3)', backgroundSize: 'cover', aspectRatio: 1 }}
                alt=""
              />

              <Stack direction="row" justifyContent="center" alignItems="center" gap={1} position="absolute" width={1} mt={-4}>
                <Box
                  component="img"
                  src={UsersIcon}
                  width={24}
                  height={24}
                />
                <Typography fontWeight={100} fontSize={14}>212.3K</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* <Box
        sx={{
          ...bgGradient({
            direction: '180deg',
            startColor: '#1e2b3a',
            endColor: '#04092d',
          }),
          width: 1,
          height: 50,
          bottom: 0,
          ml: -2,
          opacity: 0.6,
          position: 'absolute',
        }}
      /> */}
    </Card>
  );
}

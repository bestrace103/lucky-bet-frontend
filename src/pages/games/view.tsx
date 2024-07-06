import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useMediaQuery, useTheme } from '@mui/material';
// routes
import { useParams } from 'src/routes/hooks';
// theme
import { bgGradient } from 'src/theme/css';
//
import Footer from 'src/sections/footer/footer';
// images
import queen from 'src/assets/images/games/queen.png';

export default function GameViews() {
  const casinoGames = [
    {
      name: 'popular',
      title: 'Popular Games',
    },
    {
      name: 'slot',
      title: 'Slot Games',
    },
    {
      name: 'live-games',
      title: 'Live Games',
    },
    {
      name: 'tournaments',
      title: 'Tournaments',
    },
    {
      name: 'trending',
      title: 'Trending',
    },
  ];

  const gamelist = [
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

  const params = useParams();

  const theme = useTheme();

  const matches = useMediaQuery('sm');
  return (
    <Stack spacing={matches === true ? 4 : 2}>
      <Card
        sx={{
          ...bgGradient({
            direction: '0deg',
            startColor: `${theme.palette.secondary.light}66`,
            endColor: `${theme.palette.secondary.dark}66`,
          }),
          p: 2,
          width: 1,
          height: 1,
          borderRadius: 2,
        }}
      >
        <Stack width={1} height={1} p={5} spacing={3}>
          <Stack alignItems="center">
            <Typography variant="h3">
              {casinoGames.map((item) => item.name === params.id && item.title)}
            </Typography>
            <Typography variant="body2">Enjoy The Well Curated Selection</Typography>
          </Stack>

          <Grid container spacing={2}>
            {gamelist.map((item, index) => (
              <Grid key={index} md={2} xs={4}>
                <Box
                  component="img"
                  src={item.url}
                  width={1}
                  height={1}
                  borderRadius={4}
                  border="3px solid rgba(255,255,255,0.3)"
                  sx={{ backgroundSize: 'cover' }}
                  alt=""
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Card>

      <Footer />
    </Stack>
  );
}

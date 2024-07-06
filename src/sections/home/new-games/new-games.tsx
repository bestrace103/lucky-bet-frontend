// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useTheme } from '@mui/material';
// assets
import queen from 'src/assets/images/games/queen.png';
// theme
import { bgGradient } from 'src/theme/css';

export default function NewGames() {
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
  return (
    <Card
      sx={{
        ...bgGradient({
          direction: '0deg',
          startColor: `${theme.palette.secondary.light}66`,
          endColor: `${theme.palette.secondary.dark}66`,
        }),
        px: 7,
        py: 4,
        width: 1,
        borderRadius: 4,
      }}
    >
      <Stack spacing={4}>
        <Stack alignItems="center" borderRadius={2}>
          <Typography variant="h2">New Games</Typography>
          <Typography variant="subtitle1">Enjoy The Well Curated Selection</Typography>
        </Stack>

        <Grid container spacing={1}>
          {games.map((item, index) => (
            <Grid key={index} md={2}>
              <Box
                component="img"
                src={item.url}
                borderRadius={4}
                width={1}
                sx={{ border: '3px solid rgba(255,255,255,0.3)', backgroundSize: 'cover', aspectRatio: 1 }}
                alt=""
              />
            </Grid>
          ))}
        </Grid>

        <Stack flexDirection="row" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              mr: 3,
              px: 3,
              bgcolor: theme.palette.primary.main,
              color: 'white',
            }}
          >
            See all
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

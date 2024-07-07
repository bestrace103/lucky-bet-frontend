import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack, useTheme } from '@mui/material';
//
import PopularNow from './popular';
import LiveGames from './live-game';
import HotSlots from './hot-slots';
import TopPlayers from './top-players';
import Tournaments from './tournaments';
import Trending from './trending';

export default function GameView() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid container spacing={matches === true ? 4 : 2}>
      <Grid md={4} height={1}>
        <PopularNow />
      </Grid>

      <Grid md={8} height={1}>
        <Stack height={1} spacing={matches === true ? 4 : 2}>
          <Grid container spacing={matches === true ? 4 : 2}>
            <Grid md={6}>
              <HotSlots />
            </Grid>
            <Grid md={6}>
              <LiveGames />
            </Grid>
          </Grid>
          <TopPlayers />
          <Grid container spacing={matches === true ? 4 : 2}>
            <Grid md={6} xs={12}>
              <Tournaments />
            </Grid>
            <Grid md={6} xs={12}>
              <Trending />
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}

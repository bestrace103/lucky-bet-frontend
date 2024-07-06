// @mui
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@mui/material';
//
import Dashboard from './dashboard/dashboard';
import GameView from './game-group/view';
import NewGames from './new-games/new-games';
import FaqView from './faq/faq';
import PaymentMethods from './payment-method/view';
import Footer from '../footer/footer';
import Providers from './provider/providers';

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Stack spacing={3} mx={2} mb="-90px">
      <Dashboard />

      <GameView />

      {matches && <Providers />}

      {matches && <NewGames />}

      <FaqView />

      <PaymentMethods />

      <Footer />
    </Stack>
  );
}

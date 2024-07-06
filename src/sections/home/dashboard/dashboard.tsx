// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import { usePopover } from 'src/components/custom-popover';
// icons
import img_bonus from 'src/assets/images/Bonus/bonus-icon.png';
import img_spin from 'src/assets/images/Bonus/free-spin.png';
import img_cashback from 'src/assets/images/Bonus/cash-back.png';
import bg_bonus from 'src/assets/images/Bonus/bonus.png';
import bg_spin from 'src/assets/images/Bonus/spin.png';
import bg_cashback from 'src/assets/images/Bonus/cashback.png';
//
import AppWelcome from './app-welcome';
import BookingWidgetSummary from './booking-widget-summary';
import DepositDialog from './deposit-dialog';

export default function Dashboard() {
  const allInfo: any = [
    {
      title: 'Welcome Bonus',
      description: 'Join us now for an unforgettable adventure in gaming and sportsmanship!',
      img_url: img_bonus,
      color: bg_bonus,
    },
    {
      title: 'Free Spins',
      description: 'Join us now for an unforgettable adventure in gaming and sportsmanship!',
      img_url: img_spin,
      color: bg_spin,
    },
    {
      title: 'Cashback Bonus',
      description: 'Join us now for an unforgettable adventure in gaming and sportsmanship!',
      img_url: img_cashback,
      color: bg_cashback,
    },
  ];

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const depositDialog = useBoolean();

  const popover = usePopover();
  return (
    <Stack>
      <AppWelcome
        title="Your Ultimate Online Casino Gaming and Sporting"
        description={`Join us now for an unforgettable adventure in gaming and sportsmanship!\nDaily jackpots and endless opportunities to win!`}
        action={
          <Button
            variant="contained"
            onClick={() => {
              depositDialog.onTrue();
              popover.onClose();
            }}
            sx={{
              bgcolor: theme.palette.primary.main,
              fontSize: 18,
              px: 3,
              color: 'white',
              ':hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Deposit Now
          </Button>
        }
      />

      <Grid container spacing={matches === true ? 4 : 2} mt={3}>
        {allInfo?.map((item: any, index: number) => (
          <Grid key={index} md={4} xs={12}>
            <BookingWidgetSummary
              gradientColor={item.color}
              title={item.title}
              total={item.description}
              icon={item.img_url}
            />
          </Grid>
        ))}
      </Grid>

      <DepositDialog open={depositDialog.value} onClose={depositDialog.onFalse} />
    </Stack>
  );
}

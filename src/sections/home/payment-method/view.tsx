import { useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// assets
import visa from 'src/assets/images/payment-icon/visa.svg';
import paypal from 'src/assets/images/payment-icon/paypal.svg';
import gpay from 'src/assets/images/payment-icon/gpay.svg';
import tick from 'src/assets/images/payment-icon/tick.svg';
import crypto from 'src/assets/images/payment-icon/crypto.svg';
import applepay from 'src/assets/images/payment-icon/applepay.svg';
import upi from 'src/assets/images/payment-icon/upi.svg';
import alipay from 'src/assets/images/payment-icon/alipay.svg';
// theme
import { bgGradient } from 'src/theme/css';
// mui icons
import { useMediaQuery, useTheme } from '@mui/material';

export default function PaymentMethods() {
  const methods = [
    { url: visa },
    { url: paypal },
    { url: gpay },
    { url: tick },
    { url: crypto },
    { url: applepay },
    { url: upi },
    { url: alipay },
  ];
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card
      sx={{
        ...bgGradient({
          direction: '0deg',
          startColor: `${theme.palette.secondary.light}66`,
          endColor: `${theme.palette.secondary.dark}66`,
        }),
        opacity: 1,
        p: matches === true ? 7 : 3,
        width: 1,
        borderRadius: 4,
      }}
    >
      <Stack alignItems="center" spacing={matches === true ? 4 : 2}>
        {/* <Typography variant="h3">Payment Methods We Accept</Typography> */}
        <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
          {methods.map((item, index) => (
            <Box key={index} component="img" src={item.url} alt="" />
          ))}
        </Box>
        {/* <Box>
          <Button variant="contained" sx={{ bgcolor: '#FFAE39' }}>
            Deposit Now
          </Button>
        </Box> */}
      </Stack>
    </Card>
  );
}

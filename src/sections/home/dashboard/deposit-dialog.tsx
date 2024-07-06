import { useState } from 'react';
// mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DialogProps, useTheme } from '@mui/material';
import Crypto from './deposit/crypto';
import Fiat from './deposit/fiat';
import PaymentMethods from './deposit/fiat/payment';

type DepositDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  onClose: VoidFunction;
};

export default function DepositDialog({ open, onClose }: DepositDialogProps) {
  const theme = useTheme();

  const [depositType, setDepositType] = useState<number>(0);
  const [isPayment, setIsPayment] = useState(false);

  const handleChangePayment = (val: boolean) => {
    setIsPayment(val);
  }

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 4,
        },
      }}
    >
      {!isPayment && <Stack
        spacing={3}
        sx={{
          p: 4,
          bgcolor: theme.palette.background.default,
          border: '8px solid #3F4CC4',
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" color="white">
          Deposit
        </Typography>

        <Stack
          direction="row"
          spacing={0.5}
          p={0.5}
          bgcolor={theme.palette.secondary.dark}
          borderRadius={1.5}
        >
          <Button
            onClick={() => setDepositType(0)}
            sx={{
              width: 1,
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              py: 1,
              borderRadius: 1,
              color: depositType === 0 ? 'white' : theme.palette.secondary.contrastText,
              bgcolor:
                depositType === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
              ':hover': {
                bgcolor: depositType === 0 ? 'primary.dark' : `${theme.palette.secondary.main}80`,
              },
            }}
          >
            Crypto
          </Button>

          <Button
            onClick={() => setDepositType(1)}
            sx={{
              width: 1,
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              py: 1,
              borderRadius: 1,
              color: depositType === 1 ? 'white' : theme.palette.secondary.contrastText,
              bgcolor:
                depositType === 1 ? theme.palette.primary.main : theme.palette.secondary.main,
              ':hover': {
                bgcolor: depositType === 1 ? 'primary.dark' : `${theme.palette.secondary.main}80`,
              },
            }}
          >
            Fiat
          </Button>

          <Button
            onClick={() => setDepositType(0)}
            disabled
            sx={{
              width: 1,
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              py: 1,
              borderRadius: 1,
              ':disabled': { bgcolor: theme.palette.secondary.main },
              //   color: depositType === 0 ? 'white' : theme.palette.secondary.contrastText,
              //   bgcolor:
              //     depositType === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
              //   ':hover': {
              //     bgcolor: depositType === 0 ? 'primary.dark' : `${theme.palette.secondary.main}80`,
              //   },
            }}
          >
            Buy Crypto
          </Button>
        </Stack>

        {depositType === 0 && <Crypto />}
        {depositType === 1 && <Fiat onPaymentMethod={handleChangePayment}/>}
      </Stack>}
      {isPayment && <PaymentMethods />}
    </Dialog>
  );
}

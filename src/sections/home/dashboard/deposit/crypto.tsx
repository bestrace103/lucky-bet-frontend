import { useState } from 'react';
// mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Button, useTheme } from '@mui/material';

// assets
import tether from 'src/assets/images/crypto-icon/tether.png';
import tron from 'src/assets/images/crypto-icon/tron.png';
import bitcoin from 'src/assets/images/crypto-icon/bitcoin.png';
import ethereum from 'src/assets/images/crypto-icon/ethereum.png';
import qrcode from 'src/assets/images/qrcode.png'
import danger from 'src/assets/images/deposit/danger.svg';
import copy from 'src/assets/images/deposit/copy.svg';
import info from 'src/assets/images/deposit/info.svg';
import info1 from 'src/assets/images/deposit/info-circle.svg';

export default function Crypto() {
  const coinLists = [
    {
      name: 'USDT',
      icon: tether,
    },
    {
      name: 'TRON',
      icon: tron,
    },
    {
      name: 'BTC',
      icon: bitcoin,
    },
    {
      name: 'ETH',
      icon: ethereum,
    },
  ];

  const networkLists = ['BTC', 'ETH', 'BNB', 'TRON'];

  const [selectedCoin, setSelectedCoin] = useState('0');
  const [selectedNetwork, setSelectedNetwork] = useState('0');

  const theme = useTheme();
  return (
    <Stack spacing={3}>
      <Stack flexDirection="row" spacing={1}>
        {coinLists.map((item, index) => (
          <Stack
            key={index}
            flexDirection="row"
            spacing={0.5}
            height={34}
            p="4px 8px 4px 4px"
            borderRadius={2}
            border={`1px solid ${theme.palette.secondary.light}`}
            bgcolor={theme.palette.secondary.main}
          >
            <Box component="img" src={item.icon} width={24} height={24} alt="" />
            {item.name}
          </Stack>
        ))}
      </Stack>

      <Grid container spacing={2} mt={1}>
        <Grid md={6}>
          <Stack spacing={1}>
            <Typography variant="body1" color={theme.palette.secondary.contrastText}>
              Choose deposit currency
            </Typography>

            <Select
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
              sx={{
                '& .MuiSelect-select': {
                  display: 'flex',
                  gap: 1,
                  p: 2,
                },
              }}
            >
              {coinLists.map((item, index) => (
                <MenuItem key={index} value={index} sx={{ display: 'flex', gap: 1 }}>
                  <Box component="img" src={item.icon} alt={item.name} />
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>

        <Grid md={6}>
          <Stack spacing={1}>
            <Typography variant="body1" color={theme.palette.secondary.contrastText}>
              Choose Network
            </Typography>

            <Select value={selectedNetwork} onChange={(e) => setSelectedNetwork(e.target.value)}>
              {networkLists.map((item, index) => (
                <MenuItem key={index} value={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="body1" color={theme.palette.secondary.contrastText}>
        Get extra <b style={{ color: 'white' }}>180%</b> bonus on minimum of{' '}
        <b style={{ color: 'white' }}>109.449 DAI</b> deposit
        <Box
          component='img'
          src={info1}
          alt=''
          width={24}
          height={24}
          ml={0.8}
          color={theme.palette.primary.main}
        />
      </Typography>
      <Stack
        flexDirection='row'
        padding={2}
        bgcolor={theme.palette.secondary.darker}
        borderRadius='20px'
        width='100%'
      >
        <Box component='img' src={qrcode} width={128} height={128} alt='' />
        <Stack
          ml={2}
          width='100%'
          justifyContent='space-between'
        >
          <Typography variant="body1" color={theme.palette.secondary.contrastText} >
            Deposit Address
          </Typography>
          <Stack
            bgcolor={theme.palette.secondary.darker}
            borderRadius='16px'
            padding='12px 20px 12px 20px'
            width='100%'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography
              variant="body1"
              color={theme.palette.secondary.contrastText}
              fontSize='large'
              sx={{
                wordBreak: 'break-word'
              }}
            >
              Oxf74E3f357A1BFF485947ba1818bd6d8AB23F6Ba7
            </Typography>
            <Button
              sx={{
                bgcolor: theme.palette.secondary.dark,
                padding: '4px 12px',
                fontSize: '1rem'
              }}
            >
              Copy
              <Box
                component='img'
                src={copy}
                width={22}
                height={22}
                alt=''
                ml={1}
              />
            </Button>
          </Stack>
          <Typography variant="body1" color={theme.palette.secondary.contrastText} alignItems='center' display='flex'>
            <Box
              component='img'
              src={danger}
              width={22}
              height={22}
              alt=''
              mr={1}
            />
            Minimum Deposit: 0.00000001 DAI
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection='row'
        bgcolor='#3F4CC4'
        borderRadius='16px'
        padding='16px'
      >
        <Box
          component='img'
          src={info}
          alt=''
          width={24}
          height={24}
          mr={0.8}
        />
        <Typography variant="body1" fontWeight={800} mr={1}>
          Notice:
        </Typography>
        <Typography variant="body1">
          Depositing in any other currency than DAI or any other network than ERC20 might end up in permanent loss of amount you sent
        </Typography>
      </Stack>
    </Stack>
  );
}

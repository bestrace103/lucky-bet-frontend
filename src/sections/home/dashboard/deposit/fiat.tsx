import { useState } from "react";

// mui
import {
    Box,
    MenuItem,
    Select,
    Stack,
    Typography,
    useTheme
} from "@mui/material";

// assets
import tether from 'src/assets/images/crypto-icon/tether.png';
import tron from 'src/assets/images/crypto-icon/tron.png';
import bitcoin from 'src/assets/images/crypto-icon/bitcoin.png';
import ethereum from 'src/assets/images/crypto-icon/ethereum.png';
import upi from 'src/assets/images/deposit/UPI.svg';
import clock from 'src/assets/images/deposit/clock.svg';
import arrow from 'src/assets/images/deposit/arrow-right.svg';

import UPI from './fiat/upi';
import Bank from './fiat/bank';
import Detail from "./fiat/detail";

type PaymentProps = {
    onPaymentMethod: (val: boolean) => void
}

export default function Fiat({onPaymentMethod}: PaymentProps) {
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
    const [selectedCoin, setSelectedCoin] = useState('0');
    const [detail, setDetail] = useState(false);

    const handleSetDetail = (val: boolean) => {
        setDetail(val);
    }

    const handlePayment = (val: boolean) => {
        onPaymentMethod(val);
    }

    const theme = useTheme();
    return (
        <Stack spacing={2}>
            <Stack
                flexDirection='row'
                justifyContent='space-between'
            >
                <Typography variant="body1" margin='auto 0'>
                    Deposit Currency
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
                        minWidth: '9rem',
                        background: '#0D1A28',
                        border: 'none',
                        outline: 'none'
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
            {!detail && <Typography variant="body1" margin='auto 0'>
                Choose a payment method
            </Typography>}
            {!detail && <UPI onClick={handleSetDetail}/>}
            {!detail && <Bank onClick={handleSetDetail}/>}
            {detail && <Detail onPaymentMethod={handlePayment}/>}
        </Stack>
    );
}
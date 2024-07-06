import { useState } from "react";
import { Box, Button, Input, InputBase, List, ListItem, MenuItem, Paper, Select, Stack, Typography, useTheme } from "@mui/material";

// assets
import INR from 'src/assets/images/deposit/INR.png';
import tick from 'src/assets/images/deposit/tick-circle.svg';
import warning from 'src/assets/images/deposit/warning-2.svg';
import secure from 'src/assets/images/deposit/Secure.png';

type PaymentProps = {
    onPaymentMethod: (val: boolean) => void
}

export default function Detail({onPaymentMethod}: PaymentProps) {
    const paymentMethods = ['UPI', 'Bank'];
    const [selectedPayment, setSelectedPayment] = useState('0');
    const theme = useTheme();

    const handleDepositClick = () => {
        onPaymentMethod(true);
    }

    return (
        <>
            <Stack
                flexDirection='row'
                justifyContent='space-between'
            >
                <Typography variant="body1" margin='auto 0'>
                    Payment Method
                </Typography>
                <Select
                    value={selectedPayment}
                    onChange={(e) => setSelectedPayment(e.target.value)}
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
                    {paymentMethods.map((item, index) => (
                        <MenuItem key={index} value={index} sx={{ display: 'flex', gap: 1 }}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </Stack>
            <Typography
                variant="body1"
                color={theme.palette.primary.main}
                fontSize='12px'
                textAlign='right'
                sx={{
                    cursor: 'pointer'
                }}
            >
                How to make a deposit?
            </Typography>
            <Stack
                flexDirection='row'
                justifyContent='space-between'
            >
                <Stack
                    padding='24px 16px'
                    sx={{
                        background: 'linear-gradient(0deg, #1C365380, #13253A80)'
                    }}
                    borderRadius='24px'
                    width='65%'
                >
                    <Stack
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Typography>
                            Deposit Amount
                        </Typography>
                        <Stack
                            flexDirection='row'
                            spacing={1}
                        >
                            <Button sx={{ background: theme.palette.secondary.dark }}>
                                1,000
                            </Button>
                            <Button sx={{ background: theme.palette.secondary.dark }}>
                                5,000
                            </Button>
                            <Button sx={{ background: theme.palette.secondary.dark }}>
                                50,000
                            </Button>
                        </Stack>
                    </Stack>
                    <Paper
                        component="form"
                        sx={{ 
                            p: '8px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: 2,
                            background: theme.palette.secondary.dark,
                            border: 'solid 1px',
                            borderColor: theme.palette.primary.light,
                            borderRadius: '16px !important',
                            justifyContent: 'space-between'
                        }}
                    >
                        <InputBase
                            inputProps={{ 'aria-label': 'search google maps' }}
                            value='INR  1,000'
                            sx={{
                                fontSize: '1.2rem',
                                width: '93%'
                            }}
                        />
                        <Box
                            component='img'
                            src={INR}
                            alt=""
                        />
                    </Paper>
                    <Stack
                        flexDirection='row'
                        justifyContent='space-between'
                        mt={2}
                    >
                        <Typography fontSize='14px'>
                            Bonus 150%  Activated
                        </Typography>
                        <Typography>
                            You receive
                        </Typography>
                    </Stack>
                    <Stack
                        flexDirection='row'
                        justifyContent='space-between'
                    >
                        <Typography fontSize='18px'>
                            + INR 1,500
                        </Typography>
                        <Typography fontSize='18px' color={theme.palette.success.main}>
                            INR 2,500.00
                        </Typography>
                    </Stack>
                    <Button
                        sx={{
                            marginTop: 'auto',
                            padding: '10px 16px',
                            backgroundColor: theme.palette.primary.main,
                            fontSize: '18px',
                            fontWeight: 400,
                            ":hover": {
                                backgroundColor: theme.palette.primary.main
                            }
                        }}
                        onClick={handleDepositClick}
                    >
                        Deposit Via UPI
                    </Button>
                </Stack>
                <Stack width='33%'>
                    <Stack
                        bgcolor='#0BBC784D'
                        padding='16px'
                        borderRadius='24px'
                        position='relative'
                    >
                        <Typography
                            fontSize='1.2rem'
                            fontWeight='800'
                            lineHeight='24px'
                            textAlign='center'
                        >
                            +150%
                        </Typography>
                        <Typography
                            textAlign='center'
                            color={theme.palette.secondary.contrastText}
                        >
                            (for deposits higher than INR 99.99)
                        </Typography>
                        <Box
                            component='img'
                            src={tick}
                            alt=""
                            width={24}
                            height={24}
                            position='absolute'
                            right={16}
                        />
                    </Stack>
                    <Stack
                        padding='16px'
                        borderRadius='24px'
                        position='relative'
                        mt={1}
                        sx={{
                            background: 'linear-gradient(0deg, #1C365380, #13253A80)'
                        }}
                    >
                        <Typography
                            fontSize='1.2rem'
                            fontWeight='800'
                            lineHeight='24px'
                            textAlign='center'
                        >
                            +180%
                        </Typography>
                        <Typography
                            textAlign='center'
                            color={theme.palette.secondary.contrastText}
                        >
                            (for deposits higher than INR 999.99)
                        </Typography>
                    </Stack>
                    <Stack
                        padding='16px'
                        borderRadius='24px'
                        position='relative'
                        mt={1}
                        sx={{
                            background: 'linear-gradient(0deg, #1C365380, #13253A80)'
                        }}
                    >
                        <Typography
                            fontSize='1.2rem'
                            fontWeight='800'
                            lineHeight='24px'
                            textAlign='center'
                        >
                            +200%
                        </Typography>
                        <Typography
                            textAlign='center'
                            color={theme.palette.secondary.contrastText}
                        >
                            (for deposits higher than INR 9999.99)
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                flexDirection='row'
                bgcolor={theme.palette.secondary.main}
                borderRadius='16px'
                padding='16px 12px'
            >
                <Box
                    component='img'
                    src={warning}
                    alt=""
                    width={40}
                    height={40}
                    marginTop='8px'
                />
                <List>
                    <ListItem sx={{padding: '0 1rem'}}>
                        <Typography color='#99A1E5' fontSize='12px'>
                            1. Your transfer amount has to MATCH the submission amount.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{padding: '0 1rem'}}>
                        <Typography color='#99A1E5' fontSize='12px'>
                            2. Each Order ID can ONLY be used once to avoid duplicates.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{padding: '0 1rem'}}>
                        <Typography color='#99A1E5' fontSize='12px'>
                            {`3. DO NOT save and deposit to previous's bank account. Please follow the deposit guideline to make deposit, otherwise your deposit will be missing.`}
                        </Typography>
                    </ListItem>
                </List>
            </Stack>
            <Stack
                flexDirection='row'
                bgcolor={theme.palette.secondary.main}
                borderRadius='16px'
                padding='16px 12px'
            >
                <Box
                    component='img'
                    src={secure}
                    alt=""
                    width={40}
                    height={40}
                    marginTop='8px'
                />
                <Stack
                    ml={2}
                >
                    <Typography>
                        You will be redirected to a third-party site verified by WinX100 game for a
                    </Typography>
                    <Typography>
                        secure and trustworthy browsing experience
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}
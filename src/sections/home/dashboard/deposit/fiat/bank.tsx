import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

// assets
import upi from 'src/assets/images/deposit/UPI.svg';
import clock from 'src/assets/images/deposit/clock.svg';
import arrow from 'src/assets/images/deposit/arrow-right.svg';

interface props {
    onClick: (val: boolean) => void
}

const Bank: React.FC<props> = ({onClick}) => {
    const theme = useTheme();

    const handleClick = () => {
        onClick(true);
    }

    return (
        <Stack
            bgcolor={theme.palette.secondary.dark}
            padding='16px'
            borderRadius='16px'
        >
            <Typography variant="body1" color={theme.palette.secondary.contrastText}>
                Bank Transfer
            </Typography>
            <Stack
                flexDirection='row'
                bgcolor={theme.palette.secondary.main}
                padding='16px'
                borderRadius='16px'
                justifyContent='space-between'
                position='relative'
                my={0.5}
            >
                <Stack flexDirection='row'>
                    <Box
                        component='img'
                        src={upi}
                        alt=""
                        padding='12px'
                        borderRadius='12px'
                        bgcolor={theme.palette.secondary.dark}
                    />
                    <Stack
                        margin='auto 1rem'
                    >
                        <Typography variant="body1">
                            UPI
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize='0.8rem'
                            display='flex'
                            alignItems='center'
                            color={theme.palette.secondary.contrastText}
                        >
                            <Box
                                component='img'
                                src={clock}
                                alt=""
                                mr={1}
                            />
                            EAT: 39min
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    flexDirection='row'
                    alignItems='center'
                    sx={{
                        cursor: "pointer"
                    }}
                    onClick={handleClick}
                >
                    <Typography variant="body1">
                        100-50,000 INR
                    </Typography>
                    <Box
                        component='img'
                        src={arrow}
                        alt=""
                        width={16}
                        height={16}
                        ml={2}
                    />
                </Stack>
                <Stack
                    position='absolute'
                    right={0}
                    top={-5}
                    sx={{
                        background: 'linear-gradient(90deg, #BC760B, #563605)'
                    }}
                    padding='4px 16px'
                    borderRadius='8px'
                >
                    <Typography variant="body1" fontSize='12px'>
                        Recommend
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                flexDirection='row'
                bgcolor={theme.palette.secondary.main}
                padding='16px'
                borderRadius='16px'
                justifyContent='space-between'
                position='relative'
                my={1}
            >
                <Stack flexDirection='row'>
                    <Box
                        component='img'
                        src={upi}
                        alt=""
                        padding='12px'
                        borderRadius='12px'
                        bgcolor={theme.palette.secondary.dark}
                    />
                    <Stack
                        margin='auto 1rem'
                    >
                        <Typography variant="body1">
                            UPI
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize='0.8rem'
                            display='flex'
                            alignItems='center'
                            color={theme.palette.secondary.contrastText}
                        >
                            <Box
                                component='img'
                                src={clock}
                                alt=""
                                mr={1}
                            />
                            EAT: 39min
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    flexDirection='row'
                    alignItems='center'
                    sx={{
                        cursor: "pointer"
                    }}
                    onClick={handleClick}
                >
                    <Typography variant="body1">
                        100-50,000 INR
                    </Typography>
                    <Box
                        component='img'
                        src={arrow}
                        alt=""
                        width={16}
                        height={16}
                        ml={2}
                    />
                </Stack>
                <Stack
                    position='absolute'
                    right={0}
                    top={-5}
                    sx={{
                        background: 'linear-gradient(90deg, #2183F6, #3F4CC4)'
                    }}
                    padding='4px 16px'
                    borderRadius='8px'
                >
                    <Typography variant="body1" fontSize='12px'>
                        Popular
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Bank;
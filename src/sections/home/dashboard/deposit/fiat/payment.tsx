import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

// assets
import arrowLeft from 'src/assets/images/deposit/arrow-left.svg';

export default function PaymentMethods() {
    const theme = useTheme();
    return (
        <>
            <Stack
                spacing={3}
                sx={{
                    p: 4,
                    bgcolor: theme.palette.background.default,
                    border: '8px solid #3F4CC4',
                    borderRadius: 4,
                }}
            >
                <Stack flexDirection='row' justifyContent='space-between'>
                    <Stack flexDirection='row'>
                        <Box
                            component='img'
                            src={arrowLeft}
                            alt=""
                        />
                        <Typography variant="h5" color="white">
                            Payment Method
                        </Typography>
                    </Stack>

                </Stack>

            </Stack>
        </>
    )
}
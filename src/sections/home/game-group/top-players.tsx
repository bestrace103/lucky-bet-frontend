// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
// assets
import medal from 'src/assets/images/game-icons/medal.png';
import profile from 'src/assets/images/games/profile.png';
// theme
import { bgGradient } from 'src/theme/css';

export default function TopPlayers() {
  const games = [
    {
      url: profile,
    },
    {
      url: profile,
    },
    {
      url: profile,
    },
    {
      url: profile,
    },
    {
      url: profile,
    },
    {
      url: profile,
    },
    {
      url: profile,
    },
  ];

  const theme = useTheme();

  const getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 620) return 3.3;
    if (width >= 768 && width < 1024) return 4.6;
    if (width >= 1024 && width < 1440) return 5.6;
    return 7;
  };

  return (
    <Card
      sx={{
        ...bgGradient({
          direction: '0deg',
          startColor: `${theme.palette.secondary.light}66`,
          endColor: `${theme.palette.secondary.dark}66`,
        }),
        p: 2,
        width: 1,
        height: 1,
        borderRadius: 4,
      }}
    >
      <Stack spacing={2}>
        <Stack
          flexDirection="row"
          alignItems="center"
          borderRadius={2}
          p={1}
          spacing={1}
          sx={{
            ...bgGradient({
              direction: '0deg',
              startColor: `${theme.palette.secondary.light}80`,
              endColor: `${theme.palette.secondary.dark}80`,
            }),
          }}
        >
          <Box component="img" src={medal} alt="money" />
          <Typography variant="h5" flexGrow={1}>
            Top Players Today
          </Typography>
          <Button sx={{ color: theme.palette.primary.main }}>View Leaderboard</Button>
        </Stack>

        <Swiper
          slidesPerView={getSlidesPerView()}
          spaceBetween={30}
          pagination={{ clickable: true }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {games.map((item, index) => (
            <SwiperSlide key={index} style={{ height: '100%' }}>
              <Stack key={index} alignItems="center">
                <Box position="relative" p={1.5}>
                  <StyledCircularProgress
                    variant="determinate"
                    size="100%"
                    value={100}
                    sx={{
                      color: 'rgba(255,255,255,0.3)',
                      position: 'absolute',
                      left: 0,
                      top: 0
                    }}
                  />
                  <StyledCircularProgress
                    variant="determinate"
                    size="100%"
                    value={40}
                    sx={{
                      color: 'rgba(255, 55, 103, 1)',
                      position: 'absolute',
                      left: 0,
                      top: 0
                    }}
                  />

                  <Box
                    component="img"
                    src={item.url}
                    borderRadius="50%"
                    sx={{ backgroundSize: 'cover' }}
                    alt=""
                  />
                </Box>
                <Typography variant="h6">@username</Typography>

                {index < 3 && <Stack
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    background: 'rgba(13, 26, 40, 1)',
                    border: 'solid 4px rgba(103, 92, 70, 1)',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    position: 'absolute',
                    bottom: 40,
                    left: 0
                  }}
                >
                  <Typography variant='h6' fontWeight={900}>{index + 1}</Typography>
                </Stack>}
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Card>
  );
}

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  circle: {
    strokeWidth: 1, // Adjust the border width here
  },
}));
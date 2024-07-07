// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Grid } from 'swiper/modules';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
// assets
import diamond from 'src/assets/images/game-icons/dai.png';
import queen from 'src/assets/images/games/queen.png';
// theme
import { bgGradient } from 'src/theme/css';
import { useMediaQuery, useTheme } from '@mui/material';

import UsersIcon from 'src/assets/images/people.png';

export default function PopularNow() {
  const games = [
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
    {
      url: queen,
    },
  ];

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const getHeight = () => {
    const width = window.innerWidth;
    return `${((width - 64 - 20) / 2.2 + 10) * 2 + 15}px`;
  };

  const cardHeight = () => {
    const width = window.innerWidth;
    if (width >= 1024 && width < 1440) return 900;
    return 1300;
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
        pb: 0,
        width: 1,
        borderRadius: 4,
        position: 'relative',
      }}
    >
      <Stack spacing={2}>
        <Stack
          flexDirection="row"
          alignItems="center"
          borderRadius={2}
          spacing={1}
          p={1}
          sx={{
            ...bgGradient({
              direction: '0deg',
              startColor: `${theme.palette.secondary.light}80`,
              endColor: `${theme.palette.secondary.dark}80`,
            }),
          }}
        >
          <Box component="img" src={diamond} alt="dia" />
          <Typography variant="h5" flexGrow={1}>
            Popular Now
          </Typography>
          <Button sx={{ color: theme.palette.primary.main }}>See All</Button>
        </Stack>

        {matches && (
          <Grid2 container spacing={2} height={cardHeight()} overflow="hidden" pb={2}>
            {games.map((item, index) => (
              <Grid2 key={index} md={6} xs={6} position="relative" height="calc(100% / 6)" display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={item.url}
                  borderRadius={4}
                  height={1}
                  sx={{ border: '3px solid rgba(255,255,255,0.3)', backgroundSize: 'cover', aspectRatio: 1 }}
                  alt=""
                />

                <Stack direction="row" justifyContent="center" alignItems="center" gap={1} position="absolute" width={1} bottom={20}>
                  <Box
                    component="img"
                    src={UsersIcon}
                    width={24}
                    height={24}
                  />
                  <Typography fontWeight={100} fontSize={14}>212.3K</Typography>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        )}

        {!matches && (
          <Swiper
            slidesPerView={2.2}
            spaceBetween={10}
            grid={{ rows: 2 }}
            direction="horizontal"
            loop={false}
            pagination={{ clickable: true }}
            modules={[Pagination, Grid]}
            style={{
              width: '100%',
              height: getHeight(),
            }}
          >
            {games.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={item.url}
                  borderRadius={4}
                  sx={{ border: '3px solid rgba(255,255,255,0.3)', backgroundSize: 'cover' }}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Stack>

      {/* <Box
        sx={{
          ...bgGradient({
            direction: '180deg',
            startColor: '#1e2b3a',
            endColor: '#04092d',
          }),
          width: 1,
          height: 50,
          bottom: 0,
          ml: -2,
          opacity: 0.6,
          position: 'absolute',
        }}
      /> */}
    </Card>
  );
}

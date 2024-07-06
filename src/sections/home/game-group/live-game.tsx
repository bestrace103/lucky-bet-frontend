// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Grid as Grid2 } from 'swiper/modules';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// assets
import clock from 'src/assets/images/game-icons/clock.png';
import tiger from 'src/assets/images/games/tiger.png';
// theme
import { bgGradient } from 'src/theme/css';
import { useMediaQuery, useTheme } from '@mui/material';
import Carousel, { CarouselArrows, CarouselDots, useCarousel } from 'src/components/carousel';

import UsersIcon from 'src/assets/images/people.png';

export default function LiveGames() {
  const carousel = useCarousel({
    autoplay: false,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 3 },
    }),
  });

  const games = [
    {
      url: tiger,
    },
    {
      url: tiger,
    },
    {
      url: tiger,
    },
    {
      url: tiger,
    },
    {
      url: tiger,
    },
    {
      url: tiger,
    },
  ];

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const getHeight = () => {
    const width = window.innerWidth;
    return `${((width - 64 - 20) / 2.2 + 10) * 2 + 15}px`;
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
          <Box component="img" src={clock} alt="money" />
          <Typography variant="h5" flexGrow={1}>
            Live Games
          </Typography>
          <Button sx={{ color: theme.palette.primary.main }}>See All</Button>
        </Stack>

        <Box
          sx={{
            '& ul': {
              gap: 0.5,
              '& li': {
                color: 'white',
                width: 16,
                height: 4,
                '& span': {
                  width: 1,
                  borderRadius: 2
                }
              },
              '& li.slick-active': {
                width: 32,
                height: 4,
                color: '#2183F6',
                '& span': {
                  width: 1,
                  borderRadius: 2
                }
              }
            }
          }}
        >
          <CarouselArrows filled shape="rounded">
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {[1, 2, 3].map((sliderIndex) => matches && (
                <Box key={sliderIndex}>
                  <Grid container spacing={1}>
                    {games.map((item, index) => (
                      <Grid key={index} md={4} xs={4} position="relative">
                        <Box
                          component="img"
                          src={item.url}
                          borderRadius={4}
                          sx={{ border: '3px solid rgba(255,255,255,0.3)', backgroundSize: 'cover', aspectRatio: 1 }}
                          alt=""
                        />

                        <Stack direction="row" justifyContent="center" alignItems="center" gap={1} position="absolute" width={1} mt={-4}>
                          <Box
                            component="img"
                            src={UsersIcon}
                            width={24}
                            height={24}
                          />
                          <Typography fontWeight={100} fontSize={14}>212.3K</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>

        {/* {matches && (
          <Grid container spacing={1}>
            {games.map((item, index) => (
              <Grid key={index} md={4} xs={4}>
                <Box
                  component="img"
                  src={item.url}
                  borderRadius={4}
                  sx={{ border: '3px solid rgba(255,255,255,0.3)', backgroundSize: 'cover', aspectRatio: 1 }}
                  alt=""
                />
              </Grid>
            ))}
          </Grid>
        )} */}

        {!matches && (
          <Swiper
            slidesPerView={2.2}
            spaceBetween={10}
            grid={{ rows: 2 }}
            direction="horizontal"
            loop={false}
            pagination={{ clickable: true }}
            modules={[Pagination, Grid2]}
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

                <Stack direction="row" justifyContent="center" alignItems="center" gap={1} position="absolute" width={1} mt={-5}>
                  <Box
                    component="img"
                    src={UsersIcon}
                    width={24}
                    height={24}
                  />
                  <Typography fontWeight={100} fontSize={14}>212.3K</Typography>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Stack>
    </Card>
  );
}

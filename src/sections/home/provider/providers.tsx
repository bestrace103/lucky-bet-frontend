// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
// assets
import evolution from 'src/assets/images/providers/evolution.png';
// theme
import { bgGradient } from 'src/theme/css';
//

export default function Providers() {
  const methods = [
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
    { url: evolution },
  ];

  const theme = useTheme();

  return (
    <Card
      sx={{
        ...bgGradient({
          direction: '0deg',
          startColor: `${theme.palette.secondary.light}66`,
          endColor: `${theme.palette.secondary.dark}66`,
        }),
        opacity: 1,
        p: 5,
        width: 1,
        borderRadius: 4,
      }}
    >
      <Stack alignItems="center" spacing={5}>
        <Stack alignItems="center">
          <Typography variant="h3">Our Providers</Typography>
          <Typography variant="body1">Short text about providers</Typography>
        </Stack>
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          pagination={{ clickable: true }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {methods.map((item, index) => (
            <SwiperSlide key={index} style={{ height: '100%' }}>
              <Box component="img" src={item.url} width='80%' height={1} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Card>
  );
}

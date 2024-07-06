// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';
// theme
import { bgGradient } from 'src/theme/css';
// assets
import thumbsDesktop from 'src/assets/images/landing/thumbs-desktop.png';
import thumbsMobile from 'src/assets/images/landing/thumbs-mobile.png';
import bgGradientColor from 'src/assets/images/landing/bg.png';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
}

export default function AppWelcome({ title, description, action, img, ...other }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    autoplay: false,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 3 },
    }),
  });

  return (
    <Box
      sx={{
        position: 'relative',
        '& .slick-slider': {
          height: 400,
        },
        '& .slick-list': {
          height: 400,
          borderRadius: 2,
          boxShadow: theme.customShadows.z16,
          '& div, span': {
            height: 400
          }
        },
        '& .slider-content': {
          '& img': {
            height: 400
          }
        },
        '& ul': {
          gap: 1,
          justifyContent: 'flex-start',
          ml: {
            xs: theme.spacing(4),
            md: theme.spacing(6),
          },
          mt: -6,
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
          {[1, 2, 3].map((item) => (
            <CarouselItem key={item} title={title} description={description} action={action} img={img} />
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
}


const CarouselItem = ({ title, description, action, img, ...other }: Props) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const matches_lg = useMediaQuery(theme.breakpoints.up('lg'));
  const matches_xl = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box
      // sx={{
      //   width: 1,
      //   height: 400,
      //   borderRadius: 4,
      //   position: 'relative',
      // }}
      // {...other}
      // direction="row"
      sx={{
        // px: 4,
        px: {
          xs: theme.spacing(4),
          md: theme.spacing(6),
        },
        backgroundImage: `url(${bgGradientColor})`
      }}
    >
      {/* <Box component="img" src={bgGradientColor} alt="" width={1} height={1} /> */}
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        width={1}
        height={1}
      >
        <Stack
          spacing={matches === true ? 1 : 0}
          justifyContent="center"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          width={matches_lg === true ? 0.6 : 1}
          sx={{
            // p: {
            //   xs: theme.spacing(2),
            //   md: theme.spacing(3),
            // },
            textAlign: { xs: 'center', md: 'left' },
            zIndex: 2,
          }}
        >
          <Typography
            variant={matches === true ? 'h3' : 'h4'}
            sx={{ mb: 2, whiteSpace: 'pre-line' }}
          >
            {title}
          </Typography>

          {matches && (
            <Typography
              variant="body1"
              sx={{
                maxWidth: 0.7,
                mb: { xl: 5 },
              }}
            >
              {description}
            </Typography>
          )}

          {!matches && (
            <Box
              component="img"
              src={thumbsMobile}
              width={0.6}
              mb={2}
              // sx={{ opacity: 0.8 }}
              alt="thumb"
            />
          )}

          {action && action}
        </Stack>

        {matches && (
          <Box height={1} mr={2} zIndex={2}>
            <Box
              component="img"
              src={matches_xl ? thumbsDesktop : thumbsMobile}
              sx={{
                height: 1,
                width: 1,
                right: 50,
                // position: 'absolute',
              }}
              alt="thumb"
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
}
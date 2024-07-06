import { useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// assets
import dia from 'src/assets/images/game-icons/dai.png';
import lightning from 'src/assets/images/game-icons/lightning.png';
import money from 'src/assets/images/game-icons/money.png';
import seven from 'src/assets/images/game-icons/seven.png';
import wallet from 'src/assets/images/game-icons/wallet.png';
import card from 'src/assets/images/game-icons/card.png';
import tip from 'src/assets/images/game-icons/tip.png';
// theme
import { bgGradient } from 'src/theme/css';
// mui icons
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { useMediaQuery, useTheme } from '@mui/material';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function NewGames() {
  const [faqs, setFaqs] = useState([
    {
      image: seven,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
    {
      image: lightning,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
    {
      image: dia,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
    {
      image: card,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
    {
      image: wallet,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
    {
      image: money,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
    {
      image: lightning,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
    {
      image: tip,
      question: 'What is Winx100?',
      answer: 'It is Winx100.',
      open: false,
    },
  ]);

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Card
      sx={{
        ...bgGradient({
          direction: '0deg',
          startColor: `${theme.palette.secondary.light}66`,
          endColor: `${theme.palette.secondary.dark}66`,
        }),
        opacity: 1,
        p: matches === true ? 7 : 3,
        width: 1,
        borderRadius: 4,
      }}
    >
      <Stack spacing={4}>
        <Stack alignItems="flex-start">
          <Typography variant="h3">Frequently Asked Questions</Typography>
          <Typography variant="subtitle1">
            Immerse Yourself in the Ultimate Gaming Excitement!
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {faqs.map((item, index) => (
            <Grid key={index} md={6} xs={12}>
              <Accordion
                sx={{
                  ...bgGradient({
                    direction: '0deg',
                    startColor: `${theme.palette.secondary.light}80`,
                    endColor: `${theme.palette.secondary.dark}80`,
                  }),
                  width: 1,
                  opacity: 1,
                  borderRadius: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<Box
                    component="button"
                    width={35}
                    height={35}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={theme.palette.warning.darker}
                    color="white"
                    border="none"
                    borderRadius={1}
                    sx={{
                      cursor: 'pointer',
                    }}
                  >
                    <ExpandMoreIcon />
                  </Box>}
                >
                  <Stack spacing={2} flexDirection="row" alignItems="center">
                    <Box component="img" src={item.image} height="40px" alt="" sx={{ aspectRatio: 1 }} />
                    <Typography variant="h6" flexGrow={1}>
                      {item.question}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Card>
  );
}

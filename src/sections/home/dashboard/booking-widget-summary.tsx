// @mui
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
// theme
import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: string;
  icon: string;
  gradientColor: string;
  type?: string;
}

export default function BookingWidgetSummary({
  title,
  total,
  icon,
  gradientColor,
  type,
  sx,
  ...other
}: Props) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 4,
        height: 1,
        // minHeight: 200,
        borderRadius: 4,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        src={gradientColor}
        alt=""
        width={1}
        height={1}
        ml={-3}
        position="absolute"
      />
      <Box zIndex={2}>
        <Box sx={{ mb: 1, typography: 'h3' }}>{title}</Box>
        <Box sx={{ color: theme.palette.secondary.contrastText, typography: 'body1' }}>{total}</Box>
      </Box>

      <Box
        component="img"
        src={icon}
        alt=""
        sx={{
          width: 80,
          height: 80,
          lineHeight: 0,
          zIndex: 2,
        }}
      />
    </Card>
  );
}

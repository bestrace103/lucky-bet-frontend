import { useCallback } from 'react';
import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Typography, useTheme } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
//
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    icon: 'flagpack:gb-nir',
  },
  {
    label: 'French',
    value: 'fr',
    icon: 'flagpack:fr',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
    icon: 'flagpack:vn',
  },
  {
    label: 'Chinese',
    value: 'cn',
    icon: 'flagpack:cn',
  },
  {
    label: 'Arabic',
    value: 'ar',
    icon: 'flagpack:sa',
  },
];

export default function LanguagePopover() {
  const popover = usePopover();

  const currentLang = allLangs[0];

  const theme = useTheme();

  const handleChangeLang = useCallback(() => {
    popover.onClose();
  }, [popover]);

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 90,
          height: 50,
          bgcolor: theme.palette.secondary.light,
          borderRadius: 2,
          ...(popover.open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <Stack spacing={0.5} flexDirection="row" alignItems="center">
          <LanguageIcon />
          <Typography variant="subtitle2" color="white">
            {currentLang.value.toUpperCase()}
          </Typography>
          <KeyboardArrowDownIcon />
        </Stack>
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
        {allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={handleChangeLang}
          >
            <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} />
            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}

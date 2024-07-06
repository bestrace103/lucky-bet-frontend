import { memo, useState, useCallback } from 'react';
// @mui
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
// assets
import casino_url from 'src/assets/icons/ic_casino.svg';
import sports_url from 'src/assets/icons/ic_sports.svg';
//
import { NavSectionProps, NavListProps, NavConfigProps } from '../types';
import { navVerticalConfig } from '../config';

import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavSectionVertical({ data, config, sx, ...other }: NavSectionProps) {
  return (
    <Stack sx={sx} {...other}>
      {data.map((group, index) => (
        <Group
          key={group.subheader || index}
          subheader={group.subheader}
          items={group.items}
          config={navVerticalConfig(config)}
        />
      ))}
    </Stack>
  );
}

export default memo(NavSectionVertical);

// ----------------------------------------------------------------------

type GroupProps = {
  subheader: string;
  items: NavListProps[];
  config: NavConfigProps;
};

function Group({ subheader, items, config }: GroupProps) {
  const theme = useTheme();

  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const renderContent = items.map((list) => (
    <NavList
      key={list.title + list.path}
      data={list}
      depth={1}
      hasChild={!!list.children}
      config={config}
    />
  ));

  return (
    <List disablePadding sx={{ px: 1 }}>
      {subheader !== 'type' ? (
        <>
          <Collapse in={open} sx={{ borderRadius: 2, p: 1, mt: 2 }}>
            {renderContent}
          </Collapse>
        </>
      ) : (
        <Stack spacing={1} sx={{ bgcolor: '#2B2722', borderRadius: 2, p: 1, mt: 1 }}>
          <Button variant="contained" sx={{ bgcolor: '#995F0A', borderRadius: 2, py: 2 }}>
            <Box component="img" src={casino_url} width={0.25} alt="casino" />
            <Stack alignItems="flex-start">
              <Typography variant="subtitle1" color="white">
                Casino
              </Typography>
              <Typography color="wheat" sx={{ fontSize: 12 }}>
                Thrilled Bet Experience
              </Typography>
            </Stack>
          </Button>

          <Button variant="contained" sx={{ bgcolor: '#1E1B17', borderRadius: 2, py: 2 }}>
            <Box component="img" src={sports_url} width={0.25} alt="casino" />
            <Stack alignItems="flex-start">
              <Typography variant="subtitle1" color="white">
                Sports
              </Typography>
              <Typography color="wheat" sx={{ fontSize: 12 }}>
                Bet On your Favourites
              </Typography>
            </Stack>
          </Button>
        </Stack>
      )}
    </List>
  );
}

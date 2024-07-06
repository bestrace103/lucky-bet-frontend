import { memo } from 'react';
// mui
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material';
//
import { NavSectionProps, NavListProps, NavConfigProps } from '../types';
import { navMiniConfig } from '../config';
import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavSectionMini({ data, config, sx, ...other }: NavSectionProps) {
  const theme = useTheme();

  return (
    <Stack
      // bgcolor={theme.palette.secondary.dark}
      borderRadius={2}
      width={94}
      p={1}
      alignItems="center"
      spacing={1}
      sx={sx}
      {...other}
    >
      {data.map((group, index) => (
        <Group key={group.subheader || index} items={group.items} config={navMiniConfig(config)} />
      ))}
    </Stack>
    // <Stack sx={sx} {...other}>
    //   {data.map((group, index) => (
    //     <Group key={group.subheader || index} items={group.items} config={navMiniConfig(config)} />
    //   ))}
    // </Stack>
  );
}

export default memo(NavSectionMini);

// ----------------------------------------------------------------------

type GroupProps = {
  items: NavListProps[];
  config: NavConfigProps;
};

function Group({ items, config }: GroupProps) {
  const theme = useTheme();

  return (
    <>
      {items.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={1}
          hasChild={!!list.children}
          config={config}
        />
      ))}
      {/* <List disablePadding sx={{ px: 1 }}>
        <Collapse in sx={{ bgcolor: theme.palette.secondary.dark, borderRadius: 2, p: 1 }}>
          {items.map((list) => (
            <NavList
              key={list.title + list.path}
              data={list}
              depth={1}
              hasChild={!!list.children}
              config={config}
            />
          ))}
        </Collapse>
      </List> */}
    </>
  );
}

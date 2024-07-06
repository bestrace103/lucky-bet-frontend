// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material';
// routes
import { RouterLink } from 'src/routes/components';
// theme
import { bgGradient } from 'src/theme/css';
// assets
import casino from 'src/assets/images/game-icons/dice.png';
import popular from 'src/assets/images/game-icons/dai.png';
import slot from 'src/assets/images/game-icons/seven.png';
import live from 'src/assets/images/game-icons/clock.png';
import tournament from 'src/assets/images/game-icons/goldcup.png';
import trending from 'src/assets/images/game-icons/green-dia.png';
import sports from 'src/assets/images/game-icons/sports.png';
import lottery from 'src/assets/images/game-icons/lottery.png';
import exchange from 'src/assets/images/game-icons/money.png';
//
import Iconify from '../../iconify';
import { NavItemProps, NavConfigProps } from '../types';
import { StyledItem, StyledIcon, StyledDotIcon } from './styles';

// ----------------------------------------------------------------------

type Props = NavItemProps & {
  config: NavConfigProps;
};

export default function NavItem({
  item,
  open,
  depth,
  active,
  config,
  externalLink,
  ...other
}: Props) {
  const { title, path, icon, info, children, disabled, caption, roles } = item;

  const navItemLists = [
    {
      title: 'Casino',
      url: casino,
    },
    {
      title: 'Sports',
      url: sports,
    },
    {
      title: 'Exchange',
      url: exchange,
    },
    {
      title: 'Lottery',
      url: lottery,
    },
    {
      title: 'Trending',
      url: trending,
    },
    {
      title: 'Popular Now',
      url: popular,
    },
    {
      title: 'Slot Games',
      url: slot,
    },
    {
      title: 'Live Games',
      url: live,
    },
    {
      title: 'Tournaments',
      url: tournament,
    },
  ];

  const theme = useTheme();

  const subItem = depth !== 1;

  const renderContent = (
    <StyledItem
      disableGutters
      disabled={disabled}
      active={active}
      depth={depth}
      config={config}
      sx={{
        bgcolor:
          (depth === 1 &&
            !open && {
              ...bgGradient({
                direction: '0deg',
                startColor: `${theme.palette.secondary.light}80`,
                endColor: `${theme.palette.secondary.dark}80`,
              }),
            }) ||
          (depth === 1 && open && theme.palette.primary.light) ||
          theme.palette.secondary.darker,
        borderRadius: 2,
        color: 'white',
        py: 1,
        my: depth === 1 ? 1 : 0.5,
      }}
      {...other}
    >
      <>
        {icon && <StyledIcon size={config.iconSize}>{icon}</StyledIcon>}

        {navItemLists.map(
          (list, index) =>
            list.title === title && (
              <Box
                key={index}
                component="img"
                width={36}
                height={36}
                src={list.url}
                mr={1}
                alt=""
              />
            )
        )}
      </>

      {!(config.hiddenLabel && !subItem) && (
        <ListItemText
          primary={title}
          secondary={
            caption ? (
              <Tooltip title={caption} placement="top-start">
                <span>{caption}</span>
              </Tooltip>
            ) : null
          }
          primaryTypographyProps={{
            noWrap: true,
            typography: 'h6',
            textTransform: 'capitalize',
            fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
          }}
          secondaryTypographyProps={{
            noWrap: true,
            component: 'span',
            typography: 'caption',
            color: 'text.disabled',
          }}
        />
      )}

      {info && (
        <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
          {info}
        </Box>
      )}

      {!!children && (
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1, flexShrink: 0 }}
        />
      )}
    </StyledItem>
  );

  // Hidden item by role
  if (roles && !roles.includes(`${config.currentRole}`)) {
    return null;
  }

  // External link
  if (externalLink)
    return (
      <Link
        href={path}
        target="_blank"
        rel="noopener"
        underline="none"
        color="inherit"
        sx={{
          ...(disabled && {
            cursor: 'default',
          }),
        }}
      >
        {renderContent}
      </Link>
    );

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link
      component={RouterLink}
      href={path}
      underline="none"
      color="inherit"
      sx={{
        ...(disabled && {
          cursor: 'default',
        }),
      }}
    >
      {renderContent}
    </Link>
  );
}

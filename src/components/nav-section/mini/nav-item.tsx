import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
import { NavItemProps, NavConfigProps } from '../types';
import { StyledItem } from './styles';

// ----------------------------------------------------------------------

type Props = NavItemProps & {
  config: NavConfigProps;
};

const NavItem = forwardRef<HTMLDivElement, Props>(
  ({ item, depth, open, active, externalLink, config, ...other }, ref) => {
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

    const { title, path, icon, children, disabled, caption, roles } = item;

    const subItem = depth !== 1;

    const renderContent = (
      <StyledItem
        disableGutters
        ref={ref}
        open={open}
        depth={depth}
        active={active}
        disabled={disabled}
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
          width: 1,
          height: 1,
          p: 1,
          ml: 0,
          my: 0.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: depth === 1 ? 2 : 2,
        }}
        {...other}
      >
        {navItemLists.map(
          (list, index) =>
            list.title === title && (
              <Box key={index} component="img" width={36} height={36} src={list.url} alt="" />
            )
        )}

        {/* {!(config.hiddenLabel && !subItem) && (
          <ListItemText
            sx={{
              width: 1,
              flex: 'unset',
              ...(!subItem && {}),
            }}
            // primary={title}
            primaryTypographyProps={{
              noWrap: true,
              fontSize: 10,
              lineHeight: '16px',
              textAlign: 'center',
              textTransform: 'capitalize',
              fontWeight: active ? 'fontWeightBold' : 'fontWeightSemiBold',
              ...(subItem && {
                textAlign: 'unset',
                fontSize: theme.typography.body2.fontSize,
                lineHeight: theme.typography.body2.lineHeight,
                fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
              }),
            }}
          />
        )} */}

        {/* {caption && (
          <Tooltip title={caption} arrow placement="right">
            <Iconify
              width={16}
              icon="eva:info-outline"
              sx={{
                color: 'text.disabled',
                ...(!subItem && {
                  top: 11,
                  left: 6,
                  position: 'absolute',
                }),
              }}
            />
          </Tooltip>
        )} */}

        {/* {!!children && (
          <Iconify
            width={16}
            icon="eva:arrow-ios-forward-fill"
            sx={{
              top: 11,
              right: 6,
              position: 'absolute',
            }}
          />
        )} */}
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
          sx={{
            width: 1,
            ...(disabled && {
              cursor: 'default',
            }),
          }}
        >
          {renderContent}
        </Link>
      );

    // Default
    return (
      <Link
        component={RouterLink}
        href={path}
        underline="none"
        sx={{
          width: 1,
          ...(disabled && {
            cursor: 'default',
          }),
        }}
      >
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;

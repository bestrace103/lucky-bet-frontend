import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  casino: icon('ic_casino'),
  sports: icon('ic_sports'),
  slot: icon('ic_slot'),
  money: icon('ic_money'),
  poker: icon('ic_poker'),
  diamond: icon('ic_diamond'),
  jackpot: icon('ic_jackpot'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'game',
        items: [
          {
            title: 'Casino',
            path: paths.dashboard.root,
            children: [
              {
                title: 'Popular Now',
                path: paths.dashboard.details('popular'),
              },
              {
                title: 'Slot Games',
                path: paths.dashboard.details('slot'),
              },
              {
                title: 'Live Games',
                path: paths.dashboard.details('live-games'),
              },
              {
                title: 'Tournaments',
                path: paths.dashboard.details('tournaments'),
              },
              {
                title: 'Trending',
                path: paths.dashboard.details('trending'),
              },
            ],
          },
          { title: 'Sports', path: paths.dashboard.two },
          { title: 'Lottery', path: paths.dashboard.three },
          { title: 'Exchange', path: paths.dashboard.three },
        ],
      },
    ],
    []
  );

  return data;
}

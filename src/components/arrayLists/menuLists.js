import { Icons } from '../../assets/icons';

export const MENU_LISTS = [
  {
    icon: Icons.Chart,
    title: 'Dashboard',
    alt: 'dashboard icon',
    path: '/',
  },
  {
    icon: Icons.Graph,
    title: 'Leaderboard',
    alt: 'Leaderboard icon',
    path: '/leaderboard',
  },
  {
    icon: Icons.Cart,
    title: 'Products',
    alt: 'Products icon',
    path: '/products',
  },
  {
    icon: Icons.Bag,
    title: 'Sales',
    alt: 'Salses icon',
    path: '/sales',
  },
  {
    icon: Icons.Message,
    title: 'Messages',
    alt: 'Messages icon',
    path: '/messages',
  },
  {
    icon: Icons.Cog,
    title: 'Settings',
    alt: 'Settings icon',
    path: '/settings',
  },
  {
    icon: Icons.SignOut,
    title: 'Sign Out',
    alt: 'Sign Out icon',
    path: '/signout',
  },
];

export const routes = [
  {
    path: '/',
    element: '',
  },
  {
    path: '/dashboard',
    element: '',
  },
  {
    path: '/leaderboard',
    element: '',
  },
  {
    path: '/products',
    element: '',
  },
  {
    path: '/sales',
    element: '',
  },
  {
    path: '/messages',
    element: '',
  },
  {
    path: '/settings',
    element: '',
  },
];

export const SALES_LISTS = [
  {
    src: Icons.CardSales,
    value: '$1k',
    title: 'Total Sales',
    text: '+8% from yesterday',
  },
  {
    src: Icons.CardOrder,
    value: '300',
    title: 'Total Order',
    text: '+5% from yesterday',
  },
  {
    src: Icons.CardProduct,
    value: '5',
    title: 'Products Sold',
    text: '+1.2% from yesterday',
  },
  {
    src: Icons.CardCustomer,
    value: '8',
    title: 'New Customers',
    text: '+0.5% from yesterday',
  },
];

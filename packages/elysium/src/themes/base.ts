'use client';

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export const mainFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

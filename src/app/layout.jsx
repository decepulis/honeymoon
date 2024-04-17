import { DM_Mono, Playfair_Display, Poppins, Sacramento } from 'next/font/google';

import clsx from 'clsx';

import '@/globals.css';

const body = Poppins({ weight: ['300', '600'], subsets: ['latin'], variable: '--body' });
const script = Sacramento({ weight: '400', subsets: ['latin'], variable: '--script' });
const display = Playfair_Display({ subsets: ['latin'], variable: '--display' });
const mono = DM_Mono({ weight: '400', subsets: ['latin'], variable: '--mono' });

/* @type {import('next').Metadata} */
export const metadata = {
  title: 'Honeymoon.app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          body.variable,
          script.variable,
          display.variable,
          mono.variable,
          'min-h-screen bg-white px-4 font-body antialiased selection:bg-amber-300/30 selection:text-black dark:bg-neutral-900 dark:text-white dark:selection:text-white'
        )}
      >
        {children}
      </body>
    </html>
  );
}

import { DM_Sans, JetBrains_Mono } from 'next/font/google';

import clsx from 'clsx';

import '@/globals.css';

import Nav from '../_components/Nav';

const dm_sans = DM_Sans({ subsets: ['latin'], variable: '--body' });
const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'], variable: '--mono' });

/* @type {import('next').Metadata} */
export const metadata = {
  title: 'Honeymoon.app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          dm_sans.variable,
          jetbrains_mono.variable,
          'min-h-screen px-4 antialiased transition-colors dark:bg-slate-900 dark:text-white'
        )}
      >
        <Nav />
        <main className="mx-auto max-w-prose py-16">{children}</main>
      </body>
    </html>
  );
}

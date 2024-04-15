import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';

import clsx from 'clsx';

import '@/globals.css';

const dm_sans = DM_Sans({ subsets: ['latin'], variable: '--body' });
const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'], variable: '--mono' });

export default function Layout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Honeymoon.app</title>
      </Head>
      <div
        className={clsx(
          dm_sans.variable,
          jetbrains_mono.variable,
          'min-h-screen px-4 antialiased transition-colors dark:bg-slate-900 dark:text-white'
        )}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

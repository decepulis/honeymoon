import { Suspense } from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';

import fs from 'fs';
import path from 'path';

import Code from '@/_components/Code';
import CodeWrapper from '@/_components/CodeWrapper';
import Comments from '@/_components/Comments';
import DarkModeToggle from '@/_components/DarkModeToggle';
import Link from '@/_components/Link';
import UnusedComponent from '@/_components/UnusedComponent';

export default async function Page() {
  const filePath = path.join(process.cwd(), `src/_posts/honeymoon.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <header className="relative mx-auto mb-8 mt-16 max-w-prose text-balance text-center">
        <p
          className="font-script absolute inset-0 -z-10 flex items-center justify-center text-[12rem] text-lime-100 dark:text-lime-950"
          aria-hidden
        >
          love
        </p>
        <h1 className="mb-4">
          <span className="font-script block text-4xl">Our wedding</span>
          <span className="block font-display text-6xl">
            Server Components &amp;
            <br />
            Darius Cepulis
          </span>
        </h1>
        <p className="font-display">April 20, 2024&ensp;|&ensp;React Miami</p>
      </header>
      <main className="mx-auto max-w-prose">
        <MDXRemote
          source={source}
          components={{
            pre: CodeWrapper,
            code: Code,
            h2: (props) => <h2 {...props} className="mb-4 mt-8 font-display text-2xl italic" />,
            p: (props) => <p className="mb-4" {...props} />,
            a: (props) => <Link {...props} />,
            UnusedComponent,
          }}
        />
        <Suspense fallback={<p className="mt-16">Loading comments...</p>}>
          <Comments />
        </Suspense>
      </main>
      <footer className="mx-auto flex max-w-4xl items-center justify-between gap-8 py-8">
        <span className="text-neutral-500 dark:text-neutral-300">© 2024 Honeymoon.app</span>
        <DarkModeToggle />
      </footer>
    </>
  );
}

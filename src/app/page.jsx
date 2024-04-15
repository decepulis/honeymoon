import { Suspense } from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';

import fs from 'fs';
import path from 'path';

import Code from '@/_components/Code';
import CodeWrapper from '@/_components/CodeWrapper';
import Comments from '@/_components/Comments';
import Link from '@/_components/Link';
import Nav from '@/_components/Nav';
import UnusedComponent from '@/_components/UnusedComponent';

export default async function Page() {
  const filePath = path.join(process.cwd(), `src/_posts/honeymoon.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-prose py-16">
        <MDXRemote
          source={source}
          components={{
            pre: CodeWrapper,
            code: Code,
            p: (props) => <p className="mb-4" {...props} />,
            a: (props) => <Link {...props} />,
            UnusedComponent,
          }}
        />
        <Suspense fallback={<p className="mt-16">Loading comments...</p>}>
          <Comments />
        </Suspense>
      </main>
    </>
  );
}

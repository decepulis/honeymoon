import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import fs from 'fs';
import path from 'path';

import Code from '@/_components/Code';
import CodeWrapper from '@/_components/CodeWrapper';
import Comments from '@/_components/Comments';
import DarkModeToggle from '@/_components/DarkModeToggle';
import H1 from '@/_components/H1';
import Link from '@/_components/Link';
import UnusedComponent from '@/_components/UnusedComponent';
import getComments from '@/_utils/getComments';

export async function getServerSideProps() {
  // get mdx
  const filePath = path.join(process.cwd(), `src/_posts/honeymoon.mdx`);
  const text = fs.readFileSync(filePath, 'utf-8');
  const source = await serialize(text);

  // get comments
  const comments = await getComments();

  return { props: { source, comments } };
}

export default function Page({ source, comments }) {
  return (
    <>
      <H1 />
      <main className="mx-auto max-w-prose">
        <MDXRemote
          {...source}
          components={{
            pre: CodeWrapper,
            code: Code,
            h2: (props) => <h2 {...props} className="mb-4 mt-8 font-display text-2xl italic" />,
            p: (props) => <p className="mb-4" {...props} />,
            a: (props) => <Link {...props} />,
            UnusedComponent,
          }}
        />
        <Comments comments={comments} />
      </main>
      <footer className="mx-auto flex max-w-3xl items-center justify-between gap-8 py-8">
        <span className="font-script text-2xl text-neutral-500 dark:text-neutral-300">Live, laugh, love</span>
        <DarkModeToggle />
      </footer>
    </>
  );
}

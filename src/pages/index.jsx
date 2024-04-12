import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import fs from 'fs';
import path from 'path';

import Code from '@/_components/Code';
import CodeWrapper from '@/_components/CodeWrapper';
import Comments from '@/_components/Comments';
import UnusedComponent from '@/_components/UnusedComponent';
import getComments from '@/_utils/getComments';

export async function getServerSideProps() {
  // get mdx
  const filePath = path.join(process.cwd(), `src/_posts/honeymoon.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(source);

  // get comments
  const comments = await getComments();

  return { props: { mdxSource, comments } };
}

export default function Page({ mdxSource, comments }) {
  return (
    <>
      <MDXRemote
        {...mdxSource}
        components={{
          pre: CodeWrapper,
          code: Code,
          p: ({ children }) => <p className="mb-4">{children}</p>,
          UnusedComponent,
        }}
      />
      <Comments comments={comments} />
    </>
  );
}

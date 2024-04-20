import Code from '@/_components/Code';
import Link from '@/_components/Link';

export default function Content() {
  return (
    <>
      <h2 className="mb-4 mt-8 font-display text-2xl">Our story</h2>
      <p className="mb-4">
        I wasn&apos;t looking for something when I met Server Components. I was just looking for a better way to write
        layouts for our <Link href="https://docs.mux.com/core/stream-video-files">docs</Link>. <i>Next</i> thing I knew,
        I was fetching data directly in my components and streaming them to the client. Even on our{' '}
        <Link href="https://www.mux.com/">home page</Link>! I even wrote{' '}
        <Link href="https://www.mux.com/blog/what-are-react-server-components">a blog post</Link> about Server
        Components. It was love at first site.
      </p>
      <p className="mb-4">And now, everywhere I look, I see our beautiful future together:</p>
      <Code
        language="javascript"
        code={
          /* javascript */ `
import { Tweet } from 'react-tweet';

export default function Page() {
  return <Tweet id="1686695126465204225" />;
}
`.trim()
        }
      />
    </>
  );
}

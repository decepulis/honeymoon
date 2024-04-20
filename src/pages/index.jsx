import Comments from '@/_components/Comments';
import Content from '@/_components/Content';
import DarkModeToggle from '@/_components/DarkModeToggle';
import H1 from '@/_components/H1';
import UnusedComponent from '@/_components/UnusedComponent';
import getComments from '@/_utils/getComments';

// import { Suspense } from 'react'

export async function getServerSideProps() {
  const comments = await getComments();
  return { props: { comments } };
}

export default function Page({ comments }) {
  return (
    <>
      <H1 />
      <main className="mx-auto max-w-prose">
        <Content />
        <Comments comments={comments} />
      </main>
      <footer className="mx-auto flex max-w-3xl items-center justify-between gap-8 py-8">
        <span className="font-script text-2xl text-neutral-500 dark:text-neutral-300">Live, laugh, love</span>
        <DarkModeToggle />
      </footer>
    </>
  );
}

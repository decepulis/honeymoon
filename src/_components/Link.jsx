import { Suspense } from 'react';

import NextLink from 'next/link';

import { twMerge } from 'tailwind-merge';

import HoverCard from './HoverCard';
import LinkPreview from './LinkPreview';

export default function Link({ className, ...props }) {
  return (
    <HoverCard
      contents={
        <Suspense fallback={<p>loading...</p>}>
          <LinkPreview href={props.href} />
        </Suspense>
      }
    >
      <NextLink
        className={twMerge(
          'text-emerald-700 underline underline-offset-2 hover:no-underline focus:no-underline dark:text-emerald-200',
          className
        )}
        {...props}
      />
    </HoverCard>
  );
}

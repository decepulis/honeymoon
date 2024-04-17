import { Suspense } from 'react';

import NextLink from 'next/link';

import { twMerge } from 'tailwind-merge';

import HoverCard from '@/_components/HoverCard';
import LinkPreview from '@/_components/LinkPreview';

export default function Link({ className, ...props }) {
  return (
    <HoverCard
      contents={
        <Suspense placeholder={<p>Loading preview...</p>}>
          <LinkPreview href={props.href} />
        </Suspense>
      }
    >
      <NextLink
        className={twMerge(
          'text-emerald-700 underline underline-offset-4 hover:no-underline focus:no-underline dark:text-emerald-200',
          className
        )}
        {...props}
      />
    </HoverCard>
  );
}

import NextLink from 'next/link';

import { twMerge } from 'tailwind-merge';

// import HoverCard from './HoverCard'
// import LinkPreview from './LinkPreview'
// import { Suspense } from 'react'

export default function Link({ className, ...props }) {
  return (
    <NextLink
      className={twMerge(
        'text-emerald-700 underline underline-offset-2 hover:no-underline focus:no-underline dark:text-emerald-200',
        className
      )}
      {...props}
    />
  );
}

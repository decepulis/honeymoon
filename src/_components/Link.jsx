import NextLink from 'next/link';

import { twMerge } from 'tailwind-merge';

export default async function Link({ className, ...props }) {
  return (
    <NextLink
      className={twMerge(
        'text-emerald-700 underline underline-offset-4 hover:no-underline focus:no-underline dark:text-emerald-200',
        className
      )}
      {...props}
    />
  );
}

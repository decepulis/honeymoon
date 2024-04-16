import NextLink from 'next/link';

import { twMerge } from 'tailwind-merge';

import HoverCard from '@/_components/HoverCard';
import LinkPreview from '@/_components/LinkPreview';

export default async function Link({ className, ...props }) {
  return (
    <HoverCard contents={<LinkPreview href={props.href} />}>
      <NextLink
        className={twMerge(
          'text-lime-700 underline underline-offset-4 hover:no-underline focus:no-underline dark:text-lime-200',
          className
        )}
        {...props}
      />
    </HoverCard>
  );
}

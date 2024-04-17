'use client';

import React from 'react';

import * as RadixHoverCard from '@radix-ui/react-hover-card';

export default function HoverCard({ children, contents }) {
  return (
    <RadixHoverCard.Root>
      <RadixHoverCard.Trigger asChild>{children}</RadixHoverCard.Trigger>
      <RadixHoverCard.Portal>
        <RadixHoverCard.Content sideOffset={5}>
          <div className="max-w-80 rounded bg-white p-4 shadow-lg dark:bg-neutral-800">{contents}</div>
        </RadixHoverCard.Content>
      </RadixHoverCard.Portal>
    </RadixHoverCard.Root>
  );
}

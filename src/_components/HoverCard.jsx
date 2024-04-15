'use client';

import React from 'react';

import * as LibHoverCard from '@radix-ui/react-hover-card';

export default function HoverCard({ children, contents }) {
  return (
    <LibHoverCard.Root>
      <LibHoverCard.Trigger asChild>{children}</LibHoverCard.Trigger>
      <LibHoverCard.Portal>
        <LibHoverCard.Content sideOffset={5}>
          <div className="w-80 rounded bg-white p-4 shadow-lg">{contents}</div>
        </LibHoverCard.Content>
      </LibHoverCard.Portal>
    </LibHoverCard.Root>
  );
}

'use client';

import React from 'react';

import * as Collapsible from '@radix-ui/react-collapsible';

export default function Comments({ title, children }) {
  const [open, setOpen] = React.useState(true);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className=" flex w-full items-center justify-between gap-4 border-b py-2">
        {title} {open ? '▲' : '▼'}
      </Collapsible.Trigger>
      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}

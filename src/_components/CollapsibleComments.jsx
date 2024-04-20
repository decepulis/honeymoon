'use client';

import { useState } from 'react';

import * as Collapsible from '@radix-ui/react-collapsible';

export default function Comments({ title = 'Default title' }) {
  const [open, setOpen] = useState(true);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className="grid">
      <Collapsible.Trigger className="-mx-4 my-4 flex items-center gap-4 border-b p-4 hover:bg-neutral-300/20 focus:bg-neutral-300/20">
        <span>{open ? '△' : '▽'}</span>
        <span>{title}</span>
      </Collapsible.Trigger>
      <Collapsible.Content>Add comments here</Collapsible.Content>
    </Collapsible.Root>
  );
}

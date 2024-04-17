'use client';

import { Suspense, useState } from 'react';

import * as RadixCollapsible from '@radix-ui/react-collapsible';

export default function Collapsible({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <RadixCollapsible.Root open={open} onOpenChange={setOpen}>
      <RadixCollapsible.Trigger className="-mx-4 my-4 flex w-full items-center gap-4 border-b p-4 hover:bg-neutral-300/20 focus:bg-neutral-300/20">
        <span>{open ? '△' : '▽'}</span>
        <span>{title} </span>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content>
        <Suspense fallback={<p className="mt-8">loading comments...</p>}>{children}</Suspense>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
}

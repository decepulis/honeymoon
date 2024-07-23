import { Suspense } from 'react';

import ClientComments from './Comments.client';
import ServerComments from './Comments.server';

export default function Comments() {
  return (
    <Suspense fallback={<p>Loading comments...</p>}>
      <ClientComments title={<h2 className="font-display text-2xl">Comments</h2>}>
        <ServerComments />
      </ClientComments>
    </Suspense>
  );
}

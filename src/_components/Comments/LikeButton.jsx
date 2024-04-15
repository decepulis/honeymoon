'use client';

import { useState } from 'react';

import likeComment from '@/_utils/likeComment';

export default function LikeButton({ id }) {
  const [didLike, setDidLike] = useState(false);

  return (
    <form action={likeComment} onSubmit={() => setDidLike(true)}>
      <input type="hidden" name="id" value={id} />
      <button disabled={didLike} aria-label="Like comment" type="submit">
        {didLike ? '❤️' : '🤍'}
      </button>
    </form>
  );
}

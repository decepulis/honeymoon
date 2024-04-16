'use client';

import { useState } from 'react';

import likeComment from '@/_utils/likeComment';

export default function LikeButton({ id }) {
  const [didLike, setDidLike] = useState(false);

  return (
    <form action={likeComment} onSubmit={() => setDidLike(true)}>
      <input type="hidden" name="id" value={id} />
      <button
        disabled={didLike}
        onClick={() => setDidLike(true)}
        aria-label="Like comment"
        type="submit"
        className="h-12 w-12 rounded-sm hover:bg-slate-300/20 focus:bg-slate-300/20"
      >
        {didLike ? '❤️' : '🤍'}
      </button>
    </form>
  );
}
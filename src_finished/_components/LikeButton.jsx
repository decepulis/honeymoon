'use client';

import { useState } from 'react';

import likeComment from '@/_utils/likeComment';

export default function LikeButton({ id }) {
  const [didLike, setDidLike] = useState(false);

  const like = () => {
    setDidLike(true);
  };

  return (
    <form action={likeComment} onSubmit={like}>
      <input type="hidden" name="id" value={id} />
      <button
        disabled={didLike}
        aria-label="Like comment"
        type="submit"
        className="h-12 w-12 rounded-sm hover:bg-emerald-200/20 focus:bg-emerald-200/20"
      >
        {didLike ? '❤️' : '🤍'}
      </button>
    </form>
  );
}

'use client';

import { useState } from 'react';

import likeComment from '@/_utils/likeComment';

export default function LikeButton({ id }) {
  const [markAsLiked, setMarkAsLiked] = useState(false);

  const like = () => {
    // update UI
    setMarkAsLiked(true);
  };

  return (
    <form onSubmit={like} action={likeComment}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        disabled={markAsLiked}
        aria-label="Like comment"
        className="h-12 w-12 rounded-sm hover:bg-emerald-200/20 focus:bg-emerald-200/20"
      >
        {markAsLiked ? '❤️' : '🤍'}
      </button>
    </form>
  );
}

'use client';

import { useState } from 'react';

// import likeComment from '@/_utils/likeComment'

export default function LikeButton({ id }) {
  const [markAsLiked, setMarkAsLiked] = useState(false);

  const like = (e) => {
    e.preventDefault();
    // update UI
    setMarkAsLiked(true);

    // Talk to server
    // at this point, in the pages directory,
    // I'd probably set up an API route in /pages/api/like/[id].js
    // and then POST to that API from this function
    // and track some state 'pending' | 'success' | 'error'.
    //
    // If you've ever posted from a client component,
    // you know what I'm talking about.
    //
    // For demo purposes, we'll skip that.
    // just... use your imagination.
  };

  return (
    <form onSubmit={like}>
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

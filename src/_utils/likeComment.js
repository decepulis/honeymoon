'use server';

import { revalidateTag } from 'next/cache';

export default async function likeComment(formData) {
  const id = formData.get('id');
  const response = await fetch(`${process.env.API_ROUTE}/comments/like/${id}`, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.SECRET_KEY_THAT_SHOULD_STAY_ON_SERVER,
    },
  });
  if (response.ok) {
    revalidateTag('comments');
  } else {
    console.error(`Failed to like comment: ${response.status} ${response.statusText}`);
  }
}

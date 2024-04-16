import slowThingsDown from './slowThingsDown';

export default async function getComments() {
  const response = await fetch(`${process.env.API_ROUTE}/comments`, {
    headers: {
      'x-api-key': process.env.SECRET_KEY_THAT_SHOULD_STAY_ON_SERVER,
    },
    next: {
      // whenever we call `revalidateTag('comments')`,
      // next.js will clear the cache for this route
      tags: ['comments'],
    },
  });
  // for demonstration purposes, we slow this API call down
  await slowThingsDown();
  return await response.json();
}

import getComments from '@/_utils/getComments';

import ClientComments from './Comments.client';
import LikeButton from './LikeButton';

export default async function Comments() {
  const comments = await getComments();

  return (
    <section className="mt-16">
      <ClientComments title={<h2 className="text-xl font-bold">Comments</h2>}>
        <ul className="mb-4">
          {comments.map((comment) => (
            <li key={comment.id} className="flex items-center gap-8 border-b py-4">
              <LikeButton id={comment.id} />
              <div>
                <p className="font-bold">{comment.name}</p>
                <p className="">{comment.text}</p>
                <p>
                  {comment.likes} {comment.likes === 1 ? 'like' : 'likes'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ClientComments>
    </section>
  );
}

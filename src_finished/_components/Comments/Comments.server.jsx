import 'server-only';

import getComments from '@/_utils/getComments';
import LikeButton from '@/components/LikeButton';

import ClientComments from './Comments.client';

export default async function Comments() {
  const comments = await getComments();

  return (
    <section className="-mx-4 mt-16">
      <ClientComments title={<h2 className="font-display text-2xl italic">Comments</h2>}>
        <ul className="mb-4">
          {comments.map((comment) => (
            <li key={comment.id} className="flex items-center gap-4 border-b py-4">
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

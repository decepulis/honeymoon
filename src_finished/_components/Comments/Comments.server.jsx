import LikeButton from '@/_components/LikeButton';
import getComments from '@/_utils/getComments';

import CommentsClient from './Comments.client';

export default async function Comments() {
  const comments = await getComments();
  return (
    <section>
      <CommentsClient title={<h2 className="font-display text-2xl">Comments</h2>}>
        <ul className="-mx-4 mb-4">
          {comments.map((comment) => (
            <li key={comment.id} className="mb-4 flex items-center gap-4 border-b pb-4">
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
      </CommentsClient>
    </section>
  );
}

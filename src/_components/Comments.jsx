export default function Comments({ comments }) {
  return (
    <section className="mt-16">
      <h2 className="mb-4 text-xl font-bold">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="border-y py-4">
            <p className="font-bold">{comment.name}</p>
            <p className="">{comment.text}</p>
            <div>
              {comment.likes} {comment.likes === 1 ? 'Like' : 'Likes'}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

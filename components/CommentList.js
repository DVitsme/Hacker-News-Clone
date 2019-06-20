import Comment from '../components/Comment';

export default ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </>
);

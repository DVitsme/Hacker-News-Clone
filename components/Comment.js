const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment-user">{comment.user}</div>
    <div className="comment-content">
      <p>{comment.content}</p>
    </div>
  </div>
);

export default Comment;

import Link from 'next/link';

export default ({ data }) => (
  <div className="post-list">
    {data.map(post => (
      <div className="post" key={post.id}>
        <h2 className="post-title">
          <a href={post.url}>{post.title}</a>
        </h2>
        <div className="post-details">
          <span className="">{post.points || 0} points</span>
          <Link href={`/post?id=${post.id}`}>
            <a>{post.comments_count || 0} comments</a>
          </Link>
        </div>
      </div>
    ))}
    <style jsx>{`
      .post-list {
        padding: 0 1em;
      }
      .post {
        padding: 1em 0;
      }
      .post-title {
        font-size: 1em;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
      }
      .post-title a {
        color: #333;
        text-decoration: none;
      }
      .post-title a:hover,
      .post-details a:hover {
        text-decoration: underline;
      }
      .post-details {
        font-size: 0.8rem;
        font-weight: bold;
      }
      .post-details span {
        margin-right: 1em;
      }
      .post-details a {
        color: #6600ff;
        text-decoration: none;
      }
    `}</style>
  </div>
);

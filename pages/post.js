import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

class Post extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let post;

    try {
      const postId = query.id;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${postId}`
      );
      post = await response.json();
    } catch (error) {
      console.log(error);
      post = null;
    }
    return { post };
  }
  render() {
    const { post } = this.props;

    if (!post) {
      <Error statusCode={503} />;
    }
    return (
      <Layout title={post.title} backButton={true}>
        <main>
          <h1 className="post-title">
            <a href={post.url}>{post.title}</a>
          </h1>
          <div className="post-details">
            <strong>{post.points} points</strong>
            <strong>{post.comments_count} comments</strong>
            <strong>{post.time_ago}</strong>
          </div>

          {/* Check if post has comments */}
          {post.comments.length > 0 ? (
            <CommentList comments={post.comments} />
          ) : (
            <div>No comments for this Post</div>
          )}
        </main>

        <style jsx>
          {`
            main {
              padding: 1em;
            }
            .post-title {
              font-size: 1.2rem;
              margin: 0;
              font-weight: 300;
              padding-bottom: 0.5em;
            }
            .post-title a {
              color: #333;
              text-decoration: none;
            }
            .post-title a:hover {
              text-decotartion: underline;
            }
            .post-details {
              font-size: 0.8rem;
              padding-bottom: 1em;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 1em;
            }
            .post-details strong {
              margin-right: 1em;
            }
            .post-details a {
              color: #f60;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Post;

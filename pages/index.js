import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';

import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

export default class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let data;
    let page;
    console.log(query);
    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      data = await response.json();
    } catch (err) {
      console.log(err);
      data = [];
    }

    return { page, data };
  }
  render() {
    const { data, page } = this.props;

    if (data.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout
        title="Hacker News"
        description="A hacker news clone made with next js and coffee"
      >
        {/* Handle rendering all post you see */}
        <StoryList data={data} />
        <footer>
          {/* If first page dont display Back */}
          {page === 1 ? null : (
            <Link href={`/?page=${page - 1}`}>
              <a className="backOnePage">Back</a>
            </Link>
          )}
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
          .backOnePage {
            margin-right: 1em;
          }
        `}</style>
      </Layout>
    );
  }
}

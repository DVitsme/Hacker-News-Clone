import fetch from 'isomorphic-fetch';
import Error from 'next/error';

import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

export default class Index extends React.Component {
  static async getInitialProps() {
    let data;
    try {
      const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
      data = await res.json();
    } catch (err) {
      console.log(err);
      data = [];
    }

    return { data };
  }
  render() {
    const { data } = this.props;

    if (data.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout
        title="Hacker News"
        description="A hacker news clone made with next js and coffee"
      >
        <StoryList data={data} />
      </Layout>
    );
  }
}

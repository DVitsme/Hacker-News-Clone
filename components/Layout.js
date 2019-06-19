import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container">
        <nav>
          <Link href="/">
            <a>
              <span className="main-title">Hacker News - by DVitsme</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>
      <style jsx>{`
        .container {
          max-width: 80vw;
          margin: 0 auto;
          background: #f6f6ef;
        }
        nav {
          background: #f60;
          padding: 1em;
        }
        nav > * {
          display: inline-block;
          color: black;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: white;
          font-family: Verdana, Geneva, sans-serif;
        }
      `}</style>
    </>
  );
}

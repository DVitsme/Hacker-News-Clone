import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

export default function Layout({ children, title, description, backButton }) {
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
          {backButton && (
            <span onClick={() => Router.back()} className="back-button">
              &#x2b05; Go Back
            </span>
          )}
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
          display: flex;
          justify-content: space-between;
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
        nav .back-button {
          font-size: 0.9rem;
          font-weight: 400;
          cursor: pointer;
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

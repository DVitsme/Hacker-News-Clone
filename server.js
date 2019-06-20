const next = require('next');
const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // Prase the url to get path name
      const parsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;

      // if a serviceworker is requested, serve it as a static file
      if (pathname === '/service-worker.js') {
        const filePath = path.join(__dirname, '.next', pathname);

        // give the server more info on how to serve the serviceworker so we dont get a 404 error
        app.serveStatic(req, res, filePath);
      } else {
        // let next handle it
        handle(req, res, parsedUrl);
      }
    })
    .listen(port, () => {
      console.log(`Listening on PORT ${port}`);
    });
});

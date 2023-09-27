import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

(async () => {
  async function requestListener(request, response) {
    response.setHeader("Content-Type", "text/html");
    try {
      const contents = await fs.readFile("index.html", "utf8");

      const urlSegments = request.url.split("/");

      switch (urlSegments[1]) {
        case "":
        case "index.html":
          response.writeHead(200);
          return response.end(contents);
        case "random":
          if (urlSegments.length >= 3) {
            const nb = parseInt(urlSegments[2], 10);
            if (!isNaN(nb)) {
              response.writeHead(200);

              // Generate and send random numbers
              response.write("<html>");
              for (let cpt = 0; cpt < nb; cpt++) {
                response.write(`<p>${Math.floor(100 * Math.random())}</p>`);
              }
              response.write("</html>");
              return response.end();
            }
          }

          // If :nb is missing or invalid, send a 404 response
          response.writeHead(404);
          return response.end(`<html><p>404: NOT FOUND</p></html>`);
        default:
          response.writeHead(404);
          return response.end(`<html><p>404: NOT FOUND</p></html>`);
      }
    } catch (error) {
      console.error(error);
      response.writeHead(500);
      return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
    }
  }

  const server = http.createServer(requestListener);
  server.listen(port, host, () => {
    console.log("NODE_ENV =", process.env.NODE_ENV);
    console.log(`Server is running on http://${host}:${port}`);
  });
})();

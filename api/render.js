import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
  async fetch(request) {
    try {
      if (request.method != "GET") {
        return new Response(null, { status: 405 });
      }

      const url = new URL(request.url, `http://${request.headers.host}`);
      const url_arr = url.pathname.split("/").slice(1);

      let page = url_arr[0];

      if (page == "" || page == "index") {
        page = "index";
      }

      const layoutPath = path.join(dirname, "..", "templates", "layout.html");
      const pagePath = path.join(dirname, "..", "pages", `${page}.html`);

      const [layout, pageContent] = await Promise.all([
        fs.readFile(layoutPath, "utf-8"),
        fs.readFile(pagePath, "utf-8"),
      ]);

      const html = layout
        .replace("{content}", pageContent)
        .replace("{pathname}", url.pathname)
        .replace("{bytes}", pageContent.length);

      return new Response(html, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    } catch (err) {
      return new Response(err.message, { status: 500 });
    }
  },
};

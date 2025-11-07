import path from "path";
import fs from "fs/promises";
import { fileURLToPath, pathToFileURL } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const pages_dir = path.join(dirname, "../pages");
const file_encoding = "utf-8";

async function file_exists(file_path) {
  try {
    await fs.access(file_path);
    return true;
  } catch {
    return false;
  }
}

function not_found_response(page_name) {
  return new Response(`<h1>404 Not Found</h1><p>${page_name}</p>`, {
    status: 404,
    headers: { "Content-Type": "text/html" },
  });
}

function html_response(content) {
  return new Response(content, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const page_name = url.searchParams.get("page") || "/";

    if (page_name.match(/(.*)\.(.*)/)) {
      const page_path = path.join(pages_dir, page_name);

      if (!(await file_exists(page_path))) {
        return not_found_response(page_name);
      }

      const page_content = await fs.readFile(page_path, file_encoding);
      return html_response(page_content);
    }

    const page_html_path = path.join(pages_dir, page_name, "page.html");
    const page_js_path = path.join(pages_dir, page_name, "page.js");

    if (!(await file_exists(page_html_path))) {
      return not_found_response(page_name);
    }

    let page_html = await fs.readFile(page_html_path, file_encoding);

    if (await file_exists(page_js_path)) {
      const page_module = await import(pathToFileURL(page_js_path));
      const page_entries = await page_module.default();

      for (const [page_entry_key, page_entry_value] of Object.entries(
        page_entries
      )) {
        const pattern = new RegExp(`{${page_entry_key}}`, "g");
        page_html = page_html.replace(pattern, page_entry_value);
      }
    }

    const layout_path = path.join(pages_dir, "layout.html");
    const layout_html = await fs.readFile(layout_path, file_encoding);
    const body = layout_html.replace("{content}", page_html);

    return html_response(body);
  },
};

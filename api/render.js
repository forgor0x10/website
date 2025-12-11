import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const pagesDir = path.join(dirname, "../pages");
const fileEncoding = "utf-8";

async function getLastTrack() {
  let last_track;

  try {
    const responseParams = {
      method: "user.getrecenttracks",
      api_key: process.env.LASTFM_API_KEY,
      format: "json",
      limit: 1,
      user: "forgorOx1O",
    };

    const responseQuery = new URLSearchParams(responseParams).toString();
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?${responseQuery}`
    );

    if (!response.ok) {
      return { last_track };
    }

    const json = await response.json();
    const track = json?.recenttracks?.track?.[0];

    const artist = track?.artist?.["#text"];
    const title = track?.name;

    if (!artist || !title) {
      return { last_track };
    }

    last_track = `${artist} - ${title}`;
  } catch (err) {
    last_track = "Error! Reloading should help";
  }

  return last_track;
}

export default {
  async fetch() {
    const filePath = path.join(pagesDir, "index.html");

    try {
      let content = await fs.readFile(filePath, fileEncoding);
      content = content.replace("{last_track}", await getLastTrack());
      return new Response(content, {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    } catch {
      return new Response("<h1>404 Not Found</h1>", {
        status: 404,
        headers: { "Content-Type": "text/html" },
      });
    }
  },
};

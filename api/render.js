import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const pagesDir = path.join(dirname, "../pages");
const fileEncoding = "utf-8";

async function getLastTrack() {
  let lastTrack;

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
      return lastTrack;
    }

    const json = await response.json();
    const track = json?.recenttracks?.track?.[0];

    const artist = track?.artist?.["#text"];
    const title = track?.name;

    if (!artist || !title) {
      return lastTrack;
    }

    lastTrack = `${artist} - ${title}`;
  } catch (err) {
    lastTrack = "Error! Reloading should help";
  }

  return lastTrack;
}

export default {
  async fetch() {
    const filePath = path.join(pagesDir, "index.html");

    try {
      let content = await fs.readFile(filePath, fileEncoding);
      content = content.replace("{lastTrack}", await getLastTrack());
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

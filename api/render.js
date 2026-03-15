import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const pagesDir = path.join(dirname, "../pages");
const fileEncoding = "utf-8";

async function getLastTracks() {
  let lastTracks;

  try {
    const responseParams = {
      method: "user.getrecenttracks",
      api_key: process.env.LASTFM_API_KEY,
      format: "json",
      limit: 5,
      user: "forgorOx1O",
    };

    const responseQuery = new URLSearchParams(responseParams).toString();
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?${responseQuery}`,
    );

    if (!response.ok) {
      return lastTracks;
    }

    const json = await response.json();
    const tracks = json?.recenttracks?.track;

    lastTracks = tracks
      .map((track) => {
        const artist = track?.artist?.["#text"];
        const title = track?.name;
        return `${artist} - ${title}`.toLowerCase();
      })
      .join("<br />");
  } catch (err) {
    lastTracks = "Error. Reloading should help";
  }

  return lastTracks;
}

export default {
  async fetch() {
    const filePath = path.join(pagesDir, "index.html");

    try {
      let content = await fs.readFile(filePath, fileEncoding);
      content = content.replaceAll("{lastTracks}", await getLastTracks());
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

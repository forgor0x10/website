import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

async function getLastTracks() {
  let lastTracks;

  try {
    const responseParams = {
      method: "user.getrecenttracks",
      api_key: process.env.LASTFM_API_KEY,
      format: "json",
      limit: 64,
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
    let track_i = 0;

    lastTracks = tracks
      .map((track) => {
        const title = track?.name.toLowerCase();
        const number = track_i.toString().padStart(4, " ");
        track_i++;
        return `${number} ${title}`;
      })
      .join("<br />");
  } catch (err) {
    lastTracks = "Error! Reloading should help";
  }

  return lastTracks;
}

export default {
  async fetch() {
    try {
      let content = await fs.readFile(
        path.join(dirname, "../pages/index.html"),
        "utf-8",
      );
      content = content.replaceAll("{lastTracks}", await getLastTracks());
      return new Response(content, {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    } catch {
      return new Response(
        "<h1>Error!</h1><p>An unexpected error occured rendering the page</p>",
        {
          status: 500,
          headers: { "Content-Type": "text/html" },
        },
      );
    }
  },
};

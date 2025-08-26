import { readFile } from "fs/promises";

export default async function handler(req, res) {
  const { pageName } = req.query;

  let data = await readFile(
    `public/templates/${pageName || "400"}.html`,
    "utf8"
  );

  if (pageName === "index") {
    const lastfmParams = {
      method: "user.getrecenttracks",
      user: "forgorOx1O",
      api_key: process.env.LASTFM_API_KEY,
      format: "json",
      limit: "1",
    };

    const lastfmQueryParams = new URLSearchParams(lastfmParams).toString();

    try {
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?${lastfmQueryParams}`
      );
      const json = await response.json();

      const track = json.recenttracks?.track?.[0];
      const lastfmTrack = track
        ? `${track.artist["#text"]}<br />${track.name}`.toLowerCase()
        : "Unknown";

      data = data.replace("{{lastfm-track}}", lastfmTrack);
    } catch (err) {
      data = data.replace("{{lastfm-track}}", `error: ${err.message}`);
    }
  }

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(data);
}

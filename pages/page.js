export default async function page() {
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

  return { last_track };
}

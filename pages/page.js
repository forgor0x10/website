export default async function page() {
  const response_params = {
    method: "user.getrecenttracks",
    api_key: process.env.LASTFM_API_KEY,
    format: "json",
    limit: 1,
    user: "forgorOx1O",
  };

  const response_search_params = new URLSearchParams(response_params);
  const response_query = response_search_params.toString();

  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?${response_query}`
  );

  const response_json = await response.json();

  const last_track = response_json.recenttracks.track[0];

  const last_track_artist = last_track.artist["#text"];
  const last_track_title = last_track.name;
  const last_track_image = last_track.image.at(-1)["#text"];

  return {
    last_track_artist,
    last_track_title,
    last_track_image,
  };
}

export default function handler(req, res) {
  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: "forgorOx1O",
    api_key: process.env.LASTFM_API_KEY,
    limit: 1,
    format: "json",
  });

  fetch(`http://ws.audioscrobbler.com/2.0/?${params.toString()}`)
    .then((apiRes) => {
      if (!apiRes.ok) {
        throw new Error("Network response trying to fetch resource");
      }

      return apiRes.json();
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Failed to fetch data", details: err.message });
    });
}

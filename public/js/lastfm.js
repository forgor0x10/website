document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/lastfm")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response trying to fetch resource");
      }

      return res.json();
    })
    .then((data) => {
      console.log(data);

      const trackInfo = {
        name: data.recenttracks.track[0].name,
        artist: data.recenttracks.track[0].artist["#text"],
        image: data.recenttracks.track[0].image[3]["#text"],
        url: data.recenttracks.track[0].url,
      };

      const songContentElement = document.getElementById("song-content-div");
      const songNameElement = document.getElementById("song-name-a");
      const songImageElement = document.getElementById("song-image-img");
      const songLoadingElement = document.getElementById("song-loading-p");

      songContentElement.classList.remove("hidden");

      songLoadingElement.classList.add("hidden");

      songNameElement.innerHTML = `<i class="nf nf-fa-lastfm"></i> ${trackInfo.artist} - ${trackInfo.name}`;
      songNameElement.href = trackInfo.url;

      songImageElement.src = trackInfo.image;
    })
    .catch((err) => {
      console.error("Error fetching /api/lastfm:", err);
    });
});

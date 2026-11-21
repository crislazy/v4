document.getElementById("lastfm-song").innerHTML = "Loading..."

async function updateLastFM() {
    try {
        const res = await fetch(
            "https://lastfm-last-played.biancarosa.com.br/thatonecris/latest-song",
        );

        if (!res.ok) throw new Error("Request failed");

        const data = await res.json();
        const track = data.track;

        const playing = track["@attr"]?.nowplaying === "true";

        document.getElementById("lastfm-prefix").textContent =
            `${playing ? "Listening to" : "Last listened to"}:`;

        document.getElementById("lastfm-song").textContent =
            `${track.name} by ${track.artist["#text"]}`;
    } catch {
        document.getElementById("lastfm-prefix").textContent = "Last.fm:";
        document.getElementById("lastfm-song").textContent = "unavailable";
    }
}

updateLastFM();

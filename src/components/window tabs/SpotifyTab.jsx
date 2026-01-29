import React from "react";
import MacWindow from "../../window/MacWindow";

const SpotifyTab = () => {
  return (
    <MacWindow windowId={"spotify"}>
      <div className="w-full h-full flex items-center justify-center bg-neutral-900 px-2">
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWX76Z8XDsZzF?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            className="bg-black"
          />
        </div>
      </div>
    </MacWindow>
  );
};

export default SpotifyTab;


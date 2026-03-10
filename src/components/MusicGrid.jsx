import { useState } from "react";
import releases from "../data/releases";
import ReleaseModal from "./ReleaseModal";

export default function MusicGrid() {
  const [selectedRelease, setSelectedRelease] = useState(null);

  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-7 bg-black/20 p-7">
        {releases.map((release, index) => (
          <div
            key={index}
            className="w-60 cursor-pointer"
            onClick={() => setSelectedRelease(release)}
          >
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={release.artwork}
                alt={release.title}
                className="w-full"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/40">
                <div className="scale-75 transform opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-sm text-gray-200">
              {release.title}
            </p>
          </div>
        ))}
      </div>
      {selectedRelease && (
        <ReleaseModal
          release={selectedRelease}
          onClose={() => setSelectedRelease(null)}
        />
      )}
    </>
  );
}

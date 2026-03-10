import releases from "../data/releases";

export default function MusicGrid() {
  return (
    <div className="flex-rows m-7 flex max-w-7xl flex-wrap justify-center gap-7 bg-black/20">
      {releases.map((release, index) => (
        <div key={index} className="w-60 cursor-pointer">
          <img
            src={release.artwork}
            alt={release.title}
            className="rounded-lg shadow-lg drop-shadow-sm drop-shadow-white transition hover:scale-105"
          />
          <p className="mt-2 text-center text-gray-200">{release.title}</p>
        </div>
      ))}
    </div>
  );
}

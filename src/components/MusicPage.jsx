import ScrollToTopButton from "../utilities/ScrollUpButton";
import MusicGrid from "./MusicGrid";

export default function MusicPage() {
  return (
    <>
      <div className="mt-30" id="music">
        <h1 className="my-10 p-2 text-center text-2xl text-gray-200 underline decoration-fuchsia-800 decoration-4">
          Music
        </h1>
        <h2 className="my-10 text-center text-lg underline decoration-yellow-200 decoration-2">
          Orchestral
        </h2>

        <div className="mb-14 flex justify-center drop-shadow-md drop-shadow-white">
          <iframe
            width="560"
            height="450"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2004736224&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center bg-[url(/src/assets/pexels-adrien-olichon-1257089-2387793.jpg)] bg-cover bg-fixed bg-repeat-round">
          <h1 className="m-7 text-center text-lg underline decoration-emerald-200 decoration-2">
            Electronic
          </h1>
          <MusicGrid />
        </div>
      </div>
      <div id="videos">
        <div className="my-10 flex justify-center">
          <h1 className="text-lg underline decoration-2">Videos</h1>
        </div>
        <div className="mx-7 mb-10 flex flex-col">
          <div className="flex justify-center">
            <iframe
              width="560"
              height="352"
              src="https://www.youtube.com/embed/IYzHNqjhmeo?si=-T6pkhd3JLYt8wkg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

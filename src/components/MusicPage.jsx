import ScrollToTopButton from "../utilities/ScrollUpButton";
import MusicGrid from "./MusicGrid";

export default function MusicPage() {
  return (
    <>
      <div className="mt-30" id="music">
        <h1 className="my-10 p-2 text-center text-2xl text-gray-200 underline decoration-fuchsia-800 decoration-4">
          Music
        </h1>

        {/* ELECTRONIC RELEASES */}
        <div className="flex flex-col items-center bg-[url(/src/assets/pexels-adrien-olichon-1257089-2387793.jpg)] bg-cover bg-fixed bg-repeat-round py-10">
          <h2 className="mb-8 text-center text-lg underline decoration-emerald-200 decoration-2">
            Electronic Releases
          </h2>

          <MusicGrid />
        </div>

        {/* ORCHESTRAL */}
        <div className="my-16">
          <h2 className="mb-8 text-center text-lg underline decoration-yellow-200 decoration-2">
            Orchestral
          </h2>

          <div className="mx-auto max-w-3xl px-4">
            <div className="flex justify-center drop-shadow-md drop-shadow-white">
              <iframe
                className="w-full"
                height="450"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2004736224&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <div id="videos" className="my-16">
        <h2 className="mb-8 text-center text-lg underline decoration-red-300 decoration-2">
          Video
        </h2>

        <div className="mx-auto max-w-3xl px-4">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/IYzHNqjhmeo?si=-T6pkhd3JLYt8wkg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </>
  );
}

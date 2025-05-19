import ScrollToTopButton from "../utilities/ScrollUpButton";

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

          <div className="flex-rows m-7 flex max-w-7xl flex-wrap justify-center gap-7 bg-black/20">
            <div className="drop-shadow-lg drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=680071508/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://liftedicons.bandcamp.com/album/state-of-flux">
                  State of Flux by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=182900996/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://stateofjoy.co.uk/album/seeds">
                  Seeds by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2091450266/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://guidoproductions.bandcamp.com/album/blockwork">
                  Blockwork by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=846800963/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://stateofjoy.co.uk/track/end-point">
                  End Point by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1061028639/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://stateofjoy.co.uk/album/unknown">
                  Unknown by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2640700156/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://guidoproductions.bandcamp.com/album/onward">
                  Onward by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1337960218/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://guidoproductions.bandcamp.com/album/moment-feat-emma-lou-ep">
                  Moment (feat. Emma-Lou) - EP by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3489856730/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://guidoproductions.bandcamp.com/album/flow-africa-ep">
                  Flow / Africa EP by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3791820131/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://guidoproductions.bandcamp.com/album/vessel-dogs-micro-x-ep">
                  Vessel Dogs / Micro X EP by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1701962006/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://tectonicrecordings.bandcamp.com/album/moods-of-future-joy">
                  Moods Of Future Joy by Guido
                </a>
              </iframe>
            </div>
            <div className="drop-shadow-sm drop-shadow-white">
              <iframe
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=883530109/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://guidoproductions.bandcamp.com/album/anidea">
                  Anidea by Guido
                </a>
              </iframe>
            </div>
          </div>
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

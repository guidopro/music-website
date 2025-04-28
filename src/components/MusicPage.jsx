export default function MusicPage() {
  return (
    <>
      <div className="mt-30" id="music">
        <h1 className="mt-10 mb-7 text-center text-lg underline">Music</h1>
        <h2 className="mt-10 mb-7 text-center text-lg underline">Orchestral</h2>
        <div className="mx-7 grid grid-cols-1">
          <div className="flex justify-center">
            <iframe
              width="560"
              height="450"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2004736224&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>

        <h1 className="mt-10 mb-7 text-center text-lg underline">Electronic</h1>

        <div className="mx-7 grid grid-cols-1 gap-7 gap-y-14 sm:grid-cols-2 sm:gap-3.5 sm:gap-y-14">
          <div className="flex justify-center">
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
          <div className="flex justify-center">
            <iframe
              style={{ border: 0, width: 350, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=182900996/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://stateofjoy.co.uk/album/seeds">Seeds by Guido</a>
            </iframe>
            {/* <iframe
              style={{ border: 0, width: 400, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=182900996/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://guidoproductions.bandcamp.com/album/seeds">
                Seeds by Guido
              </a>
            </iframe> */}
            {/* <iframe
              width="100%"
              height="352"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1079652901&color=%232f2720&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe> */}
          </div>
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
          <div className="flex justify-center">
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
      <div id="videos">
        <div className="mt-10 mb-7 flex justify-center">
          <h1 className="text-lg underline">Videos</h1>
        </div>
        <div className="mx-7 mb-52 grid grid-cols-1">
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
    </>
  );
}

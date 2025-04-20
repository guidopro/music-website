import { Link } from "react-router";

export default function Welcome() {
  return (
    <>
      {/* <div className="relative min-h-screen bg-[url(/src/assets/cover_bg_2.jpg)] bg-cover bg-[center_top_-200px] bg-no-repeat md:bg-center">
        <div className="absolute inset-0 z-0 border-2 bg-black/50"></div>
        <div className="relative z-10 p-10">
          <div className="relative mt-85 md:mt-150">
            <p className="font-extralight text-gray-200">
              Music Producer and Composer
            </p>
            <hr />
            <p className="font-sans text-white">Hi I'm Guy.</p>
            <br />
            <p className="font-sans text-base/7 text-gray-50">
              I'm a composer and music producer based in Manchester, UK, with a
              deep passion for travel, languages, and food. I've released
              electronic music under the name <i>Guido</i>, and I'm now focused
              on writing for orchestral instruments.
            </p>
          </div>
        </div>
      </div> */}
      <div className="relative">
        <img
          src="src/assets/cover_bg_2_cropped.jpg"
          alt="welcome-pic"
          className="size-full object-contain lg:h-lvh"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="flex justify-center">
          <div className="absolute bottom-0 z-10 p-10">
            <div className="flex max-w-4xl flex-col">
              <p className="font-extralight text-gray-200">
                Music Producer and Composer
              </p>
              <hr />
              <p className="font-sans text-white">Hi I'm Guy.</p>
              <br />
              <p className="font-sans text-base/7 text-gray-50">
                I'm a composer and music producer based in Manchester, UK, with
                a deep passion for travel, languages, and food. I've released
                electronic music under the name <i>Guido</i>, and I'm now
                focused on writing for orchestral instruments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 mb-40 flex flex-col bg-black">
        <h2 className="m-2 p-2 text-center text-2xl text-gray-200">
          About me...
        </h2>
        <div className="flex justify-center">
          <p className="m-2 max-w-xl p-2 text-center text-sm text-white">
            Music has always been a deeply cathartic process for me, serving as
            a way to express emotions and ideas that words alone cannot capture.
            As an artist known as Guido, I’ve spent years navigating the
            electronic music scene, primarily as a producer and DJ.
            <br />
            <br />
            My journey began in the vibrant dubstep scene of Bristol during the
            late 2000s and early 2010s, a time and place that profoundly shaped
            my sound. My inspiration is rooted in the evocative power of film
            and video game music. I’m particularly drawn to compositions that
            create strong emotional landscapes, with composers like Vangelis,
            Nobuo Uematsu, Joe Hisaishi, and Hans Zimmer being major influences.
            Their ability to craft immersive, emotionally charged soundscapes
            has always resonated with me and heavily influences my work.
          </p>
        </div>

        <button className="mt-10 w-24 self-center rounded-sm bg-cyan-700 shadow-lg shadow-cyan-500/50 transition ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:cursor-pointer">
          <Link to="music">Listen</Link>
        </button>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full bg-gray-950 p-5 inset-shadow-2xs inset-shadow-blue-500/20">
          <div className="flex flex-row items-center">
            <div className="mx-auto opacity-70">
              © Guy Middleton 2025. All rights reserved.
            </div>

            <span className="inline-flex items-center space-x-2">
              <div className="opacity-70">
                <a
                  href="https://guidoproductions.bandcamp.com/"
                  target="_blank"
                >
                  <img
                    src="/src/assets/bandcamp.png"
                    alt="bandcamp"
                    className="h-7 w-7"
                  />
                </a>
              </div>
              <div className="opacity-70">
                <a
                  href="https://www.youtube.com/@stateofjoy1588"
                  target="_blank"
                >
                  <img
                    src="/src/assets/youtube.png"
                    alt="youtube"
                    className="h-8 w-8"
                  />
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

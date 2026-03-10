export default function ContactPage() {
  return (
    <>
      <div className="mb-24 flex flex-col items-center pt-30">
        <h1 className="my-10 p-2 text-2xl text-gray-200 underline decoration-fuchsia-800 decoration-4">
          Contact
        </h1>

        <div className="mb-12 w-full max-w-xl rounded-xl bg-black/20 p-8 shadow-xl shadow-blue-950/50">
          <form
            action="https://formsubmit.co/1962a87bea41bf3a77fd5d35dba66852"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <label className="text-sm text-gray-300" htmlFor="name">
              Name
            </label>

            <input
              className="rounded bg-gray-800 p-2 text-gray-100 focus:ring-2 focus:ring-fuchsia-700 focus:outline-none"
              type="text"
              id="name"
              name="name"
              required
            />

            <label className="text-sm text-gray-300" htmlFor="email">
              Email
            </label>

            <input
              className="rounded bg-gray-800 p-2 text-gray-100 focus:ring-2 focus:ring-fuchsia-700 focus:outline-none"
              type="email"
              id="email"
              name="email"
              required
            />

            <label className="text-sm text-gray-300" htmlFor="message">
              Message
            </label>

            <textarea
              className="min-h-[120px] rounded bg-gray-800 p-2 text-gray-100 focus:ring-2 focus:ring-fuchsia-700 focus:outline-none"
              id="message"
              name="message"
              required
            />

            <button
              type="submit"
              className="mt-4 cursor-pointer rounded bg-fuchsia-800 px-6 py-2 text-white transition hover:bg-fuchsia-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="max-w-md text-center leading-relaxed text-gray-300">
          If you're interested in collaborating on a project or licensing my
          music, feel free to get in touch using the form above, or email{" "}
          <a
            href="mailto:music@stateofjoy.co.uk"
            className="text-fuchsia-300 transition hover:text-fuchsia-200 hover:underline"
          >
            music@stateofjoy.co.uk
          </a>
          .
        </p>
      </div>
    </>
  );
}

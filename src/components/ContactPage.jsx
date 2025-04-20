export default function ContactPage() {
  return (
    <>
      <h1 className="m-10 mt-30 text-center text-lg underline">Contact</h1>
      <div className="flex justify-center">
        <div className="m-10 flex w-full max-w-xl justify-center rounded-xl shadow-xl inset-shadow-2xs shadow-blue-950/50 inset-shadow-blue-950/50">
          <form
            action="https://formsubmit.co/guyvmiddleton@gmail.com"
            method="POST"
            className="p-5"
          >
            <label htmlFor="name">Name:</label>
            <br />
            <input
              className="my-4 w-full rounded-sm bg-gray-800"
              type="text"
              id="name"
              name="name"
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              className="my-4 w-full rounded-sm bg-gray-800"
              type="email"
              id="email"
              name="email"
            />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              className="my-4 w-full rounded-sm bg-gray-800"
              type="text"
              id="message"
              name="message"
            />
            <div className="flex justify-center">
              <input
                className="mt-4 flex justify-center rounded-sm bg-linear-to-r from-white/5 to-white/10 p-1 inset-shadow-xs inset-shadow-blue-50/30 hover:cursor-pointer"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="m-10 mb-52 flex justify-center">
        <p className="w-md text-center text-gray-50">
          If you're interested in collaborating on a project or licensing my
          music, feel free to get in touch using the form above.
        </p>
      </div>
    </>
  );
}

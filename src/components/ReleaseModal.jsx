export default function ReleaseModal({ release, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="rounded-lg bg-black p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-center text-lg text-white">{release.title}</h2>

        <iframe
          style={{ border: 0, width: 350, height: release.height }}
          src={release.embed}
          seamless
        />

        <button
          onClick={onClose}
          className="mt-4 w-full rounded bg-fuchsia-800 py-2 text-white hover:bg-fuchsia-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

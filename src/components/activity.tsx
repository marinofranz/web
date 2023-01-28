import { useLanyard } from "react-use-lanyard";

export default function Activity() {
  const { loading, status } = useLanyard({
    userId: "598953747963707409",
    socket: true,
  });

  return (
    <div className="hidden min-[465px]:inline-block">
      {!loading ? (
        <div>
          {status?.spotify && (
            <a
              className="cursor-pointer hover:text-white/60 transition-all"
              href={`https://open.spotify.com/track/${status.spotify?.track_id}`}
              target="_blank"
            >
              Listening to{" "}
              <span className="font-bold">
                {status.spotify.song.split(" - ")[0].split(" (")[0]}
              </span>
            </a>
          )}
        </div>
      ) : (
        <p className="opacity-90 font-semibold">Loading activity...</p>
      )}
    </div>
  );
}

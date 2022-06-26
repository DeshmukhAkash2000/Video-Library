import { Sidebar } from "../../../Component/Sidebar/Sidebar";
import { usePlaylist } from "../../../Context/PlaylistContext";
import { Link } from "react-router-dom";
import "./MainPlaylist.css";

const MainPlaylist = () => {
  const {
    statePlaylist: { playlistName, playLists },
    dispatchPlaylist,
  } = usePlaylist();
  console.log(playlistName);

  return (
    <div className="main-watchlater-container">
      <div>
        <Sidebar />
      </div>
      <div>
        {playlistName.length === 0 ? (
          <div className="watchlater-pre-text">
            <Link to="/ExplorePage">
              <h2>There is no Playlist !</h2>
              <button className="watchlater-explore-btn">Explore Now...</button>
            </Link>
          </div>
        ) : (
          <div>
            {playlistName.map((item) => {
              return (
                <div className="playlistName-container">
                  <Link to={`/Showplaylist/${item}`}>
                    <h2 className="playlistName">{item}</h2>
                  </Link>
                  <div>
                    <button
                      className="remove-playlist-btn"
                      onClick={() =>
                        dispatchPlaylist({
                          type: "REMOVE_PLAYLIST",
                          payload: item,
                        })
                      }
                    >
                      Remove Playlist
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { MainPlaylist };

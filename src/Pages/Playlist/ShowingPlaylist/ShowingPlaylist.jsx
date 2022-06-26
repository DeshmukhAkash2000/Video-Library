import { Sidebar } from "../../../Component/Sidebar/Sidebar";
import { usePlaylist } from "../../../Context/PlaylistContext";
import { Link, useParams } from "react-router-dom";
// import "./features.css"

const ShowingPlaylist = () =>{
    const {statePlaylist: {playLists}, dispatchPlaylist } = usePlaylist()

    const { playlistId } = useParams();
    const playlistVideos = playLists.find(item => item.name === playlistId);


    return (
        <div className="main-watchlater-container">
            <div>
              <Sidebar />
            </div>
            <div>
              {playlistVideos.videos.length === 0 ? (
              <div className="watchlater-pre-text">
                <Link  to="/ExplorePage">
                  <h2>There is no playlist Videos !</h2>
                  <button className="watchlater-explore-btn">Explore Now...</button>
                </Link>
              </div>
              ) : (
                <div className="explore-main-container">
                  {playlistVideos.videos.map((item) => {
                    return (
                      <div>
                        <Link to={`/SingleVideo/${item.id}`}>
                          <div className="explore-card">
                            <img
                              className="explore-img"
                              src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                              alt=""
                            />
                            <p className="video-title">{item.title}</p>
                            <div className="card-lower-section">
                              <div className="channel-logo-container">
                                <img
                                  className="chName"
                                  src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2020/06/cropped-Copy-of-aw-1.png?fit=512%2C512&ssl=1"
                                  alt=""
                                />
                                <p className="video-date">{item.chaName}</p>
                              </div>
                              <p className="video-date">{item.views}</p>
                              <p className="video-date">{item.date}</p>
                            </div>
                          </div>
                        </Link>
                        <button className="remove-from-watchlater-btn" onClick={()=>dispatchPlaylist({type:"REMOVE_FROM_PLAYLIST", payload:{playList:playlistId,videoId:item.id}})}>Remove from playlist</button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
        </div>
      );
    };


export {ShowingPlaylist}
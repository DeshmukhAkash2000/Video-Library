import { Sidebar } from "../../Component/Sidebar/Sidebar";
import "./LikeVideo.css" 
import { useWatchlater } from "../../Context/Watchlater-Context";
import { Link } from "react-router-dom";
// import "./features.css"

const LikeVideo = () =>{
    const {stateWatchlater :{likeVideo}, dispatchWatchlater} = useWatchlater();

    return (
        <div className="main-watchlater-container">
            <div>
              <Sidebar />
            </div>
            <div>
              {likeVideo.length === 0 ? (
              <div className="watchlater-pre-text">
                <Link  to="/ExplorePage">
                  <h2>There is no liked Videos !</h2>
                  <button className="watchlater-explore-btn">Explore Now...</button>
                </Link>
              </div>
              ) : (
                <div className="explore-main-container">
                  {likeVideo.map((item) => {
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
                        <button className="remove-from-watchlater-btn" onClick={()=>dispatchWatchlater({type:"REMOVE_FROM_LIKE", payload:item})}>Remove from Like</button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
        </div>
      );
    };


export {LikeVideo}